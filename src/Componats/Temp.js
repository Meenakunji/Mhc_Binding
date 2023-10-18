/* global $3Dmol */
import React, { useState, useEffect, useRef } from "react";
// import "./App.css";

function Temp() {
  const [proteins, setProteins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ProteinViewer = ({ pdbId, peptides }) => {
    const viewerRef = useRef(null); // Reference to the container for the viewer

    useEffect(() => {
      // This function fetches the pdb data and initializes the viewer
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://files.rcsb.org/download/${pdbId}.pdb`
          );
          const pdbData = await response.text();

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const viewer = new $3Dmol.createViewer(viewerRef.current, {
            defaultcolors: $3Dmol.rasmolElementColors,
          });

          const m = viewer.addModel(pdbData, "pdb");
          viewer.setStyle({}, { cartoon: { color: "spectrum" } });

          // If peptides are provided, you can add additional visualization or styles here
          if (peptides) {
            // Loop through peptides and add styles or other visualization
            peptides.forEach((peptide) => {
              const { start, end } = peptide;
              viewer.setStyle(
                { resi: `${start}-${end}` },
                { cartoon: { color: "black" } }
              );
            });
          }

          viewer.zoomTo();
          viewer.render();
          viewer.animate({ loop: "backAndForth" });
        } catch (error) {
          console.error("Fetching PDB failed", error);
        }
      };

      fetchData();
    }, [pdbId, peptides]); // The effect depends on pdbId and peptides, re-run if they change

    return (
      <div
        style={{ position: "relative", width: "800px", height: "400px" }}
        ref={viewerRef}
      />
    );
  };

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://app.prepaire.com:5067/mhcapi/api/analyze_proteins",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            alleles: ["A*02:01", "hla-a0101"],
            protein_ids: ["4V0R", "4V0Q"],
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setProteins(data); // Set the state with the fetched data
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Protein Analysis</h1>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button onClick={fetchData} disabled={loading}>
            Fetch Data
          </button>
        )}
        {/* Iterate over the proteins array and display the data */}
        {proteins.length > 0 && (
          <div>
            {proteins.map((protein) => (
              <div key={protein.pdb_id}>
                <h2>{`Protein: ${protein.pdb_id}`}</h2>
                <ProteinViewer
                  pdbId={protein.pdb_id}
                  // peptides={null}
                />
                <ProteinViewer
                  pdbId={protein.pdb_id}
                  peptides={protein.peptides}
                />

                {/* <h3>Peptides:</h3> */}
                {/* {protein.peptides.map((peptide, index) => (
                  <div key={index}>
                    <p>{`mRNA: ${peptide.mRNA}`}</p>
                    <p>{`Peptide: ${peptide.peptide}`}</p>
                  </div>
                ))} */}
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default Temp;

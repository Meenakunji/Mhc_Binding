/* global $3Dmol */
import React, { useState, useEffect, useRef,forwardRef, useImperativeHandle } from "react";
import './Molucule.css';
import Loading from "./Body/Loader/loader";

const MolculeView = forwardRef((props, ref) => {
  const dummydata= [1, 2];
  const [proteins, setProteins] = useState(dummydata);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
   
  const TWO = 2;
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
        style={{ position: "relative", width: "437px", height: "313px" }}
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
            protein_ids: ["4V0Q", "5JJR"],
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

  useImperativeHandle(ref, () => ({
    fetchData,
   }));

  

  return (
    <div className="Tul">
      <header className="Tul-header">
        {error && <div style={{ color: "red" }}>{error}</div>}
        
        
        {proteins.length > 0 && (
          <div className="d-flex">
            {proteins.map((protein) => (
              <div key={protein.pdb_id} style={{ display: "flex" }} className="three-d-box">
                
                {/* {loading? <span className="card-3d"><Loading/></span> : */}
                
                <div  className="card-3d">
                 
                  <h3>Original Protien 3D Structure</h3>

                 {loading?<p className="loading"> <Loading/> </p>: 
                 <div>
                  <p>{protein.pdb_id}</p>
                  <ProteinViewer
                    pdbId={protein.pdb_id}
                    // peptides={null}
                  />
                 </div>
                }
                
                  
                 
                </div>
              {/* } */}
                <div className="card-Protien">
                   <h3>Protein Structure with Peptides highlight</h3>
                   {loading?<p className="loading"> <Loading/> </p>: 
                   <div>
                  <p>{protein.pdb_id}</p>
                   <ProteinViewer
                    pdbId={protein.pdb_id}
                    peptides={protein.peptides}
                  />
                  </div>
               }
                </div>
              </div>
            ))}
          </div>
        )}
      
      </header>
    </div>
  );
});

export default MolculeView;

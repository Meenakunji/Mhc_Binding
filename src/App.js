import logo from './logo.svg';
import './App.css';
import Header from './Componats/Header';
import CardProtien from './Componats/Body/InputProtien';
import ProcessingComponent from './Componats/Body/Processing';
import ResultCard from './Componats/Body/ResultCard';
import Alignment from './Componats/Body/AlignmentDisplay';
import FaqCard from './Componats/Body/Faq';
import Card3D from './Componats/Body/ThreeDStruct';
import CardProtienStruct from './Componats/Body/ProtienStruct';
import LeftFooterCard from './Componats/Footer/Leftfooter';
import RightFooterCard from './Componats/Footer/RightFooter';
import Temp from './Componats/Temp';
import MolculeView from './Componats/Molucule';

function App() {
  return (
     <div className='Conatiner'>
      {/* <Header/> */}
     <div className='body'>
      <h3>Binding Analaysis Tool</h3>
      <div className='body_box'>
        <CardProtien/>
        <ProcessingComponent/>
      </div>
      <div className='body_box'>
       <ResultCard />
       <MolculeView/>
        
      </div>
      <div className='body_box'>
        <FaqCard/>
       <div className='three_d_structure'>
         <Card3D/>
         <CardProtienStruct/>
       </div>
     </div>
     
     </div>
     <div className='footer'>
     <LeftFooterCard/>
     <RightFooterCard/>
     </div>
     <Temp/>
  </div>
  );
}

export default App;

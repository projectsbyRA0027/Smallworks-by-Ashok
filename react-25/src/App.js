import './App.css';
import Accordian from './components/accordian';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import GithubProfileFinder from './components/github-profile-finder';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import QRCodeGenerator from './components/qrcode-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import TicTacToe from './components/tic-tact-toe';
import StarRating from './components/star-rating';
import SerchAutocomplete from './components/serch-auto-complete-with-api';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
function App() {
  return (
   <div className='app'>
     {/* Accordian component */}
       <Accordian/> 
     {/* Custom Modal Component */}
      <ModalTest/>
      <hr />
      <TabTest />
      <hr />
       {/* Github profile finder */}
       <GithubProfileFinder/>
       <hr/> 
      {/* Image slider component */}
       <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />  
       {/* light and dark theme switch */}
       <LightDarkMode/>
       <QRCodeGenerator/>
       <RandomColor />
       <ScrollIndicator/>
       <TicTacToe />
       <StarRating noOfStars={10} />
       <SerchAutocomplete />
       <TreeView menus={menus} />
       

       
 

   </div>
  );
}

export default App;

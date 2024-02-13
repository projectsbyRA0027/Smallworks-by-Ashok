import './App.css';
import Accordian from './components/accordian';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import GithubProfileFinder from './components/github-profile-finder';
function App() {
  return (
   <div className='app'>
     {/* Accordian component */}
       <Accordian/> 
     {/* Custom Modal Component */}
      <ModalTest/> 
      <TabTest />
       {/* Github profile finder */}
       <GithubProfileFinder/> 
 

   </div>
  );
}

export default App;

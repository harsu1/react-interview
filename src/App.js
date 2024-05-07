 
import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
     {/* Accordian component */}
     <Accordian/>
     
     {/* random color component */}
     <RandomColor/>

     {/* Image slider component */}
     <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={'10'}/>

    </div>
  );
}

export default App;

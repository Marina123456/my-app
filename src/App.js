import logo from './logo.svg';
import 'aframe'
import './App.css'

function App() {
  function activateLasers(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <div> 
      <div className='Popup1'>kjlk</div>   
      <a-scene>
        <a-entity id="camera1" camera cursor="rayOrigin: mouse"></a-entity>
        <a-assets>
            <img id="sky" src='./img.png' />
            <img id="icon" src='./icon.png' />
          </a-assets>
        <a-plane position="6 -1 -5" src="#icon" transparent width="1.1" height="1.1" rotation="-10 -40 0" onClick={(event) => alert("sjhsj")}></a-plane>
        <a-sky src="#sky"></a-sky>
    </a-scene>
    </div>
  );
}



export default App;

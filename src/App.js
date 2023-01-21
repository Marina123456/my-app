import logo from './logo.svg';
import 'aframe'


function App() {
  function activateLasers(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (    
    <a-scene>
        
        <a-plane position="6 -1 -5" color="green" width="1.1" height="1.1" rotation="-10 -40 0" onClick={(event) => alert("sjhsj")}></a-plane>
        <a-assets>
            <img id="sky" src='./img.png' />
          </a-assets>
        <a-sky src="#sky"></a-sky>
    </a-scene>
  );
}



export default App;

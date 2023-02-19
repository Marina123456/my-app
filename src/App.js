import 'aframe'
import './App.css'
import React, { useState,useEffect } from 'react';
import dataItemsJson from './data.json'




function App() { 
  //const audioTune = new Audio('./VID_20230126192538.mp3');
  const [audioTune, setaudioTune] = useState(new Audio('./VID_20230126192538.mp3'));
  useEffect(() => {
    //audioTune.load();
  }, []);
  const playSound = () => {
    
    audioTune.play();
  }
    
  const pauseSound = () => {
      audioTune.pause();
    
    
  }
 
  
  const [isShowPlay, setShowPlay] = useState(true);
  const [isShow, setShow] = useState(false);
  const [item, setItem] = useState({    
      id:0,
      img:"",
      name:"",
      description:""
  
  }); 
  const findItem = (id)=>{
    let result = dataItemsJson.items.filter(item => item.id == id)[0];
    console.log(result);
    setItem(Object.assign({}, result));
    console.log(item);
  }
  return (
    <div> 
      <div style={{display:  isShow ? 'block' : 'none'}}  className='fixed-overlay'>
      <div className="modal">
      <div className="modal_container"> 
      <img width="40px" className="close" src="./close.png" onClick={(event) => { setShow(!isShow);}}/>
        <img width="100%" src={item.img}/>
        
        <p className='Name'>{item.name}</p>
        <p className='Text'>{item.description}</p>
        
        </div>
        </div>
      </div>
      <div className='Audio'>
        <img alt="запустить" style={{display:  isShowPlay ? 'block' : 'none'}} src="./pley.svg" width="100px"   className="aud" onClick={(event) => { playSound(); setShowPlay(false); }}/>
        
        <img alt="пауза" style={{display:  !isShowPlay ? 'block' : 'none'}} src="./pauza.svg" width="100px"   className="aud" onClick={(event) => {pauseSound(); setShowPlay(true); }}/>
        
      </div>
      <audio class="audio" audio="./VID_20230126192538.mp3" loop></audio>  
      
      <a-scene ar-mode-ui="enabled: false" vr-mode-ui="enabled: false">
        <a-entity id="camera1" camera cursor="rayOrigin: mouse; fuse: false;" look-controls="magicWindowTrackingEnabled: false"></a-entity>
        <a-assets>
            <img id="sky" src='./new.jpg' />
            <img id="icon" src='./media/Info.png' />
          </a-assets>
          
         <a-plane className='box'  href='popua1' position="1.5 4.5 -2.5 " src="#icon" transparent width="1.2" height="1.2" rotation="5 -35  0" onClick={(event) => { findItem(4); setShow(!isShow);}}></a-plane>
         
        <a-image position="0 0.5 -7" src="#icon"  width="1.1" height="1.1" rotation="0 -10 0" onClick={(event) => { findItem(3); setShow(!isShow);}}></a-image>
        <a-plane position="6 0  1" src="#icon" transparent width="1.1" height="1.1" rotation="0 -90 0" onClick={(event) => { findItem(2); setShow(!isShow);}}></a-plane>
        <a-plane position="1 -0,8  2" src="#icon" transparent width="1.1" height="1.1" rotation="0 -145 0" onClick={(event) => { findItem(5); setShow(!isShow);}}></a-plane>
        <a-plane position="1 0 -6.5" src="#icon" transparent width="1.1" height="1.1" rotation="0 -10 0" onClick={(event) => { findItem(6); setShow(!isShow);}}></a-plane>
        
        <a-sky src="#sky"></a-sky>
    </a-scene>
    </div>
  );
}

<div id="popua1" className='overplay'>

</div>





export default App;

import React, {useRef, useEffect} from 'react';
import './App.css';
//import { ReactComponent as Title } from './title.svg'
import title from './title.png'
import {Sketch} from './utils'
//import './utils'


function App() {
  const ref = useRef(null);
  useEffect(() =>  {
    if(ref.current && !ref.current.querySelector("canvas")) {
      new Sketch({
        dom: ref.current
      });
    }
  }, [])

  return (
    <div className="container" ref={ref} id="container">
      <img src={title} />
    </div>
  );
}

export default App;

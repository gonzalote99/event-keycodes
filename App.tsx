import * as React from 'react';
import {useEffect, useState} from 'react';
import { SC } from './styled'
import './style.css';
import { CodeDisplay, KeyDisplay, InitialMessage} from "./components";

export const App = () => {
  document.title = "event keyCodes";
  const [keyboardKey, setKeyboardKey ] = useState("");
  const [code, setCode ] = useState(0);
  const audio = new Audio("key.mp3");


  useEffect(() => {
    document.addEventListener("keyup", handleKey );
    return () => {
      document.removeEventListener("keyup", handleKey)
    }
  }, []);
  const handleKey = (event: any): any => {
    setKeyboardKey(event.key);
    setCode(event.keyCode)
  }




  return (
    <SC.App>
      {!code && <InitialMessage />}
      <CodeDisplay code={code} />
      <KeyDisplay keyboardKey={keyboardKey=== " " ? "Space" : keyboardKey} />
    </SC.App>
  );
}


export default App;
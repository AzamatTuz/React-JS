
import ChangeText from "./components/ChangeText";
import InpText from "./components/InputToText";
import Count from "./components/AddCount";
import ChangeColor from "./components/ChangeColor";
import Button from "./components/Button";
import { useState } from "react";




export default function App() {

  const [content, setContent] = useState()

  function click(p) {
    setContent(p)
    
  }
  

  return (
    <div>
      <ChangeText/>
      <br />
      <br />
      <InpText/>

      <ChangeColor/>

      <Count/>
      <button onClick={() => click('clicked')}>aswedfg</button>

    <Button isActive={content == 'Topchik'} onClicked={() => click('Topchik')}>Topchik</Button>
    <Button isActive={content == 'Test'} onClicked={() => click('Test')}>Test</Button>
    <Button isActive={content == 'Lorem'} onClicked={() => click('Lorem')}>Lorem</Button>
    <p>{content}</p>
      
    </div>
  );
}

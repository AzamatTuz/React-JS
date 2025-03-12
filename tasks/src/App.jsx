import ColorSwitcher from "./components/ColorSwitcher";
import Count from "./components/Count";
import CountdownTimer from "./components/CountdownTimer";


export default function App() {
  return (
    <div>
      <Count/>
      <ColorSwitcher/>
      <CountdownTimer/>
    </div>
  );
}
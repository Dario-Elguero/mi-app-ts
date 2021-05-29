import { Counter } from "./components/Counter";
import { TimerFather } from "./components/TimerFather";
import { User } from "./components/User";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr/>
      <Counter/>
      <hr/>
      <User/>
      <hr/>
      <h2>useEffect + useRef</h2>
      <TimerFather/>
    </>
  );
}

export default App;

import { WeekTwo } from "@components/WeekTwo";
import "./App.css";
import { WeekOne } from "@components/WeekOne";

function App() {
  return (
    <div className="m-8">
      <div>
        <WeekTwo />
      </div>
      <div>
        <WeekOne />
      </div>
    </div>
  );
}

export default App;

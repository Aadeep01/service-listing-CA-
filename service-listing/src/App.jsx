import ServiceCard from "./components/ServiceCard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <ServiceCard title="Web Development" description="Building modern websites and web apps." />
      <ServiceCard title="Graphic Design" description="Creating visually appealing designs." />
    </div>
  );
}

export default App;
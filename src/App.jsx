import "./App.css";
import CardComponent from "./components/CardComponent";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <>
      <NavbarComponent />

      <div className="flex gap-8 m-8">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>

      <FooterComponent />
    </>
  );
}

export default App;

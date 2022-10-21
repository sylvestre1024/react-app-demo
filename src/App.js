import './App.css';
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <h2>Etes-vous-pret à faire de grandes choses en React ?</h2>
      <Login />
      <Welcome/>
    </div>
  );
}

export default App;

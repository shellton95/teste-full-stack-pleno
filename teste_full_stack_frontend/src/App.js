import './App.css';
import RoutesApp from "./router/routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      {/* <div id='header'> <Header /> </div>
      <div id='footer'><Footer /></div> */}
      <ToastContainer autoClose={5000}/> 
      <RoutesApp/>
    </div>
  );
}

export default App;

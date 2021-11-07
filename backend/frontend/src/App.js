import "./App.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./components/Home";
// import AddBook from "./components/AddBook";

function App() {
  return (
    <>
      <Background></Background>
      <Navbar></Navbar>
      <Home></Home>
      {/* <AddBook></AddBook> */}
    </>
  );
}

export default App;

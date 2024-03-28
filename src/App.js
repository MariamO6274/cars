import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <h1 style={styles.title}>Hello</h1>
      <Navbar/>
    </>
  );
}

export default App;


const styles = {
  title: {
    color: "blue"
  }
}
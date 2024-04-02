import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <h1 style={styles.title}>Hello</h1>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;


const styles = {
  title: {
    color: "blue"
  }
}
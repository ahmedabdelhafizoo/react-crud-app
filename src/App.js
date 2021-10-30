import LoadingBar from "react-redux-loading";
import Movies from "./pages//Movies";
function App() {
  return (
    <div className="App">
      <LoadingBar
        style={{
          backgroundColor: "#20c997",
          height: "6px",
          position: "fixed",
          top: "0",
          zIndex: "9999",
        }}
      />
      <Movies />
    </div>
  );
}

export default App;

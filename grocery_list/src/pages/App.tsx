import Login from "./Login";

function App() {
  return (
    <>
      <div
        style={{
          width: "20%",
          margin: "15% 40%",
          border: "solid whitesmoke",
          padding: "30px",
        }}
      >
        <h1 style={{ fontSize: "20px", marginLeft: "35%" }}>Login</h1>
        <br />
        <Login
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>
    </>
  );
}

export default App;

import Login from "./Login";

function App() {
  return (
    <>
      <div style={{ width: "20%", margin: "20% 40%" }}>
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

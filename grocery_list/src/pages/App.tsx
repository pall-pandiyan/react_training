import Login from "./Login";

function App() {
  return (
    <>
      <Login
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </>
  );
}

export default App;

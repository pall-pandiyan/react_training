import Login from "./Login";
import GroceryList from "./GroceryList";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);

  if (isLoggedIn) {
    return <GroceryList />;
  }
  return (
    <>
      <div
        style={{
          width: "20%",
          margin: "10% 40%",
          border: "solid whitesmoke",
          padding: "30px",
        }}
      >
        <Login
          onSubmit={(data) => {
            console.log(data);
            if (data.email === "admin" && data.password === "secret") {
              setIsLoggedIn(true);
            } else {
              setShowLoginError(true);
            }
          }}
        />
        {showLoginError && (
          <p
            style={{
              margin: "20px",
              padding: "3px",
              backgroundColor: "yellow",
            }}
          >
            Invalid Credentials
          </p>
        )}
      </div>
    </>
  );
}

export default App;

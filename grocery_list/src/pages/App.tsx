import Login from "./Login";
import Grocery from "./Grocery";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLoginError, setShowLoginError] = useState(false);

  if (isLoggedIn) {
    return <Grocery />;
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

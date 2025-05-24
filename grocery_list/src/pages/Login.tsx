//
// Facebook like login page. email, password inputs and submit button vertically stacked.
// emailText    : string : optional (default: Email Address)
// passwordText : string : optional (default: Password)
// submitText   : string : optional (default: Login)
// onSubmit     : submit function   : required  (event as input returns nothing)
//
// Developer: Pall Pandiyan.S
//

import { useRef } from "react";

// this interface used for the form data.
interface FormData {
  email: string;
  password: string;
}

// this interface used for the componment input.
interface Props {
  emailText?: string;
  passwordText?: string;
  submitText?: string;
  onSubmit: (data: FormData) => void;
}

// main component of login page
function Login({
  emailText = "Email Address",
  passwordText = "Password",
  submitText = "Login",
  onSubmit,
}: Props) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // this function will handle the form submition, convert the form data to object and call the onSubmit provided as input.
  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    // make sure that the page is not reloaded.
    event.preventDefault();
    onSubmit({
      email: emailRef.current ? emailRef.current.value : "",
      password: passwordRef.current ? passwordRef.current.value : "",
    });
  }

  return (
    <>
      <h1 style={{ fontSize: "20px", marginLeft: "35%" }}>Login</h1>
      <br />
      <form className="row g-3">
        <input
          id="email_input"
          type="text"
          ref={emailRef}
          className="form-control"
          placeholder={emailText}
        />

        <input
          id="password_input"
          type="password"
          ref={passwordRef}
          className="form-control"
          placeholder={passwordText}
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          {submitText}
        </button>
      </form>
    </>
  );
}

export default Login;

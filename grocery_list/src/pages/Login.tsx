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

interface FormData {
  email: string;
  password: string;
}

interface Props {
  emailText?: string;
  passwordText?: string;
  submitText?: string;
  onSubmit: (data: FormData) => void;
}

function Login({
  emailText = "Email Address",
  passwordText = "Password",
  submitText = "Login",
  onSubmit,
}: Props) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    onSubmit({
      email: emailRef.current ? emailRef.current.value : "",
      password: passwordRef.current ? passwordRef.current.value : "",
    });
  }

  return (
    <form className="row g-3">
      <div className="col-auto">
        <input
          id="email_input"
          type="text"
          ref={emailRef}
          className="form-control"
          placeholder={emailText}
        />
      </div>
      <div className="col-auto">
        <input
          id="password_input"
          type="password"
          ref={passwordRef}
          className="form-control"
          placeholder={passwordText}
        />
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleSubmit}
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}

export default Login;

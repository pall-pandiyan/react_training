//
// Bootstrap version of button, can have the following inputs:
// childer : string : required
// color   : string : optional : (default: primary)
// onClick : gets event and return nothing.
//
// Developer: Pall Pandiyan.S
//

interface Props {
  children: string;
  color?: string;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  children,
  color = "primary",
  className = "",
  onClick,
}: Props) => {
  return (
    <button className={"btn btn-" + color + " " + className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

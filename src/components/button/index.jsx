import { StyleButton } from "./styles";

const Button = ({ children, ...rest }) => {
  return <StyleButton {...rest}>{children}</StyleButton>;
};
export default Button;

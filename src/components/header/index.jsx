import { useContext } from "react";
import { WindowContext } from "../../providers/window";
import HeaderDesktop from "../headerDesktop";
import HeaderMobile from "../headerMobile";
import { Heade } from "./styles";

const Header = () => {
  const { width } = useContext(WindowContext);
  return <Heade>{width <= 768 ? <HeaderMobile /> : <HeaderDesktop />}</Heade>;
};
export default Header;

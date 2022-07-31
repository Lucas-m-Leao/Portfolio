import { useContext, useState } from "react";
import Button from "../button";
import { ApiGitContext } from "../../providers/ApiGit";
import {
  Avatar,
  Container,
  Heade,
  Menu,
  MenuMobile,
  MenuStyled,
  Section,
} from "./styles";
import { ImMenu4 } from "react-icons/im";
import { ImMenu3 } from "react-icons/im";
const Header = () => {
  const { user } = useContext(ApiGitContext);
  const [menu, setMenu] = useState(false);
  return (
    <Heade>
      <Section>
        <Container>
          <MenuMobile>
            {!menu ? (
              <ImMenu4 onClick={() => setMenu(!menu)} className="MenuClose" />
            ) : (
              <ImMenu3 onClick={() => setMenu(!menu)} className="MenuClose" />
            )}
          </MenuMobile>
          {menu && (
            <MenuStyled>
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Projetos</a>
              </li>
            </MenuStyled>
          )}
          <Avatar>
            <img src={user.avatar_url} alt="" />
            <h2>
              Lucas <span>Moreira</span>
            </h2>
          </Avatar>
        </Container>
        <Button onClick={() => {}} width="6rem" height="1.8rem">
          Fale Comigo!
        </Button>
      </Section>
    </Heade>
  );
};
export default Header;

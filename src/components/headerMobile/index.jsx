import { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Button from "../button";
import {
  Avatar,
  Container,
  MenuMobile,
  MenuStyledClose,
  MenuStyledOpen,
} from "./styles";
const HeaderMobile = () => {
  const [menu, setMenu] = useState("");
  return (
    <>
      <Container>
        <section>
          <div className="divMobile">
            <MenuMobile>
              {!menu ? (
                <ImMenu4 onClick={() => setMenu(true)} className="MenuClose" />
              ) : (
                <ImMenu3 onClick={() => setMenu(false)} className="MenuClose" />
              )}
            </MenuMobile>
            <Avatar>
              <h2>
                Lucas <span>Moreira</span>
              </h2>
            </Avatar>
          </div>
          <Button onClick={() => {}} width="6rem" height="1.8rem">
            Fale Comigo!
          </Button>
        </section>
      </Container>
      {menu === false ? (
        <MenuStyledClose>
          <ul>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
          </ul>
        </MenuStyledClose>
      ) : (
        menu === true && (
          <MenuStyledOpen>
            <ul>
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Projetos</a>
              </li>
            </ul>
          </MenuStyledOpen>
        )
      )}
    </>
  );
};

export default HeaderMobile;

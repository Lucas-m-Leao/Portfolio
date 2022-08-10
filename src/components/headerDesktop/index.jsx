import { useContext } from "react";
import { ApiGitContext } from "../../providers/ApiGit";
import Button from "../button";
import {
  Avatar,
  ButtonsContainer,
  Container,
  ContainerMenu,
  DivMenu,
} from "./styles";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const HeaderDesktop = () => {
  const { user } = useContext(ApiGitContext);
  return (
    <>
      <Container>
        <Avatar>
          <img src={user.avatar_url} alt="" />
          <h1>{`< ${user.name} />`}</h1>
        </Avatar>
        <ButtonsContainer>
          <Button width="3rem">
            <BsLinkedin className="icons" />
          </Button>
          <Button width="3rem">
            <BsInstagram className="icons" />
          </Button>
          <Button width="3rem">
            <BsGithub className="icons" />
          </Button>
          <Button
            onClick={() => {}}
            width="6rem"
            height="2rem"
            color="white"
            background="red"
          >
            Fale Comigo!
          </Button>
        </ButtonsContainer>
      </Container>
      <ContainerMenu>
        <DivMenu>
          <button>
            <a href="">{`< Sobre Min />`}</a>
          </button>
          <button>
            <a href="">{`< Projetos />`}</a>
          </button>
        </DivMenu>
        <DivMenu>
          <button>
            <a href="">{`< Tecnologias />`}</a>
          </button>
          <button>
            <a href="">{`< Contato />`}</a>
          </button>
        </DivMenu>
      </ContainerMenu>
    </>
  );
};

export default HeaderDesktop;

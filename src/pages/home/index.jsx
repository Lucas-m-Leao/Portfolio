import Form from "../../components/Form";
import Header from "../../components/header";
import Projetos from "../../components/projetos";
import Summary from "../../components/summary";
import TechnologyCarousel from "../../components/technologyCarousel";
import { Container, ContainerInternal } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerInternal>
          <Summary />
          <TechnologyCarousel />
          <Projetos />
        </ContainerInternal>
      </Container>
      <Form />
    </>
  );
};

export default Home;

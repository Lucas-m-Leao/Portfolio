import Header from "../../components/header";
import Summary from "../../components/summary";
import { Container, ContainerInternal } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerInternal>
          <Summary />
        </ContainerInternal>
      </Container>
    </>
  );
};

export default Home;

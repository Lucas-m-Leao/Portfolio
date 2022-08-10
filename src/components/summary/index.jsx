import { useState } from "react";
import Lottie from "react-lottie";
import animação1 from "../../assets/animation/imagem1.json";
import { Container } from "./styles";
const Summary = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animação1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [animateState] = useState({
    isStopped: false,
    isPaused: false,
  });

  return (
    <Container>
      <div>
        <Lottie
          options={defaultOptions}
          isStopped={animateState.isStopped}
          isPaused={animateState.isPaused}
        />
      </div>
      <section>
        <h2>
          Lucas <span>Moreira</span>
        </h2>
        <h3>UX/UI Designer/Fullstack Developer</h3>
        <p>
          Se você contar sua ideia para 10 pessoas e 9 delas disser que você
          está maluco, provavelmente você está fazendo algo inovador.
        </p>
        <p>Nolan Bushnell</p>
      </section>
    </Container>
  );
};

export default Summary;

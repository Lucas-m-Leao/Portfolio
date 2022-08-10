import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Nukenzie from "../../../src/assets/img/Nukenzie/Nukenzie.png";
import BurguerKenzie from "../../assets/img/Burguer Kenzie/burguerKenzie.png";
import kenzieHub from "../../assets/img/Kenzie Hub/kenzieHub.png";
import YourMoney from "../../assets/img/Your Money/yourMoney.png";
import kenzieShop from "../../assets/img/Kenzie shop/kenzieShop.png";
import { useRef } from "react";
import { Container, ContainerButton } from "./styles";

const Projetos = () => {
  const images = [Nukenzie, YourMoney, kenzieHub, BurguerKenzie, kenzieShop];
  const handleLeftClick = (e, tamanho) => {
    e.preventDefault();
    carousel.current.scrollLeft -= tamanho;
  };
  const handleRigthClick = (e, tamanho) => {
    e.preventDefault();
    carousel.current.scrollLeft += tamanho;
  };
  const carousel = useRef(null);
  return (
    <>
      <Container ref={carousel}>
        {images.map((element, index) => {
          return (
            <li key={index}>
              <img src={element} alt={element.images} />
            </li>
          );
        })}
      </Container>
      <ContainerButton>
        <button
          onClick={(e) => handleLeftClick(e, carousel.current.offsetWidth)}
        >
          <FaArrowLeft className="arrow" />
        </button>
        <button
          onClick={(e) => handleRigthClick(e, carousel.current.offsetWidth)}
        >
          <FaArrowRight className="arrow" />
        </button>
      </ContainerButton>
    </>
  );
};

export default Projetos;

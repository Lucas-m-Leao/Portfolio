import { useEffect, useRef, useState } from "react";
import TechnologyIcons from "../technologyIcons";
import { Container, ContainerDiv } from "./styles";

const TechnologyCarousel = () => {
  const data = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "Javascript",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      name: "Materialui",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Figma",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      name: "AfterEffects",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      name: "Illustrator",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
      name: "Photoshop",
    },
  ];
  const [ref, setRef] = useState("");
  useEffect(() => {
    teste();
  }, [ref]);
  const teste = () => {
    setTimeout(() => {
      carousel.current.scrollLeft += 110;
      if (ref === carousel.current.scrollLeft) {
        carousel.current.scrollLeft = 0;
        return setRef(carousel.current.scrollLeft + 1);
      }
      setRef(carousel.current.scrollLeft);
    }, 5000);
  };
  const carousel = useRef(null);
  const handleClick = (e, tamanho) => {
    e.preventDefault();
    carousel.current.scrollLeft += tamanho;
  };
  return (
    <>
      <h2>Tecnologias</h2>
      <Container ref={carousel}>
        <ul>
          {data.map((element) => (
            <TechnologyIcons
              img={element.img}
              name={element.name}
              key={element.name}
            />
          ))}
        </ul>
      </Container>
      <ContainerDiv>
        <input
          type="radio"
          name="btn"
          id="btn1"
          onClick={(e) => handleClick(e)}
        />
        <input
          type="radio"
          name="btn"
          id="btn2"
          onClick={(e) => handleClick(e, carousel.current.offsetWidth)}
        />
      </ContainerDiv>
    </>
  );
};

export default TechnologyCarousel;

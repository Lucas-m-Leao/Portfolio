import { Container } from "./styles";

const TechnologyIcons = ({ img, name }) => {
  return (
    <Container>
      <img src={img} alt={name} />
      <div className="divInternal">
        <h2>{name}</h2>
      </div>
    </Container>
  );
};

export default TechnologyIcons;

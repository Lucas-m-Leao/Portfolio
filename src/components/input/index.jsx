import { MdErrorOutline } from "react-icons/md";
import { Container, ContainerDiv } from "./styles";
const Input = ({ label, name, register, error, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <ContainerDiv>
        <input {...register(name)} {...rest} />
        {!error && (
          <>
            <div>
              <MdErrorOutline className="icon" />
            </div>
            <span>Erro errado</span>
          </>
        )}
      </ContainerDiv>
    </Container>
  );
};
export default Input;

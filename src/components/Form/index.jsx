import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../input";
import { ContainerButton, TextArea } from "../input/styles";
import Button from "../button";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmitFunction = (data) => {};
  return (
    <>
      <h2>Fale Comigo</h2>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          placeholder="Digite seu nome."
          label={"Nome"}
          name={"name"}
          register={register}
        />
        <Input
          placeholder="Digite seu email."
          label={"Email"}
          name={"email"}
          register={register}
        />
        <Input
          placeholder="Repita seu email."
          label={"Repetir email"}
          name={"repeatEmail"}
          register={register}
        />
        <Input
          placeholder="Digite seu assunto."
          label={"Assunto"}
          name={"subject"}
          register={register}
        />
        <TextArea>
          <label htmlFor="Mensagem">Mensagem</label>
          <textarea name="" id="" cols="30" rows="10" />
        </TextArea>
        <span></span>
        <ContainerButton>
          <Button>Enviar Mensagem</Button>
        </ContainerButton>
      </form>
    </>
  );
};

export default Form;

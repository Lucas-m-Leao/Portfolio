import styled from "styled-components";

export const Container = styled.div`
width: 50%;
label{
    margin-left: 5px;
}
`
export const ContainerDiv = styled.div`
width: 100%;
height: 2rem;
display: flex;
border: solid 1px black;
padding: 2px;
border-radius: 10px;
align-items: center;
input{
    width: 100%;
    border: none;
    outline: none;
    padding-left: 10px;
}
.icon{
    color: red;
    width: 20px;
    height: 90%;
}
span{
    border-radius: 10px;
    position: absolute;
    left: 11rem;
    border: solid 1px black;
    padding: 5px;
    color: red;
}
`
export const TextArea = styled.div`
display: flex;
flex-direction: column;
label{
    padding-left: 5px;
}
textarea{
    resize:none
}

`
export const ContainerButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
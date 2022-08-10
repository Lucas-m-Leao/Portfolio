import styled from "styled-components";

export const Container = styled.div`
overflow-x: scroll;
overflow-y: hidden;
width: 100%;
scroll-behavior: smooth;
::-webkit-scrollbar { 
  display: none;
}
ul{
    display:-webkit-inline-box;
    gap: 40px;
    height: 100px;
}
@media (min-width:770px) {
    ul{
        height: 125px;
        gap: 60px;
    }
}
`
export const ContainerDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
gap: 15px;

`
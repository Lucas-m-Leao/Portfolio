import styled from "styled-components";

export const Container = styled.ul`
width: 100%;
display:-webkit-inline-box;
overflow-x: auto;
overflow-y: hidden;
scroll-behavior: smooth;
transition: .6s;
    img{
     width: 100%;
     height: 100%;
   }
::-webkit-scrollbar { 
  display: none;
}
`
export const ContainerButton = styled.div`
width: 100%;
position: relative;
display: flex;
gap: 50px;
justify-content: center;
.arrow{
    width:100%;
    height: 100%;
}
button{
    border: none;
    margin-top:5px;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}

`
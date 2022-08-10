import styled from "styled-components";

export const Container = styled.section`
width: 90%;
padding:15px 0; 
display: flex;
justify-content: space-between;
align-items: center;
.icons{
    width: 1.2rem;
    height: 1.5rem;
}
`
export const Avatar = styled.div`
display: flex;
align-items: center;
img{
    width: 3rem;
    border-radius: 100px;
}
h1{
    margin-left: 15px;
    color: black;
}
`
export const ButtonsContainer = styled.div`
display: flex;
gap: 10px;
`
export const ContainerMenu = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
`
export const DivMenu = styled.div`
display: flex;
gap: 30px;
button{  
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 15px;
    color: black;
    transition: .6s;
    border: none;
    background-color: transparent;
}
button:hover{
    border-bottom: solid 2px black;
    border-radius: 10px;
    color: white;
}
a{
    color: black;
}
`
import styled, { keyframes } from "styled-components"

export const Container = styled.div`
width: 100%;
padding: 8px 0;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
section{
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
}
.divMobile{
    display: flex;
}
`
export const Avatar = styled.div`
display: flex;
align-items: center;
gap: 15px;
img{
    width: 3.5rem;
    border-radius: 100px;
    display: none;
}
h2{
    font-size: 20px;
}
`
export const MenuMobile = styled.div`
.MenuClose{
    width: 24px;
    height: 26px;
    cursor: pointer;
}
display: flex;
align-items: center;
`
const Menus = keyframes`
from{
display: flex;
height: 60px;
}
to{
height: 0;
display: none;}
`
export const MenuStyledClose = styled.div`
width: 100%;
background-color: red;
justify-content: center;
overflow: hidden;

animation:${Menus} .6s cubic-bezier(0.71, -0.01, 0.37, 1.03) forwards;
display:flex;
ul{
padding: 5px 5px 5px 0;
width: 90%;
gap:2px;
z-index: 50;
flex-direction: column;
transition:.6s;
display: flex;
gap:8px;
}
li{
    padding: 0px 3px;
    z-index: 50;
    min-height: 20px;
}
a{
    color: white;
}
`
const animationOpen = keyframes`
from{
display: flex;
height: 0;
}
to{
height: 60px;
display: none;}
`
export const MenuStyledOpen = styled.div`
width: 100%;
background-color: red;
justify-content: center;
overflow: hidden;

animation:${animationOpen} .6s cubic-bezier(0.71, -0.01, 0.37, 1.03) forwards;
display: flex;
ul{
padding: 5px 5px 5px 0;
width: 90%;
gap:2px;
z-index: 50;
flex-direction: column;
transition:.6s;
display: flex;
gap: 8px;
}
li:hover {
    border-bottom: solid .8px black;
}
li{
    padding: 0 3px;
    width: 100%;
    min-height: 20px;
    z-index: 50;
}
a{
    color: white;
}
`
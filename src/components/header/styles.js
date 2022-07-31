import styled from "styled-components";

export const Heade = styled.header`
width: 100%;
padding: 8px;
display: flex;
border-bottom: 1px solid #000;
justify-content: center;
`
export const Section = styled.section`
display: flex;
justify-content: space-between;
width: 90%;
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
export const Menu = styled.div`
display: none;
align-items: center;
gap: 15px;
`
export const MenuStyled = styled.ul`
position: absolute;

top:50px;
display: flex;
justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    transition: 2s;
`
export const MenuMobile = styled.div`
.MenuClose{
    width: 24px;
    height: 26px;
}
display: flex;
align-items: center
`
export const Container = styled.div`
display: flex;
gap: 5px;
`
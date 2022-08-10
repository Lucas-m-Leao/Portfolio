import styled from "styled-components";

export const Container = styled.li`
    width: 4rem;
    height: 4rem;
    transition: .6s;
    
    .divInternal{
        visibility: hidden;
        display: flex;
            justify-content: center;
    }
    h2{ 
        position: relative;
        font-size: 20px;
        padding: 15px 0px;
        bottom: 15px;
    }
    &:hover{
        .divInternal{
            visibility: visible;
        }
    }
    @media (min-width:770px) {
        width: 6rem;
    }
`
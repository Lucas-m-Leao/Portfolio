import styled from "styled-components";

export const StyleButton = styled.button`
width: ${(props) => props.width || "8rem"};
height: ${(props) => props.height || "2.3rem"};
color:${(props) => props.color || "var(--black)"};
border-radius: 10px;
border:${(props) => props.border || "none"};
`
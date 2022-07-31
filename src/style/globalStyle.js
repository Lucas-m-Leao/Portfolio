import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    button{
        cursor: pointer;
    }
    :root{
        --black:#000000;
    }
}
`
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

body{
    background-color: ${({ theme }) => theme.color.bodyBg};
}

body::-webkit-scrollbar {
  width: .7rem;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 10rem;
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}

h1{
    font-size: 5.2rem;
    font-weight: bold;
}

h2{
    font-size: 4.1rem;
}

h3{
    font-size: 3.2rem;
}

h4{
    font-size: 2.5rem;
}

h5{
    font-size: 1.5rem;
}

h1, h2, h3, h4, h5{
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
}

p{
    font-size: 1.7rem;
    color: ${({ theme }) => theme.color.para};
}

li, a{
    font-size: 1.55rem;
}

.section{
    padding-top: 9rem;
}

.grid{
    display: grid;
}

.grid-three-col{
    grid-template-columns:  repeat(3, 1fr);
    gap: 1rem;
}

.grid-two-col{
    grid-template-columns:  repeat(2, 1fr);
    gap: 1.5rem;
}


.right_body{
    max-width: calc(100% - 27rem);
    margin-left: auto;
    overflow-x: hidden;
}

/* Media Query */
@media screen and (max-width: 1200px) {
    .right_body{
        max-width: 100%;
    } 
}

@media screen and (max-width: 992px) {
    .grid-three-col{
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    h1{
        font-size: 4.7rem;
    }
    h2{
        font-size: 3.7rem;
    }
    p{
        font-size: 1.7rem;
    }
}

@media screen and (max-width: 768px) {
    .grid-two-col{
        grid-template-columns: repeat(1, 1fr);
    } 
    .section{
        padding-top: 7rem;
    }
    h1{
        font-size: 4.3rem;
    }
    h2{
        font-size: 3.4rem;
    }
    p{
        font-size: 1.6rem;
    }
}

@media screen and (max-width: 576px) {
    .grid-three-col{
        grid-template-columns: repeat(1, 1fr);
    }
}

`;

export default GlobalStyle;

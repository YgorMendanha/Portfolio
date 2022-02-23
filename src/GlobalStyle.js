import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {    
    padding: 0px;
    margin:0px;
    background: linear-gradient(180deg, #7209B7 0.27%, #4F108A 26.63%, #2E1760 50.87%, #1B0D3C 100%);
    text-align: center;
    display: block;
    font-family: 'Share Tech Mono', monospace;
    ::-webkit-scrollbar{
        width: 3px;
        border-radius: 50%;
    }
    ::-webkit-scrollbar-track{
        background-color: #7209B7;
    }
    ::-webkit-scrollbar-thumb{
        background-color:  #ea7af4;
        border-radius: 50px;
    }  
    
}
`;


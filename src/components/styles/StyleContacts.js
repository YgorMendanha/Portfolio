import styled from 'styled-components'
import { ToastContainer} from 'react-toastify';
 


export const Contact = styled.form`
    display:flex;
    flex-direction: column;
    margin-bottom:50px;
    color: white;
    margin: auto;
    margin-top: 50px;
    width: 450px;
    @media(max-width:500px){
        width: 350px
    }
    @media(max-width:450px){
        width: 350px
    }
    @media(max-width:350px){
        width: 300px
    }
    @media(max-width:300px){
        width: 250px
    }
    h1{
        margin: auto;
        box-shadow:0px 8px 4px -4px #ea7af4;
        &:hover{
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
            text-shadow: 0 0 10px #ea7af4, 0 0 10px;
        }
    }
    .label{
        position: relative;
        padding-top: 20px;
        color:#ea7af4;
        width: 100%;
        input{
            border: none;
            border-bottom: 2px solid #ea7af4;
            outline: none;
            width: 100%;
            font-size: 16px;
            background-color: transparent;
            color: white;    
        }
        input:focus{
            color:white;
            box-shadow: 0px 8px 4px -4px #ea7af4;
            border:none;
        }
        label{
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 20px;
            transition: all .2s ease-out;
            -webkit-transition: all .2s ease-out;
            -moz-transition: all .2s ease-out;
        }
        input:focus + label,

        input:not(:placeholder-shown) + label{
        font-size: 13px;
        margin-top: 5px;
        color: #ea7af4;
        }

    
        textarea{
            border: none;
            border-bottom: 2px solid #ea7af4;
            outline: none;
            width: 100%;
            height: 100px;
            font-size: 16px;
            background-color: transparent;
            color: white;        
            resize: none;
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

        textarea:focus{
        color:white;
        box-shadow: 0px 8px 4px -4px #ea7af4;
        border:none;
        }
        textarea:focus + label,

        textarea:not(:placeholder-shown) + label{
        font-size: 13px;
        margin-top: 5px;
        color: #ea7af4;
        }   

    }    
`
export const Button = styled.div`
    justify-content: flex-end;
    display:flex;
    min-width: 450px;
    margin: auto;
    @media(max-width:500px){
        min-width: 150px
    }
    
    .btn_Neon{
        text-align: right;
        margin:30px;
        margin-bottom:70px;        
        font-size:30px;
        font-weight:700;
        font-family: 'Share Tech Mono', monospace;
        color: #ea7af4;
        border-radius: 20px;
        background-color: transparent;
        border: 4px solid #ea7af4;
        box-shadow: inset 0 0 30px 0 #ea7af4, 0 0 30px 0#ea7af4;
        text-shadow: 0 0 8px hsl(0 0% 100% / 0.3), 0 0 30px;
        position: relative;
        width: auto;
        &::before{
            content: "";
            position: absolute;
            top: 120%;
            background: #ea7af4;
            width: 100%;
            height: 100%;
            transform: perspective(64px) rotateX(40deg) scale(1, 0.35);
            filter: blur(30px);
            opacity: 0.2;
        }
        &:hover::before,
        &:hover::after {
        opacity: 1;
        }    
        &:hover {
        color: white;
        background-color:#ea7af4;
        }
    }
`

export const StyledContainer = styled ( ToastContainer ) `   
  &&&.Toastify__toast-container {
    
    button{
        color:white
    }
}
.Toastify__toast {
      background-color: #1B0D3C;
  }
  .Toastify__toast-body {
      color: white;
  }  
  .Toastify__progress-bar {
    background: linear-gradient(90deg, #7209B7 0.27%,#ea7af4 100%);
  }
`;
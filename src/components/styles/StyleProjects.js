import styled from 'styled-components'
import { SplideSlide } from '@splidejs/react-splide';

export const Project = styled.div`
    text-align: center;
    color:white;
    width: 100%;
    height: 700px;
    
    
`
export const Title = styled.div`
    width: 150px;
    height: 40px;
    margin:auto;
    margin-bottom: 40px;
    h1{
        box-shadow: 0px 8px 4px -4px #ea7af4;
        &:hover{
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
            text-shadow: 0 0 10px #ea7af4, 0 0 10px;
        }
    }
`

export const Slide = styled(SplideSlide)`
    
    font-size: 17px;
    display:flex;
    align-items: center;
    flex-direction: column;
    text-align: justify;
     
    p#Description{
        max-width: 210px;
        align-items: center;
        flex-direction: column;
        text-align: justify;
        font-size: 13px;
        height: 100px;       
        
    }
    div#links{               
        margin:15px;
        a{
            text-decoration: none;
            color:white;
            font-size:15px;
            margin:0 10px;
            &:hover{
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
            text-shadow: 0 0 10px white, 0 0 10px;
            }
        }
    }
    
    div#Technologies{
        width: 210px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 10px;
        margin-bottom: 35px;
        #Javascript{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 25px;
            background-color:#323330;
            color:#F0DB4F;
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
        }
        #Typescript{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 25px;
            background-color:white;
            color:#007acc;
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
        }
        #Reactjs{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 30px;
            background-color:#61DBFB;
            color:white;
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
        }
        #Nodejs{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 30px;
            background-color:#68a063;
            color:#303030;
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
        }
        #Expressjs{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 30px;
            background-color:black;
            color:white;
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
        }
        #Styled-components{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 30px;
            background-color:#db7093;
            color:white;      
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);  
        }
        #Axios{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 30px;
            background-color:#5a29e4;
            color:white;
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
        }
        #Bootstrap{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 30px;
            background-color:#7952b3;
            color:white;
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
        }
        #Mongodb{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 30px;
            background-color:#3F3E42;
            color:#3FA037;    
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);    
        }
        #Jwt-token{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 30px;
            background-color:#d63aff;
            color:white;    
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);    
        }
        #Mui{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 25px;
            background-color:white;
            color:rgb(51, 153, 255);   
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);     
        }
        #Css{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            height:35px;
            width:35px;
            font-size: 25px;
            background-color:white;
            color:#264de4;   
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);     
        }
    }
    
`
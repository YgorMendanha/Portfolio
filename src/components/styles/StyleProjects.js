import styled from 'styled-components'
import { SplideSlide } from '@splidejs/react-splide';

export const Project = styled.div`
   //justify-content: center;
    text-align: center;
    color:white;
    width: 100%;
    height: 100%;
    
    
`
export const Title = styled.div`
    width: 150px;
    height: 40px;
    margin:auto;
    margin-bottom: 40px;
    h1{
        box-shadow: 0px 8px 4px -4px #ea7af4;
    }
`
export const Technology = styled.div`
    background-color:#ea7af4;
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 40px;
    margin:auto;
    border-radius: 100px;
    margin-bottom: 50px;
    input{
        display: none;
    }
    label{
        width: 40px;
        height: 100%;
        font-size: 30px;
        margin:auto;
        display: flex;
        align-items: center; 
        justify-content: center;
    }
    #IconReact{
        &:hover{           
        color: #61DBFB;
    }
    }
    #IconNext{
        &:hover{           
        color: black;
    }
    }
    #IconJava{
        &:hover{           
        color: #F0DB4F;
    }
    }
    #IconType{
        &:hover{           
        color: #007acc;
    }
    }
    #IconNode{
        &:hover{           
        color: #68a063;
        
    }
    }
    #IconEx{
        &:hover{           
        color: black;
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
        
    }
    
    p#Projeto{
        width: 210px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 10px;
        
    }
    #Reactjs{
        background-color:#61DBFB;
        border-radius: 100px;
        padding: 5px;
        color:white;
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
    }
    #Expressjs{
        background-color:black;
        border-radius: 100px;
        padding: 5px;
        color:white;
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
    }
    #Nodejs{
        background-color:#68a063;
        border-radius: 100px;
        padding: 5px;
        color:#303030;
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
    }
    #Axios{
        background-color:#5a29e4;
        border-radius: 100px;
        padding: 5px;
        color:white;
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
    }
    #Socket-io{
        background-color:white;
        border-radius: 100px;
        padding: 5px;
        color:black;
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0004);
    }
    #Boostrap{
        background-color:#7952b3;
        border-radius: 100px;
        padding: 5px;
        color:white;
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
    }
    #Styled-components{
        background-color:#eeacea;
        border-radius: 100px;
        padding: 5px;
        color:white;      
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);  
    }
    #Jwt-authentication{
        background-color:#00b9f1;
        border-radius: 100px;
        padding: 5px;
        color:white;    
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);    
    }
    #Mongodb{
        background-color:#00ED64;
        border-radius: 100px;
        padding: 5px;
        color:black;    
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);    
    }
    #Nodemailer{
        background-color:#07689f;
        border-radius: 100px;
        padding: 5px;
        color:white;     
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);   
    }
    #Mui{
        background-color:white;
        border-radius: 100px;
        padding: 5px;
        color:rgb(51, 153, 255);   
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);     
    }
    #Momentjs{
        background-color:#4e7cad;
        border-radius: 100px;
        padding: 5px;
        color:white;        
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
    }
    #Bcrypt{
        background-color:#4e7cad;
        border-radius: 100px;
        padding: 5px;
        color:white;   
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);     
    }
`
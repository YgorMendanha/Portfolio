import styled  from 'styled-components'


export const Container = styled.main` 
    display: flex;    
    flex-direction: column;
    justify-content: center;
`


export const ProfileCard = styled.div`    
    margin-top: 50px;
    width: 100%;
    height: auto;
    color:white;
    display:flex;    
    justify-content: center;
    @media(max-width:600px){
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

`
export const Image = styled.img`
    width:333px;
    height:366px;
    mask-image: none;
    -webkit-mask-image: linear-gradient(to top, transparent 15%, black 110%);

`

export const Profile = styled.div`
    margin-top:auto;
    margin-bottom:auto;
    h1{
        margin: 0 auto 50px auto; 
        box-shadow: 0px 8px 4px -4px #ea7af4;
        
        @media(max-width:500px){
        font-size: 1.5rem;
        margin: 30px;        
        }
    }
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        a{
            text-decoration: none;
            color: white;
            font-size: 2rem;
            justify-content: center;
            #iconGit{
                &:hover{
                color: white;
                background-color: black;
                border-radius: 12px;
                box-shadow: 0px 0px 14px 6px black;
            }            
            }
            #iconLin{
                &:hover{
                color: white;
                border-radius: 12px;
                background-color: #1f5fa6;
                box-shadow: 0px 0px 14px 6px #0e76a8;
            }
            }
            #iconTw{
                &:hover{
                color: white;
                border-radius: 12px;
                background-color: #1589dc;
                box-shadow: 0px 0px 14px 6px #00acee;
            }
            }
            #iconIns{
                &:hover{
                color: white;
                border-radius: 12px;
                background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
                box-shadow: 0px 0px 14px 6px #fd5949;
                }
            }
            #iconWhats{
                &:hover{
                color: white;
                border-radius: 12px 12px 12px 0;
                background-color: #51b366;
                box-shadow: 0px 0px 14px 6px #4FCE5D;
                
            }
            }
        }
        
    }
    
    p{
        text-align: left;
        font-size:15px;
        margin-top: 30px;        
    }
    
`

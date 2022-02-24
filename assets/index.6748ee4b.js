var w=Object.defineProperty,k=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var b=(n,a,t)=>a in n?w(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,u=(n,a)=>{for(var t in a||(a={}))v.call(a,t)&&b(n,t,a[t]);if(h)for(var t of h(a))I.call(a,t)&&b(n,t,a[t]);return n},g=(n,a)=>k(n,y(a));import{s as c,S as E,r as x,a as f,j as r,b as e,c as j,d as N,e as _,f as T,g as S,h as B,T as F,F as m,t as p,I as l,W as P,R as z,i as M}from"./vendor.3ecaa78e.js";const C=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};C();const D=c.main` 
    display: flex;    
    flex-direction: column;
    justify-content: center;
`,R=c.div`    
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

`,L=c.img`
    width:333px;
    height:366px;
    mask-image: none;
    -webkit-mask-image: linear-gradient(to top, transparent 15%, black 110%);

`,A=c.div`
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
    
`,J=c.div`
   //justify-content: center;
    text-align: center;
    color:white;
    width: 100%;
    height: 100%;
    
    
`,G=c.div`
    width: 150px;
    height: 40px;
    margin:auto;
    margin-bottom: 40px;
    h1{
        box-shadow: 0px 8px 4px -4px #ea7af4;
    }
`,O=c.div`
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
    `,W=c(E)`
    
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
`;function Y(){const[n,a]=x.exports.useState([]);return x.exports.useEffect(async()=>{const d=(await f("https://api.github.com/users/YgorMendanha/repos")).data;a(d.map(o=>({Name:o.name,Description:o.description,Homepage:o.homepage,URLGitHub:o.svn_url,Topics:o.topics})))},[]),r(J,{children:[e(G,{children:e("h1",{children:"Projetos"})}),r(O,{children:[r("label",{htmlFor:"IconReact",id:"IconReact",children:[e("input",{id:"IconReact",type:"checkbox",value:"React"}),e(j,{})]}),r("label",{htmlFor:"IconJava",id:"IconJava",children:[e("input",{id:"IconJava",type:"checkbox",value:"JavaScript"}),e(N,{})]}),r("label",{htmlFor:"IconType",id:"IconType",children:[e("input",{id:"IconType",type:"checkbox",value:"TypeScript"}),e(_,{})]}),r("label",{htmlFor:"IconNode",id:"IconNode",children:[e("input",{id:"IconNode",type:"checkbox",value:"Node"}),e(T,{})]}),r("label",{htmlFor:"IconEx",id:"IconEx",children:[e("input",{id:"IconEx",type:"checkbox",value:"Express"}),e(S,{})]})]}),e(B,{options:{breakpoints:{450:{perPage:1},740:{perPage:2},900:{perPage:3},1500:{perPage:3}},perPage:5,type:"loop",autoplay:!0,arrows:"slider",drag:!0},children:n.map(t=>(console.log(t),r(W,{children:[e("img",{src:`https://raw.githubusercontent.com/YgorMendanha/${t.Name}/main/src/_assets/img/${t.Name}.png`,width:"200",height:"300"}),e("p",{children:t.Name.replace(/_/g," ")}),e("p",{id:"Description",children:t.Description}),e("p",{id:"Projeto",children:t.Topics.sort().map(d=>{let o=d[0].toUpperCase()+d.substr(1);return e("p",{id:o,children:o})})})]})))})]})}const q=c.form`
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
    h1{
        margin: auto;
        box-shadow:0px 8px 4px -4px #ea7af4;
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




    
`,H=c.div`
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
`,U=c(F)`   
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
`;function $(){const[n,a]=x.exports.useState([]),t=o=>{const{name:i,value:s}=o.target;a(g(u({},n),{[i]:s}))};async function d(){try{const{data:o}=await f.post("http://localhost:8080/sendEmail",{name:n.name,subject:n.subject,contact:n.contact,message:n.message});return console.log(o),o.erros>0?p(o.erros,"\u{1F622}"):(p(o.message),a(""),document.getElementById("name").value="",document.getElementById("subject").value="",document.getElementById("contact").value="",document.getElementById("message").value="")}catch{p("Infelizmente houve um Error ao Enviar seu Email... \u{1F622} ")}}return r(m,{children:[e(U,{position:"top-right",autoClose:5e3}),r(q,{onChange:t,children:[e("h1",{children:"Entre em contato"}),r("div",{className:"label",children:[e("input",{type:"text",name:"name",id:"name",placeholder:" ",required:!0}),e("label",{children:"Nome..."})]}),r("div",{className:"label",children:[e("input",{type:"text",name:"subject",id:"subject",placeholder:" "}),e("label",{children:"Assunto..."})]}),r("div",{className:"label",children:[e("input",{type:"text",name:"contact",id:"contact",placeholder:" ",required:!0}),e("label",{children:"Contato..."})]}),r("div",{className:"label",children:[e("textarea",{type:"textarea",id:"message",name:"message",placeholder:" ",required:!0}),e("label",{children:"Sua Mensagem..."})]})]}),e(H,{children:e("button",{className:"btn_Neon",onClick:d,children:"Enviar"})})]})}var K="/Portfolio/assets/img_perfil.658cee8b.png";function X(){return r(D,{children:[r(R,{children:[e(L,{src:K,alt:"Foto de perfil"}),r(A,{children:[e("div",{children:e("h1",{children:"Ygor  Mendanha"})}),r("div",{children:[r("a",{href:"https://github.com/YgorMendanha",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"teenyicons:github-solid",id:"iconGit"})," "]}),r("a",{href:"https://www.linkedin.com/in/ygormendanha",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"akar-icons:linkedin-fill",id:"iconLin"})]}),r("a",{href:"https://twitter.com/oTalDoPatolino",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"akar-icons:twitter-fill",id:"iconTw"})]}),r("a",{href:"https://www.instagram.com/_oygorguimaraes/",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"akar-icons:instagram-fill",id:"iconIns"})]}),r("a",{href:"https://wa.me/5592982145233",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"akar-icons:whatsapp-fill",id:"iconWhats"})]})]}),e("p",{children:"Meu nome Ygor e tenho 23 Anos"}),e("p",{children:"Meu Trabalho \xE9 usar o JavaScript para colocar sua ideia na internet"}),e("p",{children:"O React juntamente com o Node v\xE3o me ajudar a fazer isso."})]})]}),e(Y,{}),e($,{})]})}const Q=c.footer`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 90px;
        align-items: center;
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
`;function V(){return r(Q,{children:[r("a",{href:"https://github.com/YgorMendanha",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"teenyicons:github-solid",id:"iconGit"})," "]}),r("a",{href:"https://www.linkedin.com/in/ygormendanha",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"akar-icons:linkedin-fill",id:"iconLin"})]}),r("a",{href:"https://twitter.com/oTalDoPatolino",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"akar-icons:twitter-fill",id:"iconTw"})]}),r("a",{href:"https://www.instagram.com/_oygorguimaraes/",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"akar-icons:instagram-fill",id:"iconIns"})]}),r("a",{href:"https://wa.me/5592982145233",target:"_blank",rel:"noopener noreferrer",children:[" ",e(l,{icon:"akar-icons:whatsapp-fill",id:"iconWhats"})]})]})}const Z=P`
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
`;function ee(){return r(m,{children:[e(Z,{}),e(X,{}),e(V,{})]})}z.render(e(M.StrictMode,{children:e(ee,{})}),document.getElementById("root"));

var w=Object.defineProperty,k=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var h=(a,n,i)=>n in a?w(a,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[n]=i,f=(a,n)=>{for(var i in n||(n={}))v.call(n,i)&&h(a,i,n[i]);if(x)for(var i of x(n))j.call(n,i)&&h(a,i,n[i]);return a},u=(a,n)=>k(a,y(n));import{s as d,S as z,r as p,a as g,j as o,b as e,c as _,d as S,e as E,f as B,g as T,h as F,C,i as M,k as N,l as P,m as D,n as I,o as A,T as L,F as m,t as b,I as c,W as R,R as J,p as G}from"./vendor.61f559a1.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=i(r);fetch(r.href,l)}};O();const W=d.main` 
    display: flex;    
    flex-direction: column;
    justify-content: center;
`,Y=d.div`    
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

`,q=d.img`
    width:333px;
    height:366px;
    mask-image: none;
    -webkit-mask-image: linear-gradient(to top, transparent 15%, black 110%);
    @media(max-width:400px){
        width:233px;
        height:260px;
    }

`,H=d.div`
    margin-top:auto;
    margin-bottom:auto;
    h1{
        margin: 0 auto 50px auto; 
        box-shadow: 0px 8px 4px -4px #ea7af4;
        &:hover{
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0002);
            text-shadow: 0 0 10px #ea7af4, 0 0 10px;
        }
        
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
        font-size:15px;
        margin-top: 30px;
        text-align: left;
        height: auto;
        @media(max-width:500px){
        font-size: 1rem;
        margin: 30px;   
        }
        div#java{
            display: inline;
            color:#F0DB4F;
            &:hover{
                text-shadow: 0 0 10px #F0DB4F, 0 0 10px;
            }
        }
        div#node{
            display: inline;
            color:#68a063;
            &:hover{
                text-shadow: 0 0 10px #68a063, 0 0 10px;
            }
        }
        div#react{
            display: inline;
            color:#61DBFB;
            &:hover{
                text-shadow: 0 0 10px #61DBFB, 0 0 10px;
            }
        }
    }
    
`,U=d.div`
    text-align: center;
    color:white;
    width: 100%;
    height: 700px;
    
    
`,$=d.div`
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
`,K=d(z)`
    
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
    
`;function X(){const[a,n]=p.exports.useState([]);return p.exports.useEffect(async()=>{const{data:i}=await g("https://api.github.com/users/YgorMendanha/repos"),t=i.filter(r=>!(r.name=="Portfolio_Back-end"||r.name=="Portfolio"));n(t.map(r=>({Name:r.name,Description:r.description,Homepage:r.homepage,URLGitHub:r.svn_url,Topics:r.topics})))},[]),o(U,{children:[e($,{children:e("h1",{children:"Projetos"})}),e(_,{options:{breakpoints:{450:{perPage:1},740:{perPage:2},900:{perPage:3},1500:{perPage:3}},perPage:5,type:"loop",autoplay:!1,arrows:"slider",drag:!0},children:a.map(i=>o(K,{children:[e("img",{src:`https://raw.githubusercontent.com/YgorMendanha/${i.Name}/main/src/_assets/img/${i.Name}.png`,width:"200",height:"300"}),e("p",{children:i.Name.replace(/_/g," ")}),e("p",{id:"Description",children:i.Description}),o("div",{id:"links",children:[e("a",{href:i.URLGitHub,target:"_blank",rel:"noopener noreferrer",children:"Codigo\u{1F517}"}),e("a",{href:i.Homepage,target:"_blank",rel:"noopener noreferrer",children:"Online\u{1F517}"})]}),e("div",{id:"Technologies",children:i.Topics.sort().map(t=>{if(t=="javascript")return e("div",{id:"Javascript",children:e(S,{})},t);if(t=="reactjs")return e("div",{id:"Reactjs",children:e(E,{})},t);if(t=="nodejs")return e("div",{id:"Nodejs",children:e(B,{})},t);if(t=="expressjs")return e("div",{id:"Expressjs",children:e(T,{})},t);if(t=="styled-components")return e("div",{id:"Styled-components",children:e(F,{})},t);if(t=="axios")return e("div",{id:"Axios",children:e(C,{})},t);if(t=="bootstrap")return e("div",{id:"Bootstrap",children:e(M,{})},t);if(i=="mongodb")return e("div",{id:"Mongodb",children:e(N,{})},t);if(t=="jwt-token")return e("div",{id:"Jwt-token",children:e(P,{})},t);if(t=="typescript")return e("div",{id:"Typescript",children:e(D,{})},t);if(t=="material-ui")return e("div",{id:"Mui",children:e(I,{})},t);if(t=="css")return e("div",{id:"Css",children:e(A,{})},t)})})]}))})]})}const Q=d.form`
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
`,V=d.div`
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
`,Z=d(L)`   
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
`;function ee(){const[a,n]=p.exports.useState([]),i=r=>{const{name:l,value:s}=r.target;n(u(f({},a),{[l]:s}))};async function t(){try{const{data:r}=await g.post("https://portfolio-back-app.herokuapp.com/sendEmail",{name:a.name,subject:a.subject,contact:a.contact,message:a.message});console.log(r),b(r.message),n(""),document.getElementById("name").value="",document.getElementById("subject").value="",document.getElementById("contact").value="",document.getElementById("message").value=""}catch{b("Infelizmente houve um Error ao Enviar seu Email... \u{1F622} ")}}return o(m,{children:[e(Z,{position:"top-right",autoClose:5e3}),o(Q,{onChange:i,children:[e("h1",{children:"Entre em contato"}),o("div",{className:"label",children:[e("input",{type:"text",name:"name",id:"name",placeholder:" ",required:!0}),e("label",{children:"Nome..."})]}),o("div",{className:"label",children:[e("input",{type:"text",name:"subject",id:"subject",placeholder:" "}),e("label",{children:"Assunto..."})]}),o("div",{className:"label",children:[e("input",{type:"text",name:"contact",id:"contact",placeholder:" ",required:!0}),e("label",{children:"Contato..."})]}),o("div",{className:"label",children:[e("textarea",{type:"textarea",id:"message",name:"message",placeholder:" ",required:!0}),e("label",{children:"Sua Mensagem..."})]})]}),e(V,{children:e("button",{className:"btn_Neon",onClick:t,children:"Enviar"})})]})}var te="/Portfolio/assets/img_perfil.658cee8b.png";function re(){return o(W,{children:[o(Y,{children:[e(q,{src:te,alt:"Foto de perfil"}),o(H,{children:[e("div",{children:e("h1",{children:"Ygor Mendanha"})}),o("div",{children:[o("a",{href:"https://github.com/YgorMendanha",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"teenyicons:github-solid",id:"iconGit"})," "]}),o("a",{href:"https://www.linkedin.com/in/ygormendanha",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"akar-icons:linkedin-fill",id:"iconLin"})]}),o("a",{href:"https://twitter.com/oTalDoPatolino",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"akar-icons:twitter-fill",id:"iconTw"})]}),o("a",{href:"https://www.instagram.com/_oygorguimaraes/",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"akar-icons:instagram-fill",id:"iconIns"})]}),o("a",{href:"https://wa.me/5592982145233",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"akar-icons:whatsapp-fill",id:"iconWhats"})]})]}),e("p",{children:"Meu nome \xE9 Ygor e tenho 23 Anos"}),o("p",{children:["Meu Trabalho \xE9 usar o ",e("div",{id:"java",children:"JavaScript"})," para colocar sua ideia na internet"]}),o("p",{children:["O ",e("div",{id:"react",children:"ReactJs"})," juntamente com o ",e("div",{id:"node",children:"NodeJs"})," v\xE3o me ajudar a fazer isso."]})]})]}),e(X,{}),e(ee,{})]})}const oe=d.footer`
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
`;function ie(){return o(oe,{children:[o("a",{href:"https://github.com/YgorMendanha",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"teenyicons:github-solid",id:"iconGit"})," "]}),o("a",{href:"https://www.linkedin.com/in/ygormendanha",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"akar-icons:linkedin-fill",id:"iconLin"})]}),o("a",{href:"https://twitter.com/oTalDoPatolino",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"akar-icons:twitter-fill",id:"iconTw"})]}),o("a",{href:"https://www.instagram.com/_oygorguimaraes/",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"akar-icons:instagram-fill",id:"iconIns"})]}),o("a",{href:"https://wa.me/5592982145233",target:"_blank",rel:"noopener noreferrer",children:[" ",e(c,{icon:"akar-icons:whatsapp-fill",id:"iconWhats"})]})]})}const ne=R`
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
`;function ae(){return o(m,{children:[e(ne,{}),e(re,{}),e(ie,{})]})}J.render(e(G.StrictMode,{children:e(ae,{})}),document.getElementById("root"));

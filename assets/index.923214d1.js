var k=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(i,n,o)=>n in i?k(i,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[n]=o,u=(i,n)=>{for(var o in n||(n={}))j.call(n,o)&&f(i,o,n[o]);if(h)for(var o of h(n))_.call(n,o)&&f(i,o,n[o]);return i},b=(i,n)=>y(i,v(n));import{U as z,s as d,S,r as x,a as g,j as a,b as e,c as E,C as m,d as T,e as M,f as N,g as C,h as P,i as B,k as I,l as L,m as D,n as F,o as R,p as J,T as A,F as w,t as p,I as s,W as G,R as O,q as Y}from"./vendor.64884660.js";const W=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}};W();const q=z`
  0%{visibility: hidden; width:0}
  30%{visibility: visible; width:0}
  100%{width:100%}
`,H=d.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
`,U=d.div`
	margin-top: 50px;
	width: 100%;
	height: auto;
	color: white;
	display: flex;
	justify-content: center;
	@media (max-width: 600px) {
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
`,$=d.img`
	width: 333px;
	height: 366px;
	mask-image: none;
	-webkit-mask-image: linear-gradient(to top, transparent 15%, black 110%);
	@media (max-width: 400px) {
		width: 233px;
		height: 260px;
	}
`,V=d.div`
	margin-top: auto;
	margin-bottom: auto;
	@media (max-width: 3000px) {
		min-width: 555px;
	}
	@media (max-width: 900px) {
		min-width: auto;
		width: auto;
	}

	h1 {
		margin: 0 auto 50px auto;
		box-shadow: 0px 8px 4px -4px #ea7af4;
		&:hover {
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
			text-shadow: 0 0 10px #ea7af4, 0 0 10px;
		}

		@media (max-width: 500px) {
			font-size: 1.5rem;
			margin: 30px;
		}
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		a {
			text-decoration: none;
			color: white;
			font-size: 2rem;
			justify-content: center;
			#iconGit {
				&:hover {
					color: white;
					background-color: black;
					border-radius: 12px;
					box-shadow: 0px 0px 14px 6px black;
				}
			}
			#iconLin {
				&:hover {
					color: white;
					border-radius: 12px;
					background-color: #1f5fa6;
					box-shadow: 0px 0px 14px 6px #0e76a8;
				}
			}
			#iconTw {
				&:hover {
					color: white;
					border-radius: 12px;
					background-color: #1589dc;
					box-shadow: 0px 0px 14px 6px #00acee;
				}
			}
			#iconIns {
				&:hover {
					color: white;
					border-radius: 12px;
					background: radial-gradient(
						circle at 30% 107%,
						#fdf497 0%,
						#fdf497 5%,
						#fd5949 45%,
						#d6249f 60%,
						#285aeb 90%
					);
					box-shadow: 0px 0px 14px 6px #fd5949;
				}
			}
			#iconWhats {
				&:hover {
					color: white;
					border-radius: 12px 12px 12px 0;
					background-color: #51b366;
					box-shadow: 0px 0px 14px 6px #4fce5d;
				}
			}
		}
	}

	p {
		font-size: 15px;
		margin-top: 30px;
		margin-right: 10px;
		text-align: left;
		height: auto;
		@media (max-width: 3000px) {
			white-space: nowrap;
			overflow: hidden;
			animation: ${q} 7s steps(50) 0s normal;
		}
		@media (max-width: 900px) {
			white-space: normal;
			overflow: auto;
			animation: none;
		}

		@media (max-width: 600px) {
			font-size: 1rem;
			margin: 30px;
		}
		div#java {
			display: inline;
			color: #f0db4f;
			&:hover {
				text-shadow: 0 0 10px #f0db4f, 0 0 10px;
			}
		}
		div#node {
			display: inline;
			color: #68a063;
			&:hover {
				text-shadow: 0 0 10px #68a063, 0 0 10px;
			}
		}
		div#react {
			display: inline;
			color: #61dbfb;
			&:hover {
				text-shadow: 0 0 10px #61dbfb, 0 0 10px;
			}
		}
	}
`,K=d.div`
	text-align: center;
	color: white;
	width: 100%;
	height: 700px;
`,X=d.div`
	width: 150px;
	height: 40px;
	margin: auto;
	margin-bottom: 40px;
	h1 {
		box-shadow: 0px 8px 4px -4px #ea7af4;
		&:hover {
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
			text-shadow: 0 0 10px #ea7af4, 0 0 10px;
		}
	}
`,Q=d(S)`
	font-size: 19px;
	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: justify;

	p#Description {
		max-width: 210px;
		align-items: center;
		flex-direction: column;
		text-align: justify;
		font-size: 13px;
		height: 50px;
	}
	div#links {
		margin: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		a {
			text-decoration: none;
			color: white;
			font-size: 15px;
			margin: 0 10px;
			display: flex;
			align-items: center;
			&:hover {
				text-shadow: 0 0 10px white, 0 0 10px;
			}
		}
	}

	div#Technologies {
		width: 210px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		font-size: 10px;
		margin-bottom: 35px;
		#Javascript {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 25px;
			background-color: #323330;
			color: #f0db4f;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Typescript {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 25px;
			background-color: white;
			color: #007acc;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Reactjs {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 30px;
			background-color: #61dbfb;
			color: white;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Nodejs {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 30px;
			background-color: #68a063;
			color: #303030;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Expressjs {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 30px;
			background-color: black;
			color: white;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Styled-components {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 30px;
			background-color: #db7093;
			color: white;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Axios {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 30px;
			background-color: #5a29e4;
			color: white;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Bootstrap {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 30px;
			background-color: #7952b3;
			color: white;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Mongodb {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 30px;
			background-color: #3f3e42;
			color: #3fa037;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Jwt-token {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 30px;
			background-color: #d63aff;
			color: white;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Mui {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 25px;
			background-color: white;
			color: rgb(51, 153, 255);
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
		#Css {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			height: 35px;
			width: 35px;
			font-size: 25px;
			background-color: white;
			color: #264de4;
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
		}
	}
`;function Z(){const[i,n]=x.exports.useState([]);return x.exports.useEffect(async()=>{const{data:o}=await g("https://api.github.com/users/YgorMendanha/repos"),r=o.filter(t=>!(t.name==="YgorMendanha"||t.name==="E-commerce_Front"||t.name==="E-commerce_Back"||t.name==="Chat_app_Back-end"||t.name==="NotePad_Back-end"||t.name==="Portfolio_Back-end"||t.name==="Portfolio"));n(r.map(t=>({Name:t.name,Description:t.description,Homepage:t.homepage,URLGitHub:t.svn_url,Topics:t.topics})))},[]),a(K,{children:[e(X,{children:e("h1",{children:"Projetos"})}),e(E,{options:{breakpoints:{450:{perPage:1},740:{perPage:2},900:{perPage:3},1500:{perPage:3}},perPage:5,type:"loop",autoplay:!0,arrows:"slider",drag:!0},children:i.map(o=>a(Q,{children:[e("img",{src:`https://raw.githubusercontent.com/YgorMendanha/${o.Name}/main/src/_assets/img/${o.Name}.png`,width:"200",height:"300"}),e("p",{children:o.Name.replace(/_/g," ")}),e("p",{id:"Description",children:o.Description}),a("div",{id:"links",children:[a("a",{href:o.Homepage,target:"_blank",rel:"noopener noreferrer",children:["Veja Online",e(m,{})]}),a("a",{href:o.URLGitHub,target:"_blank",rel:"noopener noreferrer",children:["Ver Codigo",e(m,{})]})]}),e("div",{id:"Technologies",children:o.Topics.sort().map(r=>r==="javascript"?e("div",{id:"Javascript",children:e(T,{})},r):r==="reactjs"?e("div",{id:"Reactjs",children:e(M,{})},r):r==="nodejs"?e("div",{id:"Nodejs",children:e(N,{})},r):r==="expressjs"?e("div",{id:"Expressjs",children:e(C,{})},r):r==="styled-components"?e("div",{id:"Styled-components",children:e(P,{})},r):r==="axios"?e("div",{id:"Axios",children:e(B,{})},r):r==="bootstrap"?e("div",{id:"Bootstrap",children:e(I,{})},r):o==="mongodb"?e("div",{id:"Mongodb",children:e(L,{})},r):r==="jwt-token"?e("div",{id:"Jwt-token",children:e(D,{})},r):r==="typescript"?e("div",{id:"Typescript",children:e(F,{})},r):r==="material-ui"?e("div",{id:"Mui",children:e(R,{})},r):r==="css"?e("div",{id:"Css",children:e(J,{})},r):null)})]},o))})]})}const ee=d.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
	color: white;
	margin: auto;
	margin-top: 50px;
	width: 450px;
	@media (max-width: 500px) {
		width: 350px;
	}
	@media (max-width: 450px) {
		width: 330px;
	}
	@media (max-width: 350px) {
		width: 280px;
	}
	h1 {
		margin: auto;
		box-shadow: 0px 8px 4px -4px #ea7af4;
		&:hover {
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
			text-shadow: 0 0 10px #ea7af4, 0 0 10px;
		}
	}
	.label {
		position: relative;
		padding-top: 20px;
		color: #ea7af4;
		width: 100%;
		input {
			border: none;
			border-bottom: 2px solid #ea7af4;
			outline: none;
			width: 100%;
			font-size: 16px;
			background-color: transparent;
			color: white;
		}
		input:focus {
			color: white;
			box-shadow: 0px 8px 4px -4px #ea7af4;
			border: none;
		}
		label {
			position: absolute;
			top: 0;
			left: 0;
			margin-top: 20px;
			transition: all 0.2s ease-out;
			-webkit-transition: all 0.2s ease-out;
			-moz-transition: all 0.2s ease-out;
		}
		input:focus + label,
		input:not(:placeholder-shown) + label {
			font-size: 13px;
			margin-top: 5px;
			color: #ea7af4;
		}

		textarea {
			border: none;
			border-bottom: 2px solid #ea7af4;
			outline: none;
			width: 100%;
			height: 100px;
			font-size: 16px;
			background-color: transparent;
			color: white;
			resize: none;
			::-webkit-scrollbar {
				width: 3px;
				border-radius: 50%;
			}
			::-webkit-scrollbar-track {
				background-color: #7209b7;
			}
			::-webkit-scrollbar-thumb {
				background-color: #ea7af4;
				border-radius: 50px;
			}
		}

		textarea:focus {
			color: white;
			box-shadow: 0px 8px 4px -4px #ea7af4;
			border: none;
		}
		textarea:focus + label,
		textarea:not(:placeholder-shown) + label {
			font-size: 13px;
			margin-top: 5px;
			color: #ea7af4;
		}
	}
`,te=d.div`
	justify-content: flex-end;
	display: flex;
	min-width: 450px;
	margin: auto;
	@media (max-width: 500px) {
		min-width: 150px;
	}

	.btn_Neon {
		cursor: pointer;
		text-align: right;
		margin: 30px;
		margin-bottom: 70px;
		font-size: 30px;
		font-weight: 700;
		font-family: 'Share Tech Mono', monospace;
		color: #ea7af4;
		border-radius: 20px;
		background-color: transparent;
		border: 4px solid #ea7af4;
		box-shadow: inset 0 0 30px 0 #ea7af4, 0 0 30px 0#ea7af4;
		text-shadow: 0 0 8px hsl(0 0% 100% / 0.3), 0 0 30px;
		position: relative;
		width: auto;
		&::before {
			content: '';
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
			background-color: #ea7af4;
		}
	}
`,re=d(A)`
	&&&.Toastify__toast-container {
		button {
			color: white;
		}
	}
	.Toastify__toast {
		background-color: #1b0d3c;
	}
	.Toastify__toast-body {
		color: white;
	}
	.Toastify__progress-bar {
		background: linear-gradient(90deg, #7209b7 0.27%, #ea7af4 100%);
	}
`;function ie(){const[i,n]=x.exports.useState([]),o=t=>{const{name:l,value:c}=t.target;n(b(u({},i),{[l]:c}))};async function r(){if(i.name==""||i.name==null||i.name==null)return p("Digite seu Nome!");if(i.contact==""||i.contact==null||i.contact==null)return p("Digite uma Forma de Contato!");if(i.message==""||i.message==null||i.message==null)return p("Digite uma Mensagem para Enviar seu Email!");try{const{data:t}=await g.post("https://portfolio-back-app.herokuapp.com/sendEmail",{name:i.name,subject:i.subject,contact:i.contact,message:i.message});p(t.message),n(""),document.getElementById("name").value=null,document.getElementById("subject").value=null,document.getElementById("contact").value=null,document.getElementById("message").value=null}catch{p("Infelizmente houve um Error ao Enviar seu Email... \u{1F622} ")}}return a(w,{children:[e(re,{position:"top-right",autoClose:5e3}),a(ee,{onChange:o,children:[e("h1",{children:"Entre em contato"}),a("div",{className:"label",children:[e("input",{type:"text",name:"name",id:"name",placeholder:" ",required:!0}),e("label",{children:"Nome..."})]}),a("div",{className:"label",children:[e("input",{type:"text",name:"subject",id:"subject",placeholder:" "}),e("label",{children:"Assunto..."})]}),a("div",{className:"label",children:[e("input",{type:"text",name:"contact",id:"contact",placeholder:" ",required:!0}),e("label",{children:"Contato..."})]}),a("div",{className:"label",children:[e("textarea",{type:"textarea",id:"message",name:"message",placeholder:" ",required:!0}),e("label",{children:"Sua Mensagem..."})]})]}),e(te,{children:e("button",{className:"btn_Neon",onClick:r,children:"Enviar"})})]})}var oe="/Portfolio/assets/img_perfil.658cee8b.png";function ne(){return a(H,{children:[a(U,{children:[e($,{src:oe,alt:"Foto de perfil"}),a(V,{children:[e("div",{children:e("h1",{children:"Ygor Mendanha"})}),a("div",{children:[e("a",{href:"https://github.com/YgorMendanha",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"teenyicons:github-solid",id:"iconGit"})}),e("a",{href:"https://www.linkedin.com/in/ygormendanha",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"akar-icons:linkedin-fill",id:"iconLin"})}),e("a",{href:"https://twitter.com/oTalDoPatolino",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"akar-icons:twitter-fill",id:"iconTw"})}),e("a",{href:"https://www.instagram.com/_oygorguimaraes/",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"akar-icons:instagram-fill",id:"iconIns"})}),e("a",{href:"https://wa.me/5592982145233",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"akar-icons:whatsapp-fill",id:"iconWhats"})})]}),e("p",{children:"Meu nome \xE9 Ygor e tenho 23 Anos"}),a("p",{children:["Meu Trabalho \xE9 usar o ",e("div",{id:"java",children:"JavaScript"})," para colocar sua ideia na internet"]}),a("p",{children:["O ",e("div",{id:"react",children:"ReactJs"})," juntamente com o ",e("div",{id:"node",children:"NodeJs"})," v\xE3o me ajudar a fazer isso."]})]})]}),e(Z,{}),e(ie,{})]})}const ae=d.footer`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	height: 90px;
	align-items: center;
	a {
		text-decoration: none;
		color: white;
		font-size: 2rem;
		justify-content: center;
		#iconGit {
			&:hover {
				color: white;
				background-color: black;
				border-radius: 12px;
				box-shadow: 0px 0px 14px 6px black;
			}
		}
		#iconLin {
			&:hover {
				color: white;
				border-radius: 12px;
				background-color: #1f5fa6;
				box-shadow: 0px 0px 14px 6px #0e76a8;
			}
		}
		#iconTw {
			&:hover {
				color: white;
				border-radius: 12px;
				background-color: #1589dc;
				box-shadow: 0px 0px 14px 6px #00acee;
			}
		}
		#iconIns {
			&:hover {
				color: white;
				border-radius: 12px;
				background: radial-gradient(
					circle at 30% 107%,
					#fdf497 0%,
					#fdf497 5%,
					#fd5949 45%,
					#d6249f 60%,
					#285aeb 90%
				);
				box-shadow: 0px 0px 14px 6px #fd5949;
			}
		}
		#iconWhats {
			&:hover {
				color: white;
				border-radius: 12px 12px 12px 0;
				background-color: #51b366;
				box-shadow: 0px 0px 14px 6px #4fce5d;
			}
		}
	}
`;function le(){return a(ae,{children:[e("a",{href:"https://github.com/YgorMendanha",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"teenyicons:github-solid",id:"iconGit"})}),e("a",{href:"https://www.linkedin.com/in/ygormendanha",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"akar-icons:linkedin-fill",id:"iconLin"})}),e("a",{href:"https://twitter.com/oTalDoPatolino",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"akar-icons:twitter-fill",id:"iconTw"})}),e("a",{href:"https://www.instagram.com/_oygorguimaraes/",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"akar-icons:instagram-fill",id:"iconIns"})}),e("a",{href:"https://wa.me/5592982145233",target:"_blank",rel:"noopener noreferrer",children:e(s,{icon:"akar-icons:whatsapp-fill",id:"iconWhats"})})]})}const de=G`
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
`;function se(){return a(w,{children:[e(de,{}),e(ne,{}),e(le,{})]})}O.render(e(Y.StrictMode,{children:e(se,{})}),document.getElementById("root"));

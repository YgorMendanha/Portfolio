import { Project,
Technology,
Title,
Slide, } from "./styles/StyleProjects";
import { SiReact,  SiJavascript, SiTypescript, SiNodedotjs, SiExpress } from 'react-icons/si';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState } from "react";
import axios from "axios";



export default function Projects(){ 

    const [porjectName, setPorjectName] = useState([])

    useEffect(async () => {

        const response = await axios('https://api.github.com/users/YgorMendanha/repos')

        const data = response.data
        
        setPorjectName(
            data.map((data)=>{               
                    return(
                        {
                            Name: data.name,
                            Description: data.description,
                            Homepage: data.homepage,
                            URLGitHub: data.svn_url,
                            Topics: data.topics

                        }
                    )
            })
        )
        
    
    },[])    
   

    return(
        <Project>
            <Title>
                <h1>Projetos</h1>
            </Title>
            <Technology>
                <label htmlFor="IconReact" id="IconReact" >
                    <input id="IconReact" type="checkbox" value="React"/>
                    <SiReact/>
                </label>
                
                <label htmlFor="IconJava" id="IconJava">
                    <input id="IconJava" type="checkbox" value="JavaScript"/>
                    <SiJavascript/>
                </label>
                <label htmlFor="IconType" id="IconType" >
                    <input id="IconType" type="checkbox" value="TypeScript"/>
                    <SiTypescript/>
                </label>
                <label htmlFor="IconNode" id="IconNode" >
                    <input id="IconNode" type="checkbox" value="Node"/>
                    <SiNodedotjs/>
                </label>
                <label htmlFor="IconEx" id="IconEx" >
                    <input id="IconEx" type="checkbox" value="Express"/>
                    <SiExpress/>
                </label>
            </Technology>       
            
            <Splide
                options={ {
                    breakpoints: {
                        450: {
                            perPage: 1,
                        },
                        740: {
                            perPage: 2,
                        },
                        900:{
                            perPage: 3,
                        },
                        1500:{
                            perPage: 3,
                        }
                    },
                    perPage:5,
                    type: 'loop',
                    autoplay: true,
                    arrows: 'slider',  
                    drag:true,                  
                } }
                >
                {
                     porjectName.map((projeto)=>{
                         return(
                            console.log(projeto),
                            <Slide>                                
                               <img src={`https://raw.githubusercontent.com/YgorMendanha/${projeto.Name}/main/src/_assets/img/${projeto.Name}.png`} width="200" height="300"/>
                               <p>{projeto.Name.replace(/_/g, " ")}</p>
                               <p id={"Description"}>{ projeto.Description}</p>
                               <p id={"Projeto"}>{projeto.Topics.sort().map((project)=>{

                                   let name = project[0].toUpperCase() + project.substr(1)

                                    return (
                                        <p id={name}>{name}</p>
                                    )}
                               )}</p>
                            </Slide>
                         )
                    })
                }
                
            </Splide>

             
        </Project>
    )
}

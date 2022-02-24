import{
Image,
Container,
ProfileCard,
Profile,
} from './styles/StyleMain'
import { Icon } from '@iconify/react';
import Projects from './Projects';
import Contact from './Contacts';
import img from './img/img_perfil.png';

export default function Main(){
    return(
        <Container>
            <ProfileCard>
                <Image src={img} alt="Foto de perfil"/>
                <Profile>
                    <div>
                         <h1>Ygor Mendanha</h1>                                  
                    </div>
                    <div>
                        <a href="https://github.com/YgorMendanha" target="_blank" rel="noopener noreferrer" > <Icon icon="teenyicons:github-solid" id="iconGit" /> </a>
                        <a href="https://www.linkedin.com/in/ygormendanha" target="_blank" rel="noopener noreferrer" > <Icon icon="akar-icons:linkedin-fill" id="iconLin" /></a>
                        <a href="https://twitter.com/oTalDoPatolino" target="_blank" rel="noopener noreferrer" > <Icon icon="akar-icons:twitter-fill" id="iconTw" /></a>
                        <a href="https://www.instagram.com/_oygorguimaraes/" target="_blank" rel="noopener noreferrer" > <Icon icon="akar-icons:instagram-fill" id="iconIns"/></a>
                        <a href="https://wa.me/5592982145233" target="_blank" rel="noopener noreferrer" > <Icon icon="akar-icons:whatsapp-fill" id="iconWhats" /></a>   
                    </div>
                    
                    <p>
                        Meu nome é Ygor e tenho 23 Anos
                    </p>
                    <p>
                        Meu Trabalho é usar o <div id="java">JavaScript</div> para colocar sua ideia na internet
                    </p>
                    <p>
                        O <div id="react">ReactJs</div> juntamente com o <div id="node">NodeJs</div> vão me ajudar a fazer isso.
                    </p>
                </Profile>
            </ProfileCard>    
            <Projects/>  
            <Contact/>   
        </Container>
    )
}
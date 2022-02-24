import {Contact,StyledContainer, Button} from './styles/StyleContacts'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Contacts(){

    const [ email, setEmail ] = useState([])

    const handleChange = (e) =>{    
        const {name, value} = e.target;
        setEmail({...email, [name]:value})           
    }  

    async function sendEmail() {
        try{
            const {data} = await axios.post('https://portfolio-back-app.herokuapp.com/sendEmail',{
                name: email.name,
                subject: email.subject,
                contact: email.contact,
                message: email.message
            })
            console.log(data)
            toast(data.message)
            setEmail("")
            document.getElementById("name").value = ""
            document.getElementById("subject").value = ""
            document.getElementById("contact").value = ""
            document.getElementById("message").value = ""

        }catch{
            toast("Infelizmente houve um Error ao Enviar seu Email... 😢 ")
        }

        
    }
    
    return(
        <>
        <StyledContainer
            position="top-right"
            autoClose={5000}
            />        
        <Contact onChange={handleChange}>
                <h1>Entre em contato</h1>

                <div className="label">
                    <input type="text" name="name" id="name" placeholder=" " required/>
                    <label>Nome...</label>
                </div>

                <div className="label">
                    <input type="text" name="subject" id="subject" placeholder=" "/>
                    <label>Assunto...</label>
                </div>
                <div className="label">
                    <input type="text" name="contact" id="contact" placeholder=" " required/>
                    <label>Contato...</label>
                </div>
                <div className="label">
                    <textarea type="textarea" id="message" name="message" placeholder=" " required/>
                    <label>Sua Mensagem...</label>
                </div>
                
        </Contact>
        <Button>
            <button className="btn_Neon" onClick={sendEmail} >Enviar</button>
        </Button>
        </>
    )
}
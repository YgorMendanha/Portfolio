import { Contact, StyledContainer, Button } from './styles/StyleContacts'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contacts() {
	const [email, setEmail] = useState([])

	const handleChange = e => {
		const { name, value } = e.target
		setEmail({ ...email, [name]: value })
	}

	async function sendEmail() {
		if (email.name == '' || email.name == undefined || email.name == null) {
			return toast('Digite seu Nome!')
		}
		if (
			email.contact == '' ||
			email.contact == undefined ||
			email.contact == null
		) {
			return toast('Digite uma Forma de Contato!')
		}
		if (
			email.message == '' ||
			email.message == undefined ||
			email.message == null
		) {
			return toast('Digite uma Mensagem para Enviar seu Email!')
		} else {
			try {
				const { data } = await axios.post(
					'https://portfolio-back-app.herokuapp.com/sendEmail',
					{
						name: email.name,
						subject: email.subject,
						contact: email.contact,
						message: email.message,
					}
				)
				toast(data.message)
				setEmail('')
				document.getElementById('name').value = null
				document.getElementById('subject').value = null
				document.getElementById('contact').value = null
				document.getElementById('message').value = null
			} catch {
				toast('Infelizmente houve um Error ao Enviar seu Email... 😢 ')
			}
		}
	}

	return (
		<>
			<StyledContainer position="top-right" autoClose={5000} />
			<Contact onChange={handleChange}>
				<h1>Entre em contato</h1>

				<div className="label">
					<input type="text" name="name" id="name" placeholder=" " required />
					<label>Nome...</label>
				</div>

				<div className="label">
					<input type="text" name="subject" id="subject" placeholder=" " />
					<label>Assunto...</label>
				</div>
				<div className="label">
					<input
						type="text"
						name="contact"
						id="contact"
						placeholder=" "
						required
					/>
					<label>Contato...</label>
				</div>
				<div className="label">
					<textarea
						type="textarea"
						id="message"
						name="message"
						placeholder=" "
						required
					/>
					<label>Sua Mensagem...</label>
				</div>
			</Contact>
			<Button>
				<button className="btn_Neon" onClick={sendEmail}>
					Enviar
				</button>
			</Button>
		</>
	)
}

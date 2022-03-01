import { Icon } from '@iconify/react'
import { FooterPage } from './styles/StyleFooter'

export default function Footer() {
	return (
		<FooterPage>
			<a
				href="https://github.com/YgorMendanha"
				target="_blank"
				rel="noopener noreferrer">
				<Icon icon="teenyicons:github-solid" id="iconGit" />
			</a>
			<a
				href="https://www.linkedin.com/in/ygormendanha"
				target="_blank"
				rel="noopener noreferrer">
				<Icon icon="akar-icons:linkedin-fill" id="iconLin" />
			</a>
			<a
				href="https://twitter.com/oTalDoPatolino"
				target="_blank"
				rel="noopener noreferrer">
				<Icon icon="akar-icons:twitter-fill" id="iconTw" />
			</a>
			<a
				href="https://www.instagram.com/_oygorguimaraes/"
				target="_blank"
				rel="noopener noreferrer">
				<Icon icon="akar-icons:instagram-fill" id="iconIns" />
			</a>
			<a
				href="https://wa.me/5592982145233"
				target="_blank"
				rel="noopener noreferrer">
				<Icon icon="akar-icons:whatsapp-fill" id="iconWhats" />
			</a>
		</FooterPage>
	)
}

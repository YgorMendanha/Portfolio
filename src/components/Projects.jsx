import { Project, Title, Slide } from './styles/StyleProjects'
import {
	SiReact,
	SiJavascript,
	SiTypescript,
	SiNodedotjs,
	SiExpress,
	SiStyledcomponents,
	SiBootstrap,
	SiMongodb,
	SiJsonwebtokens,
	SiMaterialui,
	SiCss3,
} from 'react-icons/si'
import { CgArrowsExchange, CgLink } from 'react-icons/cg'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TestImg from './img/Code_test.png'

export default function Projects() {
	const [projects, setProjectsName] = useState([])

	useEffect(async () => {
		const { data } = await axios(
			'https://api.github.com/users/YgorMendanha/repos'
		)
		console.log(data)

		const filter = data.filter(data => {
			if (data.name === 'YgorMendanha') {
				return false
			}
			if (data.name === 'Verzel_front') {
				return false
			}
			if (data.name === 'Verzel_server') {
				return false
			}
			if (data.name === 'E-commerce_Front') {
				return false
			}
			if (data.name === 'E-commerce_Back') {
				return false
			}						
			if (data.name === 'Chat_app_Back-end') {
				return false
			}
			if (data.name === 'NotePad_Back-end') {
				return false
			}
			if (data.name === 'Portfolio_Back-end') {
				return false
			}
			if (data.name === 'Portfolio') {
				return false
			} else {
				return true
			}
		})

		setProjectsName(
			filter.map(data => {
				return {
					Name: data.name,
					Description: data.description,
					Homepage: data.homepage,
					URLGitHub: data.svn_url,
					Topics: data.topics,
				}
			})
		)
	}, [])

	return (
		<Project>
			<Title>
				<h1>Projetos</h1>
			</Title>
			<Splide
				options={{
					breakpoints: {
						450: {
							perPage: 1,
						},
						740: {
							perPage: 2,
						},
						900: {
							perPage: 3,
						},
						1500: {
							perPage: 3,
						},
					},
					perPage: 5,
					type: 'loop',
					autoplay: true,
					arrows: 'slider',
					drag: true,
				}}>
				{projects.map(project => {
					return (
						<Slide key={project}>

							{project.Name === 'Code_Test' ? (
							<img
								src={TestImg}
								width="200"
								height="300"
							/>
							):(
							<img
								src={`https://raw.githubusercontent.com/YgorMendanha/${project.Name}/main/src/_assets/img/${project.Name}.png`}
								width="200"
								height="300"
							/>
							)}
							
							<p>{project.Name.replace(/_/g, ' ')}</p>
							<p id={'Description'}>{project.Description}</p>
							<div id="links">
								<a
									href={project.Homepage}
									target="_blank"
									rel="noopener noreferrer">
									Veja Online
									<CgLink />
								</a>
								<a
									href={project.URLGitHub}
									target="_blank"
									rel="noopener noreferrer">
									Ver Codigo
									<CgLink />
								</a>
							</div>
							<div id={'Technologies'}>
								{project.Topics.sort().map(technologies => {
									if (technologies === 'javascript') {
										return (
											<div key={technologies} id="Javascript">
												<SiJavascript />
											</div>
										)
									}
									if (technologies === 'reactjs') {
										return (
											<div key={technologies} id="Reactjs">
												<SiReact />
											</div>
										)
									}
									if (technologies === 'nodejs') {
										return (
											<div key={technologies} id="Nodejs">
												<SiNodedotjs />
											</div>
										)
									}
									if (technologies === 'expressjs') {
										return (
											<div key={technologies} id="Expressjs">
												<SiExpress />
											</div>
										)
									}
									if (technologies === 'styled-components') {
										return (
											<div key={technologies} id="Styled-components">
												<SiStyledcomponents />
											</div>
										)
									}
									if (technologies === 'axios') {
										return (
											<div key={technologies} id="Axios">
												<CgArrowsExchange />
											</div>
										)
									}
									if (technologies === 'bootstrap') {
										return (
											<div key={technologies} id="Bootstrap">
												<SiBootstrap />
											</div>
										)
									}
									if (project === 'mongodb') {
										return (
											<div key={technologies} id="Mongodb">
												<SiMongodb />
											</div>
										)
									}
									if (technologies === 'jwt-token') {
										return (
											<div key={technologies} id="Jwt-token">
												<SiJsonwebtokens />
											</div>
										)
									}
									if (technologies === 'typescript') {
										return (
											<div key={technologies} id="Typescript">
												<SiTypescript />
											</div>
										)
									}
									if (technologies === 'material-ui') {
										return (
											<div key={technologies} id="Mui">
												<SiMaterialui />
											</div>
										)
									}
									if (technologies === 'css') {
										return (
											<div key={technologies} id="Css">
												<SiCss3 />
											</div>
										)
									}
									return null
								})}
							</div>
						</Slide>
					)
				})}
			</Splide>
		</Project>
	)
}

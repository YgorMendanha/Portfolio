import styled, { keyframes } from 'styled-components'

const typewriter = keyframes`
  0%{visibility: hidden; width:0}
  30%{visibility: visible; width:0}
  100%{width:100%}
`

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const ProfileCard = styled.div`
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
`

export const Image = styled.img`
	width: 333px;
	height: 366px;
	mask-image: none;
	-webkit-mask-image: linear-gradient(to top, transparent 15%, black 110%);
	@media (max-width: 400px) {
		width: 233px;
		height: 260px;
	}
`

export const Profile = styled.div`
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
			animation: ${typewriter} 7s steps(50) 0s normal;
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
`

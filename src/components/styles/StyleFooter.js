import styled from 'styled-components'

export const FooterPage = styled.footer`
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
`

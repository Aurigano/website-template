import React from "react";
import styled from "styled-components";

const FooterDiv = styled("div")`
	width: 100%;
	background-color: #1b2939;
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* padding: 30px; */
	}
	.logo-wrapper {
		padding: 30px;
		filter: invert(35%) sepia(100%) saturate(829%) hue-rotate(230deg)
			brightness(89%) contrast(92%);
	}
	.logo {
		filter: brightness(0) saturate(100%);
		height: 36px;
	}
	.links {
		padding-right: 30px;
		display: flex;
		align-items: flex-end;
	}
	.label {
		text-decoration: none;
		color: #989898;
		padding-right: 20px;
	}
`;

const Footer = () => {
	return (
		<FooterDiv>
			<div className="wrapper">
				<a href="/" className="logo-wrapper">
					<img src="/logo.svg" alt="logo" className="logo" />
				</a>
				<div className="links">
					<a href="/about" className="about label">
						About
					</a>
					<a href="/contact-us" className="contact label">
						Contact Us
					</a>
					<a href="/admin-login" className="admin label">
						Login
					</a>
				</div>
			</div>
		</FooterDiv>
	);
};

export default Footer;

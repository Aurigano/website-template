import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import Hamburger2 from "./Hamburger2";

const StyledDiv = styled("div")`
	background-color: #fbf9ff;
	width: 100%;
	/* height: 90vh; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1440px;
		margin: auto;
		width: 100%;
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
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 1280px;
		margin: auto;
		flex-basis: 100%;
		width: 100%;
	}
	.flex-part {
		flex: 1;
		width: 50%;
	}
	.head-part {
		display: flex;
	}
	.text {
		font-family: "Nunito Sans";
		padding-left: 50px;
	}
	.heading {
		font-size: 48px;
		font-weight: 800;
	}
	.purple {
		color: #7f56da;
	}
	.sub-heading {
		font-size: 24px;
		max-width: 500px;
		font-weight: 400;
		margin-top: 0;
		margin-left: 2px;
	}
	.hero {
		padding-right: 50px;
	}
`;

const Header = () => {
	return (
		<StyledDiv>
			<div className="header">
				<div className="text flex-part">
					<div className="head-part">
						<h1 className="heading">Build your own</h1>
						<h1 className="purple heading">&nbsp;Team</h1>
					</div>
					<p className="sub-heading">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto nesciunt voluptates harum quae, amet
						doloribus quaerat eligendi dolor! Ex ipsa repudiandae
						deserunt dolorem incidunt aut quae at porro sit
						voluptates?
					</p>
				</div>
				<div className="img flex-part">
					<img src="/hero.svg" alt="hero" className="hero" />
				</div>
			</div>
		</StyledDiv>
	);
};

export default Header;

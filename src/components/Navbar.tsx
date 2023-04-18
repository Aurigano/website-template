import React from "react";
import styled from "styled-components";
import Hamburger2 from "./Hamburger2";

const Nav = styled("div")`
	position: sticky;
	top: 0;
	background-color: rgb(251, 249, 255);
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
`;

const Navbar = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<Nav>
			<div className="nav">
				<a href="/" className="logo-wrapper">
					<img src="/logo.svg" alt="logo" className="logo" />
				</a>
				{!open && <Hamburger2 setOpen={setOpen} />}
			</div>
		</Nav>
	);
};

export default Navbar;

import React from "react";
import styled from "styled-components";

const StyledMenu = styled("div")`
	background-color: #0f0821;
	height: 100vh;
	width: 380px;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
	}

	a {
		font-size: 2rem;
		padding: 2rem 0;
		font-weight: 500;
		color: #7f56da;
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: white;
		}
	}
	.close-btn {
		cursor: pointer;
		margin-left: auto;
	}
	.close-image {
		filter: invert(96%) sepia(26%) saturate(5752%) hue-rotate(182deg)
			brightness(100%) contrast(91%);
		width: 30px;
	}
	.links-wrapper {
		display: flex;
		flex-direction: column;
	}
`;

const SideNav = ({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<StyledMenu>
			<div className="links-wrapper">
				<div className="close-btn" onClick={() => setOpen(false)}>
					<img src="/close.png" alt="close" className="close-image" />
				</div>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/contact-us">Contact Us</a>
				<a href="/admin-login">Admin</a>
			</div>
		</StyledMenu>
	);
};

export default SideNav;

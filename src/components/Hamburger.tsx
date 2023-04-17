import React from "react";
import styled from "styled-components";

const StyledDiv = styled("div")`
	width: 60px;
	height: 60px;
	padding-top: 18px;
	padding-right: 30px;
	position: relative;
	cursor: pointer;
	#hamburger {
		width: 60px;
		position: relative;
	}
	#hamburger span {
		display: block;
		position: absolute;
		height: 5px;
		width: 100%;
		background: #7f56da;
		border-radius: 5px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}

	#hamburger span:nth-child(1) {
		top: 0px;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	#hamburger span:nth-child(2) {
		top: 18px;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	#hamburger span:nth-child(3) {
		top: 36px;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	#hamburger.open span:nth-child(1) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		top: -3px;
		left: 8px;
	}

	#hamburger.open span:nth-child(2) {
		width: 0%;
		opacity: 0;
	}

	#hamburger.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
		top: 39px;
		left: 8px;
	}
`;

const Hamburger = ({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<StyledDiv
			onClick={function (
				e: React.MouseEvent<HTMLDivElement, MouseEvent>
			) {
				console.log(e);
				const hamDiv = (e.target as HTMLInputElement).children[0];
				hamDiv.classList.toggle("open");
				setOpen(true);
			}}
		>
			<div
				id="hamburger"
				onClick={function (e) {
					// this.toggleClass('open');
					console.log(e);
					e.currentTarget.classList.toggle("open");
					setOpen(true);
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</StyledDiv>
	);
};

export default Hamburger;

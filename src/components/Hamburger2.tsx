import React from "react";
import styled from "styled-components";

interface StylePropsType {
	variant: string;
}

const StyledDiv = styled("div")<StylePropsType>(({ variant }) => {
	console.log(variant);
	return `
	padding: ${variant === "small" ? "10px" : "30px"};
	filter: invert(35%) sepia(100%) saturate(829%) hue-rotate(230deg)
		brightness(89%) contrast(92%);
	cursor: pointer;
	.close-icon {
		width: 30px;
	}
`;
});

const Hamburger2 = ({
	setOpen,
	variant,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	variant?: string;
}) => {
	// console.log(children);
	return (
		<StyledDiv onClick={() => setOpen(true)} variant={variant || "large"}>
			<img src="/more.png" alt="Nav" className="close-icon" />
		</StyledDiv>
	);
};

export default Hamburger2;

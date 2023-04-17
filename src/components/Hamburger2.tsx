import React from "react";
import styled from "styled-components";

const StyledDiv = styled("div")`
	padding: 30px;
	filter: invert(35%) sepia(100%) saturate(829%) hue-rotate(230deg)
		brightness(89%) contrast(92%);
	cursor: pointer;
	.close-icon {
		width: 30px;
	}
`;

const Hamburger2 = ({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	// console.log(children);
	return (
		<StyledDiv onClick={() => setOpen(true)}>
			<img src="/more.png" alt="Nav" className="close-icon" />
		</StyledDiv>
	);
};

export default Hamburger2;

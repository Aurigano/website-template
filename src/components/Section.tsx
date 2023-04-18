import React from "react";
import styled from "styled-components";

const StyledDiv = styled("div")`
	width: 100vw;
	display: flex;
	.image-wrapper {
		flex: 1;
	}
	.text-wrapper {
		flex: 1;
	}
`;
type configType = {
	imageUrl: string;
	heading: string;
	body: string;
};
const Section = ({ config }: { config: configType }) => {
	const { imageUrl, heading, body } = config;
	return (
		<StyledDiv>
			<div className="image-wrapper">
				<img src={imageUrl} alt="image" className="image-class" />
			</div>
			<div className="text-wrapper">
				<h2>{heading}</h2>
				<div className="body-text">{body}</div>
			</div>
		</StyledDiv>
	);
};

export default Section;

import React from "react";
import styled from "styled-components";

interface StylePropsType {
	imagePosLeft: boolean;
}

const StyledDiv = styled("div")<StylePropsType>(
	({ imagePosLeft }) => `
	width: 100%;
    ${!imagePosLeft && ` background-color: rgb(251, 249, 255)`};
    .slice-wrapper {
        max-width: 1280px;
        margin: auto;
        display: flex;
        ${!imagePosLeft && `flex-direction: row-reverse;`}
    }
	.image-wrapper {
		flex: 1;
	}
	.text-wrapper {
		flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px;
	}
    h2 {
        font-family: 'Nunito Sans';
        font-size: 48px;
        font-weight: 800;
    }
    .body-text {
        font-size: 24px;
        max-width: 500px;
        font-weight: 400;
        margin-top: 0px;
        margin-left: 2px;
    }
`
);
type configType = {
	imagePosLeft: boolean;
	imageUrl: string;
	heading: string;
	body: string;
};
const Section = ({ config }: { config: configType }) => {
	const { imagePosLeft, imageUrl, heading, body } = config;
	return (
		<StyledDiv imagePosLeft={imagePosLeft}>
			<div className="slice-wrapper">
				<div className="image-wrapper">
					<img src={imageUrl} alt="image" className="image-class" />
				</div>
				<div className="text-wrapper">
					<h2>{heading}</h2>
					<div className="body-text">{body}</div>
				</div>
			</div>
		</StyledDiv>
	);
};

export default Section;

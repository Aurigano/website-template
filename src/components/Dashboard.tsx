import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";

const StyledDiv = styled("div")`
	width: 100vw;
`;

const Dashboard = ({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const config1 = {
		imageUrl: "/secong.svg",
		heading: "Head1",
		body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, harum! Aspernatur nemo maiores nostrum facere vitae vel impedit. Nostrum necessitatibus porro quaerat. Esse fugit vitae, saepe unde tempore libero laudantium.",
	};
	return (
		<StyledDiv>
			<Header setOpen={setOpen} />
			<Section config={config1} />
		</StyledDiv>
	);
};

export default Dashboard;

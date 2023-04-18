import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";
import Navbar from "./Navbar";
import Footer from "./Footer";

const StyledDiv = styled("div")`
	width: 100%;
`;

const Dashboard = ({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const config1 = {
		imagePosLeft: true,
		imageUrl: "/second.svg",
		heading: "Head1",
		body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, harum! Aspernatur nemo maiores nostrum facere vitae vel impedit. Nostrum necessitatibus porro quaerat. Esse fugit vitae, saepe unde tempore libero laudantium.",
	};
	const config2 = {
		imagePosLeft: false,
		imageUrl: "/laptop.svg",
		heading: "Head2",
		body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, harum! Aspernatur nemo maiores nostrum facere vitae vel impedit. Nostrum necessitatibus porro quaerat. Esse fugit vitae, saepe unde tempore libero laudantium.",
	};
	return (
		<>
			<Navbar setOpen={setOpen} />
			<StyledDiv>
				<Header />
				<Section config={config1} />
				<Section config={config2} />
			</StyledDiv>
			<Footer />
		</>
	);
};

export default Dashboard;

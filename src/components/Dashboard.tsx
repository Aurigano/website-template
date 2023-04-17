import React from "react";
import styled from "styled-components";
import Header from "./Header";

const StyledDiv = styled("div")`
	width: 100vw;
`;

const Dashboard = ({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<StyledDiv>
			<Header setOpen={setOpen} />
		</StyledDiv>
	);
};

export default Dashboard;

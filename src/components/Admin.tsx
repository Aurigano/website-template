import React, { useState, useEffect } from "react";
import supabase from "../config/supabase";
import styled from "styled-components";
import Hamburger2 from "./Hamburger2";
import { PostgrestError } from "@supabase/supabase-js";

const StyledDiv = styled.div`
	// background: red;
	width: 100vw;
	height: 100vh;
	/* color: #101928; */
	background-color: #d2d0dd;
	display: flex;
	justify-content: center;
	align-items: center;
	.login-wrapper {
		background-color: white;
		display: flex;
		border-radius: 10px;
		max-width: 1280px;
		width: 100%;
		max-height: 720px;
		height: 100%;
		margin: 20px 50px;
		padding: 20px;
	}
	.flex-part {
		min-width: 500px;
		flex-basis: 50%;
		flex: 1;
		padding: 50px;
	}
	.form-style {
		display: flex;
		flex-direction: column;
		min-width: 321px;
	}
	.form {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.logo-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		padding: 30px;
		filter: invert(35%) sepia(100%) saturate(829%) hue-rotate(230deg)
			brightness(89%) contrast(92%);
	}
	.logo {
		filter: brightness(0) saturate(100%);
		height: 36px;
	}
	.heading {
		font-family: "Work Sans";
		font-weight: 600;
		margin-bottom: 5px;
		font-size: 32px;
	}
	.sub-head {
		margin-top: 0;
		color: #6a717b;
		letter-spacing: 0.001px;
		font-size: 18px;
		font-weight: 500;
	}
	.label {
		color: #383e4a;
		font-size: 14px;
		font-weight: 500;
	}
	.input {
		padding: 10px;
		border: 1px solid #e1e2e5;
		border-radius: 10px;
		font-size: 16px;
		font-family: "Work Sans";
		font-weight: 400;
		::placeholder {
			/* Chrome, Firefox, Opera, Safari 10.1+ */
			color: #979aa1;
			opacity: 1; /* Firefox */
		}

		:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: #979aa1;
		}

		::-ms-input-placeholder {
			/* Microsoft Edge */
			color: #979aa1;
		}
	}
	.submit-btn {
		margin-top: 40px;
		padding: 13px;
		background-color: #7f56da;
		border: none;
		border-radius: 10px;
		font-size: 16px;
		font-family: "Work Sans";
		font-weight: 500;
		color: white;
	}
	.image {
		position: relative;
		background-color: #f3f4f8;
		border-radius: inherit;
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.asset {
		width: 270px;
	}
	.nav-menu {
		/* position: absolute;
		top: 0;
		right: 0; */
	}

	@media only screen and (max-width: 1000px) {
		.image {
			display: none;
		}
	}
	.table {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 15px;
	}
	.table-wrapper {
		display: flex;
		flex-direction: column;
	}
	h2 {
		font-family: "Work Sans";
		font-weight: 600;
		margin: 5px 0;
		font-size: 32px;
	}
	.row-wrapper {
		display: flex;
	}
	.name-col {
		flex: 1;
	}
	.email-col {
		flex: 1;
	}
	.message-col {
		flex: 2;
	}
`;

const Admin = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	console.log(supabase);
	const [data, setData] = useState<{
		contact?:
			| {
					[x: string]: any;
			  }[]
			| null;
		error?: PostgrestError | null;
	}>({});

	useEffect(() => {
		const getContactsFromDB = async () => {
			let { data: contact, error } = await supabase
				.from("contact")
				.select("*");

			setData({ contact, error });
		};

		getContactsFromDB();
	}, []);

	console.log(data);

	return (
		<StyledDiv>
			<div className="login-wrapper">
				{!data.error && (
					<div className="table">
						<div className="header">
							<h2>Admin</h2>
							{!open && (
								<div className="nav-menu">
									<Hamburger2
										setOpen={setOpen}
										variant="small"
									/>
								</div>
							)}
						</div>
						<div className="table-wrapper">
							<div className="row-wrapper">
								<div className="name-col sub-head">Name</div>
								<div className="email-col sub-head">E-mail</div>
								<div className="message-col sub-head">
									Message
								</div>
							</div>
							{data.contact?.map((row) => (
								<div className="row-wrapper" key={row.id}>
									<div className="name-col">{row.name}</div>
									<div className="email-col">{row.email}</div>
									<div className="message-col">
										{row.message}
									</div>
								</div>
							))}
						</div>
					</div>
				)}
				{data.error && <div className="error">Error</div>}
			</div>
		</StyledDiv>
	);
};

export default Admin;

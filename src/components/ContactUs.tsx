import React, { useState, useEffect } from "react";
import styled from "styled-components";
import supabase from "../config/supabase";
import Hamburger2 from "./Hamburger2";

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
		max-height: 720px;
		height: 100%;
		width: 100%;
		margin: 20px 50px;
	}
	.flex-part {
		/* min-width: 500px; */
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
		font-size: 16px;
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
		position: absolute;
		top: 0;
		right: 0;
	}
	.red {
		color: #cc3e3e !important;
		text-align: center;
	}
	.dark-font {
		color: #212121 !important;
		text-align: center;
	}

	@media only screen and (max-width: 1000px) {
		.image {
			display: none;
		}
	}
`;

const ContactUs = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [formError, setFormError] = useState<string | null>(null);
	const [dataSent, setDataSent] = useState<boolean>(false);
	const [values, setValues] = useState({
		email: "",
		name: "",
		message: "",
	});

	const handleChange = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		console.log(event.target.name, event.target.value);
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(values);

		if (!values.email || !values.email || !values.message)
			setFormError("Please fill all the values");
		else {
			const { data, error } = await supabase.from("contact").insert([
				{
					name: values.name,
					email: values.email,
					message: values.message,
				},
			]);
			if (error) {
				setFormError(`Couldn't send data`);
			} else {
				console.log(data);
				setDataSent(true);
				setTimeout(() => {
					setDataSent(false);
				}, 3000);
			}
		}
		console.log(event);
		(event.target as HTMLFormElement).reset();
		(document.getElementById("message") as HTMLInputElement).value = "";
	};
	return (
		<StyledDiv>
			<div className="login-wrapper">
				<div className="form flex-part">
					<form
						className="form-style"
						id="contact-form"
						name="contact-form"
						onSubmit={(e) => handleSubmit(e)}
					>
						<h2 className="heading">Contact us.</h2>
						<p className="sub-head">
							Get in touch. Communicate with our team.{" "}
						</p>
						<p className="label">Name</p>
						<input
							required
							type="name"
							className="name-input input"
							placeholder="Enter Name"
							name="name"
							id="name"
							onChange={(e) => handleChange(e)}
						/>
						<p className="label">Email</p>
						<input
							required
							type="email"
							className="email-input input"
							placeholder="Enter Email"
							name="email"
							id="email"
							onChange={(e) => handleChange(e)}
						/>
						<p className="label">Message</p>
						<textarea
							required
							className="message-input input"
							placeholder="Enter your suggestion"
							name="message"
							id="message"
							form="contact-us"
							onChange={(e) => handleChange(e)}
						/>
						<button className="submit-btn" type="submit">
							Send
						</button>
						{dataSent && (
							<p className="label dark-font">
								{!formError && "Data sent successfully"}
							</p>
						)}
						<p className="label red">{formError}</p>
					</form>
					<a href="/" className="logo-wrapper">
						<img src="/logo.svg" alt="logo" className="logo" />
					</a>
				</div>
				<div className="image flex-part">
					<img src="/contact.png" alt="travel" className="asset" />
					{!open && (
						<div className="nav-menu">
							<Hamburger2 setOpen={setOpen} />
						</div>
					)}
				</div>
			</div>
		</StyledDiv>
	);
};

export default ContactUs;

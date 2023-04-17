import React from "react";
import styled from "styled-components";
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
	padding: 20px 0;
	.login-wrapper {
		background-color: white;
		display: flex;
		border-radius: 10px;
		max-width: 1280px;
		max-height: 720px;
		height: 100%;
		margin: 20px 0;
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

	@media only screen and (max-width: 1000px) {
		.image {
			display: none;
		}
	}
`;

const AdminLogin = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [values, setValues] = React.useState({ email: "", password: "" });
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(values);
	};
	return (
		<StyledDiv>
			<div className="login-wrapper">
				<div className="form flex-part">
					<form
						className="form-style"
						onSubmit={(e) => handleSubmit(e)}
					>
						<h2 className="heading">Welcome Back</h2>
						<p className="sub-head">Please enter details</p>
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
						<p className="label">Password</p>
						<input
							required
							type="password"
							className="password input"
							placeholder="Enter Password"
							name="password"
							id="password"
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							onChange={(e) => handleChange(e)}
						/>
						<button className="submit-btn" type="submit">
							Log In
						</button>
					</form>
					<a href="/" className="logo-wrapper">
						<img src="/logo.svg" alt="logo" className="logo" />
					</a>
				</div>
				<div className="image flex-part">
					<img src="/travel.png" alt="travel" className="asset" />
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

export default AdminLogin;

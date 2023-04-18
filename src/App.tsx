import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import AdminLogin from "./components/AdminLogin";
import ContactUs from "./components/ContactUs";
import Admin from "./components/Admin";
import SideNav from "./components/SideNav";
import About from "./components/About";

const StyledDiv = styled("div")`
	position: sticky;
	top: 0;
	z-index: 2;
`;

function App() {
	const [open, setOpen] = useState(false);
	return (
		<BrowserRouter>
			{open && (
				<StyledDiv>
					<SideNav setOpen={setOpen} />
				</StyledDiv>
			)}
			<Routes>
				<Route
					path="/"
					element={<Dashboard open={open} setOpen={setOpen} />}
				/>
				<Route
					path="/about"
					element={<About open={open} setOpen={setOpen} />}
				/>
				<Route
					path="/contact-us"
					element={<ContactUs open={open} setOpen={setOpen} />}
				/>
				<Route
					path="/admin-login"
					element={<AdminLogin open={open} setOpen={setOpen} />}
				/>
				<Route
					path="/admin"
					element={<Admin open={open} setOpen={setOpen} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

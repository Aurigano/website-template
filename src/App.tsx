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
	background: white;
`;

function App() {
	const [open, setOpen] = useState(false);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard setOpen={setOpen} />} />
				<Route
					path="/about"
					element={<About open={open} setOpen={setOpen} />}
				/>
				<Route path="/contact-us" element={<ContactUs />} />
				<Route
					path="/admin-login"
					element={<AdminLogin open={open} setOpen={setOpen} />}
				/>
				<Route path="/admin" element={<Admin />} />
			</Routes>
			{open && (
				<StyledDiv>
					<SideNav setOpen={setOpen} />
				</StyledDiv>
			)}
		</BrowserRouter>
	);
}

export default App;

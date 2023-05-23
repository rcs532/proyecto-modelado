import React, { useState } from "react";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBCollapse,
} from "mdb-react-ui-kit";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const [showBasic, setShowBasic] = useState(false);
	const location = useLocation();

	const isActive = (pathname) => {
		return location.pathname === pathname ? "active" : "";
	};

	return (
		<MDBNavbar expand="lg" light bgColor="light">
			<MDBContainer fluid>
				<Link to={"/"}>
					<MDBNavbarBrand>Integracion Numerica</MDBNavbarBrand>
				</Link>

				<MDBNavbarToggler
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowBasic(!showBasic)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>

				<MDBCollapse navbar show={showBasic}>
					<MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
						<MDBNavbarItem>
							<Link to={"Rectangulos"}>
								<MDBNavbarLink
									className={isActive("/Rectangulos")}
								>
									Metodo de los rectangulos
								</MDBNavbarLink>
							</Link>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<Link to={"Trapecios"}>
								<MDBNavbarLink
									className={isActive("/Trapecios")}
								>
									Metodo de los trapezoides
								</MDBNavbarLink>
							</Link>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<Link to={"Simpson"}>
								<MDBNavbarLink className={isActive("/Simpson")}>
									Metodo de Simpson
								</MDBNavbarLink>
							</Link>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}

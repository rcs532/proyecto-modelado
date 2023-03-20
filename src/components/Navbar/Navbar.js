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

import { Link } from "react-router-dom";

export default function Navbar() {
	const [showBasic, setShowBasic] = useState(false);

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
								<MDBNavbarLink active aria-current="page" href="#">
									Metodo de los rectangulos
								</MDBNavbarLink>
							</Link>
						</MDBNavbarItem>
						<Link to={"Trapecios"}>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">Metodo de los trapezoides</MDBNavbarLink>
							</MDBNavbarItem>
						</Link>
						<Link to={"Simpson"}>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">Metodo de Simpson</MDBNavbarLink>
							</MDBNavbarItem>
						</Link>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}

import React from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardHeader,
	MDBCol,
} from "mdb-react-ui-kit";

import "./IntroCard.css";

function IntroCard() {
	return (
		<MDBCard alignment="center" className="contenedor">
			<MDBCardHeader>TPO Modelado y Simulacion</MDBCardHeader>
			<MDBCardBody>
				<MDBCardTitle>Metodos de Integracion Numerica</MDBCardTitle>
				<MDBCardText>Integrantes: Roberto Salinas y Andres Breuer</MDBCardText>
			</MDBCardBody>
		</MDBCard>
	);
}

export default IntroCard;

import React from "react";
import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

import "./FormSimpson.css";
import { calcularSimpson } from "../../util/functions";
import SimpsonGraph from "../SimpsonGraph/SimpsonGraph";

export default function FormSimpson({ onSubmit }) {
  let [func, setFn] = React.useState("");
  let [a, setA] = React.useState(0);
  let [b, setB] = React.useState(0);
  let [n, setN] = React.useState(0);
  let [resultado, setResultado] = React.useState(0);
  let [submitted, setSubmitted] = React.useState(false);

  console.log(submitted);

  function onChangeA(event) {
    if (event.target.value === "") {
      let value = 0;
      setA(value);
    } else {
      setA(parseInt(event.target.value));
    }
  }

  function onChangeB(event) {
    if (event.target.value === "") {
      let value = 0;
      setB(value);
    } else {
      setB(parseInt(event.target.value));
    }
  }

  function onChangeN(event) {
    if (event.target.value === "") {
      let value = 0;
      setN(value);
    } else {
      setN(
        parseInt(event.target.value) % 2 === 0
          ? parseInt(event.target.value)
          : parseInt(event.target.value) + 1
      );
    }
  }

  function onChangeF(event) {
    setSubmitted(false);
    setFn(event.target.value);
  }

  function onSubmit() {
    let resultado = calcularSimpson(a, b, n, func);
    setResultado(resultado);
    setSubmitted(true);
  }
  return (
    <MDBContainer className="container">
      <MDBRow className="g-3">
        <MDBCol sm="7">
          <MDBInput
            id="form12Example1"
            label="Function"
            value={func}
            onChange={onChangeF}
          />
        </MDBCol>
        <MDBCol size="sm">
          <MDBInput
            id="form12Example2"
            label="a"
            value={a}
            onChange={onChangeA}
          />
        </MDBCol>
        <MDBCol size="sm">
          <MDBInput
            id="form12Example3"
            label="b"
            value={b}
            onChange={onChangeB}
          />
        </MDBCol>
        <MDBCol size="sm">
          <MDBInput
            id="form12Example3"
            label="n"
            value={n}
            onChange={onChangeN}
          />
        </MDBCol>
        <MDBCol size="sm">
          <MDBBtn onClick={onSubmit}>Calcular</MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBTypography tag="h4" className="resultado">
        El area aproximada es {resultado}
      </MDBTypography>
      {submitted && <SimpsonGraph a={a} b={b} n={n} fn={func} />}
    </MDBContainer>
  );
}

import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Row>
      <Col>
        <h1>Login</h1>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="message">Senha</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormGroup>

          <Button
            type="button"
            color="primary"
            onClick={() => {
              console.log(email, password);
            }}
          >
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;

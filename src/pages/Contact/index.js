import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Contact from "../../model/Contact";

const ContactForm = () => {
  // camada de estado = armazenamento de váriaveis
  const [contact, setContact] = useState(new Contact());

  function sum(a, b) {
    var total = a + b;
    return total;
  }

  // Lifecicle
  React.useEffect(() => {
    console.log("initial", sum(5, 3));
  }, []);

  return (
    <Row>
      <Col>
        <h1>{contact.subject}</h1>
        <Form>
          <FormGroup>
            <Label for="subject">Assunto</Label>
            <Input
              type="text"
              name="subject"
              id="subject"
              placeholder="Digite o Assunto"
              value={contact.subject}
              onChange={(event) =>
                setContact({ ...contact, subject: event.target.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="message">Mensagem</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              value={contact.message}
              onChange={(event) =>
                setContact({ ...contact, message: event.target.value })
              }
            />
          </FormGroup>

          <Button
            type="button"
            onClick={() => {
              console.log(contact);
            }}
          >
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;

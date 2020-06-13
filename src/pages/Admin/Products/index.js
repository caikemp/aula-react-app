import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Product from "../../../model/Product";

const ProductForm = (props) => {
  // camada de estado = armazenamento de váriaveis
  const [product, setProduct] = useState(new Product());

  useEffect(() => {
    setProduct(props.product);
  }, [props.product]);

  return (
    <Row>
      <Col>
        <h1>{product.name}</h1>
        <Form>
          <FormGroup>
            <Label for="name">Nome</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Digite o nome"
              value={product.name}
              onChange={(event) =>
                setProduct({ ...product, name: event.target.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="message">Descrição</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              value={product.description}
              onChange={(event) =>
                setProduct({ ...product, description: event.target.value })
              }
            />
          </FormGroup>

          <Button
            type="button"
            onClick={() => {
              props.onSave(product);
            }}
          >
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

ProductForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

ProductForm.defaultProps = {
  product: {},
};

export default ProductForm;

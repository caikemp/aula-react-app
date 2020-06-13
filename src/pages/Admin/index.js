import React, { useState } from "react";
import { Button, Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import TabContent from "reactstrap/lib/TabContent";
import TabPane from "reactstrap/lib/TabPane";
import Product from "../../model/Product";
import ProductForm from "./Products";

const TAB_PRODUCTS = "TAB_PRODUCTS";
const TAB_CLIENTS = "TAB_CLIENTS";

const Admin = (props) => {
  const [activeTab, setTab] = useState(TAB_PRODUCTS);
  const [product, setProduct] = useState({
    name: "Ipod",
    description: "para ouvir música",
  });

  return (
    <>
      <Row>
        <Col>
          <h2>Administração</h2>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Nav vertical>
            <NavItem>
              <NavLink href="#" onClick={() => setTab(TAB_PRODUCTS)}>
                Novo Produto
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => setTab(TAB_CLIENTS)}>
                Novo Cliente
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col md="6">
          <TabContent activeTab={activeTab}>
            <TabPane tabId={TAB_PRODUCTS}>
              <Button onClick={() => setProduct(new Product())}>
                Novo produto
              </Button>
              <ProductForm
                product={product}
                onSave={(product) => console.log(product)}
              />
            </TabPane>
            <TabPane tabId={TAB_CLIENTS}>Clientes</TabPane>
          </TabContent>
        </Col>
      </Row>
    </>
  );
};

export default Admin;

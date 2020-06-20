import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import Api from "../../api";

const Shows = () => {
  const [shows, setShows] = useState([]);

  // vc precisa usar o useCallback
  const getShows = useCallback(async () => {
    const res = await Api.get({
      url: "https://api.tvmaze.com/schedule?country=US&date=2014-12-01",
    });
    setShows(res);
  }, [setShows]);

  // Executa sempre que entrar na tela
  useEffect(() => {
    getShows();
  }, [getShows]);

  const renderShows = () => {
    return shows.map((item, key) => {
      const { show } = item;
      return (
        <Col xs="6" md="3" key={key} className="pt-2">
          <Card>
            {show.image && (
              <CardImg
                top
                width="100%"
                src={show.image.medium}
                alt="Card image cap"
              />
            )}
            <CardBody>
              <CardTitle>{show.name}</CardTitle>
              <CardSubtitle>{show.type}</CardSubtitle>
              <Button>Ver mais</Button>
            </CardBody>
          </Card>
        </Col>
      );
    });
  };

  return (
    <>
      <Row>
        <Col md="12">
          <h1>Shows</h1>
        </Col>
      </Row>
      <Row>{renderShows()}</Row>
    </>
  );
};

export default Shows;

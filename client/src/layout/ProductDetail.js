import React, { useState, useEffect } from "react";
import { Card, Container, Col, Row, Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./ail.css";
import AddToCart from "../components/AddToCart/AddToCart";
import FootNav from "../components/Footer/Footer";
export default function ({ p, location }) {

  const [product, setProduct] = useState({});

  useEffect(() => {
    const productId = location.search.split("?")[1];
    console.log(productId);
    axios
      // .get(`https://les-meilleurs.herokuapp.com/api/products/${productId}`)
      .get(`/api/products/${productId}`)
      .then(res => setProduct(res.data));
    // console.log(location);
  }, []);
  //     setProduct(res.data);
  //     console.log(res.data);
  //   });
  // }, []);
  console.log("Product selected: ", product)
  return (
    <>
      <Container>
        <Card className="detailsContainer">
          <Row>
            <Col>
              <Card.Img
                className="detailsImages"
                src={product.image1}
                alt="product image 1"
              />
            </Col>
            <Col className="noPad">
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>${product.price}</Card.Title>
                <Card.Text>
                  <Row style={{ fontWeight: "bold" }}>Product Details:</Row>
                  <br />
                  <Row>{product.description}</Row>
                  <Row>
                    <strong>Category : </strong> {product.category}
                  </Row>
                  <Row>
                    <strong>Quantity : </strong> {product.quantity}
                  </Row>
                </Card.Text>
                <br />
                <br />
                <AddToCart item={product} />
                <br />
              </Card.Body>
              <Row className="Thumbs">
                <Col>
                  <Card.Img className="thumbnail" src={product.image1}
                  />
                </Col>
                <Col>
                  <Card.Img className="thumbnail" src={product.image2}
                  />
                </Col>
                <Col>
                  <Card.Img className="thumbnail" src={product.image3}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>

      <Container className="tabsContainer">
        <Col>
          <Tabs
            className="tabtop"
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="description" title="Description">
              <p className="tab">Product info!</p>
            </Tab>
            <Tab eventKey="review" title="Reviews">
              <p className="tab">Coming Soon!</p>
            </Tab>
            <Tab eventKey="custom" title="Custom Tab">
              <p className="tab">Custom Detail!</p>
            </Tab>
          </Tabs>
        </Col>
      </Container>
      <FootNav />
    </>
  );
}

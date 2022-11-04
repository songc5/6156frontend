import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIService from '../../api/apiservice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contacts() {
  const { uni } = useParams();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    Promise.all([
      APIService.getEmail()
        .then(response => {
          setEmail(response.data);
        })
        .catch(error => {
          console.error('Get Email Error:', error);
        }),
      APIService.getPhone()
        .then(response => {
          setPhone(response.data);
        })
        .catch(error => {
          console.error('Get Phone Error:', error);
        }),
      APIService.getAddress()
        .then(response => {
          setAddress(response.data);
        })
        .catch(error => {
          console.error('Get Address Error:', error);
        }),
    ]);
  });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Contact of {uni}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>Phone:</div>
          </Col>
          <Col>
            <div>{phone}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>Email:</div>
          </Col>
          <Col>
            <div>{email}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>Address:</div>
          </Col>
          <Col>
            <div>{address}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIService from '../../api/apiservice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Phones from './Phones';
import Emails from './Emails';
import Address from './Address';
export default function Contacts() {
  const { uni } = useParams();
  const [phone, setPhone] = useState(12345);
  const [email, setEmail] = useState('abc@gmail.com');
  const [address, setAddress] = useState({
    address_id: 0,
    address1: 'string',
    address2: 'string',
    city: 'string',
    state: 'string',
    zip_code: 0,
  });

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
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Contact of {uni}</h1>
          </Col>
        </Row>
        <Phones phone={phone} setPhone={setPhone} uni={uni} />
        <Emails email={email} setEmail={setEmail} uni={uni} />
        <Address address={address} setAddress={setAddress} uni={uni} />
      </Container>
    </>
  );
}

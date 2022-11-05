import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';
import apiservice from '../../api/apiservice';

function Address({ uni, address, setAddress }) {
  const [addressEdit, setAddressEdit] = useState(false);
  const handleSubmit = () => {
    setAddressEdit(false);
    apiservice.addAddress(uni, address).catch(error => {
      console.error('Get Address Error:', error);
    });
  };

  return (
    <>
      <Row>
        <Col>
          <div>Address:</div>
        </Col>
        <Col>
          {!addressEdit && (
            <button
              onClick={() => {
                setAddressEdit(true);
              }}
            >
              <AiOutlineEdit />
            </button>
          )}
          {addressEdit && (
            <button onClick={handleSubmit}>
              <AiOutlineCheck />
            </button>
          )}
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 1, offset: 1 }}>
          <div>Address1:</div>
        </Col>
        {!addressEdit && (
          <Col>
            <div>{address.address1}</div>
          </Col>
        )}
        {addressEdit && (
          <Col>
            <input
              type='text'
              value={address.address1}
              onChange={e => {
                setAddress(prevState => {
                  return { ...prevState, address1: e.target.value };
                });
              }}
            />
          </Col>
        )}
      </Row>
      <Row>
        <Col md={{ span: 1, offset: 1 }}>
          <div>Address2:</div>
        </Col>
        {!addressEdit && (
          <Col>
            <div>{address.address2}</div>
          </Col>
        )}
        {addressEdit && (
          <Col>
            <input
              type='text'
              value={address.address2}
              onChange={e => {
                setAddress(prevState => {
                  return { ...prevState, address2: e.target.value };
                });
              }}
            />
          </Col>
        )}
      </Row>
      <Row>
        <Col md={{ span: 1, offset: 1 }}>
          <div>City:</div>
        </Col>
        <Col>
          <div>{address.city}</div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 1, offset: 1 }}>
          <div>State:</div>
        </Col>
        {!addressEdit && (
          <Col>
            <div>{address.state}</div>
          </Col>
        )}
        {addressEdit && (
          <Col>
            <input
              type='text'
              value={address.state}
              onChange={e => {
                setAddress(prevState => {
                  return { ...prevState, state: e.target.value };
                });
              }}
            />
          </Col>
        )}
      </Row>
      <Row>
        <Col md={{ span: 1, offset: 1 }}>
          <div>Zip:</div>
        </Col>
        {!addressEdit && (
          <Col>
            <div>{address.zip_code}</div>
          </Col>
        )}
        {addressEdit && (
          <Col>
            <input
              type='text'
              value={address.zip_code}
              onChange={e => {
                setAddress(prevState => {
                  return { ...prevState, zip_code: e.target.value };
                });
              }}
            />
          </Col>
        )}
      </Row>
    </>
  );
}
Address.propTypes = {
  uni: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  setAddress: PropTypes.func.isRequired,
};
export default Address;

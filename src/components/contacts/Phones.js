import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';
import apiservice from '../../api/apiservice';
function Phones({ uni, phone, setPhone }) {
  const [phoneEdit, setPhoneEdit] = useState(false);
  const handlePhoneChange = ({ target: { value } }) => {
    setPhone(value);
  };
  const handleSubmit = () => {
    setPhoneEdit(false);
    apiservice.addPhone(uni, phone).catch(error => {
      console.error('Get Phones Error:', error);
    });
  };
  return (
    <>
      <Row>
        <Col>
          <div>Phone:</div>
        </Col>

        <Col>
          {!phoneEdit && (
            <button
              onClick={() => {
                setPhoneEdit(true);
              }}
            >
              <AiOutlineEdit />
            </button>
          )}
          {phoneEdit && (
            <button>
              <AiOutlineCheck onClick={handleSubmit} />
            </button>
          )}
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 1 }}>
          {!phoneEdit && <div>{phone}</div>}
          {phoneEdit && <input type='text' value={phone} onChange={handlePhoneChange} />}
        </Col>
      </Row>
    </>
  );
}
Phones.propTypes = {
  uni: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  setPhone: PropTypes.func.isRequired,
};

export default Phones;

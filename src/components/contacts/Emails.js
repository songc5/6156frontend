import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';
import apiservice from '../../api/apiservice';
function Emails({ uni, email, setEmail }) {
  const [emailEdit, setEmailEdit] = useState(false);
  const handleChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handleSubmit = () => {
    setEmailEdit(false);
    apiservice.addPhone(uni, email).catch(error => {
      console.error('Get Email Error:', error);
    });
  };
  return (
    <>
      <Row>
        <Col>
          <div>Email:</div>
        </Col>

        <Col>
          {!emailEdit && (
            <button
              onClick={() => {
                setEmailEdit(true);
              }}
            >
              <AiOutlineEdit />
            </button>
          )}
          {emailEdit && (
            <button>
              <AiOutlineCheck onClick={handleSubmit} />
            </button>
          )}
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 1 }}>
          {!emailEdit && <div>{email}</div>}
          {emailEdit && <input type='text' value={email} onChange={handleChange} />}
        </Col>
      </Row>
    </>
  );
}
Emails.propTypes = {
  uni: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default Emails;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const AddStudent = props => {
  const initialState = {
    uni: '',
    first_name: '',
    last_name: '',
  };

  const [student, setStudent] = useState(initialState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!student.uni || !student.first_name || !student.last_name) return;
    const data = {
      uni: student.uni,
      last_name: student.last_name,
      first_name: student.first_name,
    };

    // TODO: API test
    props.addStudent(data);

    setStudent(initialState);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Student UNI:</Form.Label>
          <Form.Control type='number' placeholder='1234' name='uni' value={student.uni} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Harry'
            name='first_name'
            value={student.first_name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Potter'
            name='last_name'
            value={student.last_name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Add New Student
        </Button>
      </Form>
    </>
  );
};

AddStudent.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default AddStudent;

import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const StudentsTable = props => {
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>UNI</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.students.length > 0 ? (
            props.students.map(student => (
              <tr key={student.uni}>
                <td>{student.uni}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>
                  <Link to={student.links.contact}>Contacts</Link>
                </td>
                <td>
                  <Button onClick={() => props.deleteStudent(student.uni)}>Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No students available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

StudentsTable.propTypes = {
  students: PropTypes.array.isRequired,
  deleteStudent: PropTypes.func.isRequired,
};

export default StudentsTable;

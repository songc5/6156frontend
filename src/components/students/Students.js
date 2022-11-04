import React, { useState } from 'react';
import AddStudent from './AddStudent';
import StudentsTable from './StudentsTable';
import APIService from '../../api/apiservice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Students = () => {
  // TODO: replace data
  const studentsData = [
    { uni: 1, last_name: 'A', first_name: 'A', links: { contact: '/contacts/1' } },
    { uni: 2, last_name: 'B', first_name: 'B', links: { contact: '/contacts/2' } },
    { uni: 3, last_name: 'C', first_name: 'C', links: { contact: '/contacts/3' } },
    { uni: 4, last_name: 'D', first_name: 'D', links: { contact: '/contacts/4' } },
  ];

  const [students, setStudents] = useState(studentsData);

  // useEffect(() => {
  //   APIService.getStudents(0, 100).then(response => {
  //     setStudents(response.data);
  //   });
  // }, []);

  const addStudent = student => {
    setStudents([...students, student]);
    APIService.addStudent(student)
      .then(res => console.log(res.data))
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const deleteStudent = uni => {
    setStudents(students.filter(student => student.uni != uni));
    APIService.deleteStudent(uni)
      .then(res => console.log(res.data))
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <AddStudent addStudent={addStudent} />
          </Col>
          <Col>
            <StudentsTable students={students} deleteStudent={deleteStudent} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Students;

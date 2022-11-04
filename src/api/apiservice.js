import instance from './instance';
class APIService {
  // get students' information from index skip to limit
  getStudents(skip, limit) {
    return instance.get('/students', {
      params: {
        skip: skip,
        limit: limit,
      },
    });
  }

  // get student information by uni
  getStudent(uni) {
    return instance.get(`/students/${uni}`);
  }

  // delete a student's information by uni
  deleteStudent(uni) {
    return instance.delete(`/students/${uni}`);
  }

  // add a new student's information
  addStudent(data) {
    return instance.post('/students', data);
  }

  getEmail(uni) {
    return instance.get(`/students/${uni}/emails`);
  }

  addEmail(uni, data) {
    return instance.post(`/students/${uni}/emails`, data);
  }

  getAddress(uni) {
    return instance.get(`/students/${uni}/addresses`);
  }

  addAddress(uni, data) {
    return instance.post(`/students/${uni}/addresses`, data);
  }

  getPhone(uni) {
    return instance.get(`/students/${uni}/phones`);
  }

  addPhone(uni, data) {
    return instance.post(`/students/${uni}/phones`, data);
  }
}

export default new APIService();

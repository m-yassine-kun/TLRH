import axios from "axios";

const REPORTING_API_BASE_URL = "http://localhost:8080/rapports/";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(REPORTING_API_BASE_URL, employee);
  }

  getSexe() {
    return axios.get(REPORTING_API_BASE_URL + "sexe");
  }

  deleteEmployee(id) {
    return axios.delete(REPORTING_API_BASE_URL + "/" + id);
  }

  getEmployeeById(id) {
    return axios.get(REPORTING_API_BASE_URL + "/" + id);
  }

  updateEmployee(employee, id) {
    return axios.put(REPORTING_API_BASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();

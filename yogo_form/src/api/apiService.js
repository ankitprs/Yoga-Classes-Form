import axios from 'axios'

const URL = "http://localhost:3002/api/v0"

class ApiService {
  submit_user_form = async (email_id, age, name, phone_number, batch) => {


    const url_submit = URL + '/user/';
    const data = {
      email_id: email_id,
      age: Number(age),
      name: name,
      phone_number: phone_number,
      batch: batch,
    }
    console.log(`data -> ${data}`);
    const response = await axios.post(url_submit, data)
    console.log(`response -> ${response}`);
    return response;
  }

  verify_payments = async (upiId) => {
    return "null"
  }
}

const apiService = new ApiService
export default apiService
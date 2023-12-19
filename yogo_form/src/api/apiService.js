import axios from 'axios'

const express_url = "https://vercel.com/ankit-s-projects-15971897/yoga-classes-form-pljr/api/v0"
const URL = process.env.BACKED_DOMAIN_URL ? process.env.BACKED_DOMAIN_URL : express_url

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

  verify_payments = async (upiId, email_id, batch) => {
    const url_submit = URL + '/enroll/verify_payment';
    const data = {
      email_id: email_id,
      batch: batch,
      payment_id: upiId + "payment_id"
    }
    console.log(`data -> ${data}`);
    const response = await axios.post(url_submit, data)
    console.log(`response -> ${response}`);
    if (response.data.verified) return true
    return null
  }
}

const apiService = new ApiService
export default apiService
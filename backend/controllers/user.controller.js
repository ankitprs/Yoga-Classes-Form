import User from '../models/User.model.js'
import Enrollment from '../models/Entrollment.model.js'
import { get_month_next_id, get_entrollment_id } from '../utils/util.js'


class UserController {
  create_payment_url = (batch, email_id) => {
    const month = get_month_next_id();
    return `/payment?email_id=${email_id}&month=${month}&batch=${batch}`
  }

  check_enrollment_for_user = async (month, email_id) => {
    try {
      const entrollment = await Enrollment.findByPk(get_entrollment_id(month, email_id))
      if (entrollment != null) {
        return true;
      }
    } catch (err) {

    }
    return false;
  }

  validateForm = (email_id, name, age, phone_number, batch) => {

    return true;
  }

  submit_user_form = async (req, res) => {
    const { email_id, name, age, phone_number, batch } = req.body
    if (!this.validateForm(email_id, name, age, phone_number, batch)) {

    }
    try {
      const user = await User.findByPk(email_id);
      if (user == null) {
        const newUser = await User.create({
          email_id,
          name,
          age,
          phone_number,
        });

        console.log('User created:', newUser.toJSON());
        return res.json({ enrolled: false, message: "", paymentUrl: this.create_payment_url(batch, email_id) });
      } else {
        if (!this.check_enrollment_for_user(get_month_next_id(), email_id)) {
          return res.json({ enrolled: false, message: "Renew Enrollment", paymentUrl: this.create_payment_url(batch, email_id) });
        }
      }
    } catch (error) {
      console.error('Error saving data to MySQL:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ enrolled: true, message: "You have allready register to the next class" })
  }
}

const userController = new UserController;
export default userController;
import Entrollments from '../models/Entrollment.model.js'
import { get_entrollment_id, get_month_next_id } from '../utils/util.js'
const amount = 500


class EntrollmentController {

  verify_entrollment = async (req, res) => {
    const { email_id, batch, payment_id } = req.body
    const month = get_month_next_id()
    try {
      if (!this.verfiy_payments(payment_id, amount, email_id, month))
        return res.json({ verified: false })

      console.log(`email_id: ${email_id}, batch: ${batch}, payment_id: ${[payment_id]} `);

      const month_email_id = get_entrollment_id(month, email_id)

      const newEntroll = await Entrollments.create({
        month_email_id,
        email_id,
        month,
        batch,
        payment_id
      })
      console.log('Entrollment Created : ', newEntroll.toJSON());
      return res.json({ verified: true })
    } catch (error) {
      console.log('Error', error);
      return res.json({ verified: false })
    }
  }

  webwook_handler = async (req, res) => {
    const { email_id, batch, payment_id } = req.body
    const month = get_month_next_id()
    try {
      if (!this.verfiy_payments(payment_id, amount, email_id, month))
        return res.json({ verified: false })

      const entrollment_id = get_entrollment_id(month, email_id)

      const newEntroll = await Entrollments.create({
        entrollment_id,
        email_id,
        month,
        batch,
        payment_id
      })
      console.log('Entrollment Created : ', newEntroll.toJSON());
      return res.json({ verified: true })
    } catch (error) {
      console.log('Error', error);
      return res.json({ verified: false })
    }
  }

  verfiy_payments = (transaction_id, amount, email_id, month) => {
    return true;
  }
}

const entrollmentController = new EntrollmentController;
export default entrollmentController;
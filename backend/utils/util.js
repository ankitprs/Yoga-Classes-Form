
const get_month_next_id = () => {
  const currentTime = new Date();
  var year = currentTime.getFullYear();
  var month = currentTime.getMonth() + 1;
  return `${(month + 1) % 13}/${year + month / 12}`;
}

const get_entrollment_id = (month, email_id) => {
  return `${month}_plue_${email_id}`;
}

export {
  get_month_next_id,
  get_entrollment_id
}
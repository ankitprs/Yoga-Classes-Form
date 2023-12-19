const completePayment = async () => {
  //TODO paymnets
  await new Promise(resolver => setTimeout(resolver, 2000));
  console.log("after so far");
  return true;
}

export {
  completePayment
}
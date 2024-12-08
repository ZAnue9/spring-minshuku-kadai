 const stripe = Stripe('pk_test_51QPRCZHFdDCpMxIqJJ9cp0xpPTPW0PPjvae3TQOiRBrhz18CQPBa5yjzx5QmFBMzkTdedmhRmSMR6tGZDLQyvEqW003cV9Yncz');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });
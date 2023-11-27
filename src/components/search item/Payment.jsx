import React, { useState } from 'react';
import './payment.css';
const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your payment processing logic here
    setLoading(true);

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
      alert('Booking successful!');
    }, 2000);
  };

  return (
    <>
    <div className="App">

    <form method="Post" onSubmit={handleSubmit} className="form">
    <h2>PAYMENT DETAILS</h2>
      <div className="input_fields">
      <label htmlFor="cardnumber">
        Card Number
        </label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength="16"
          placeholder="1234 5678 9012 3456"
          required
          />
      </div>

      <div className="input_fields">
      <label htmlFor="expirydate">
        Expiry Date
        </label>
        <input
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          maxLength="5"
          placeholder="MM/YY"
          required
          />
      </div>

      <div className="input_fields">
      <label htmlFor="cvv">
        CVV
        </label>
        <input
          type="text"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          maxLength="3"
          placeholder="123"
          required
          />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  </div>
</>
  );
};

export default PaymentPage;




// import React, { useState } from 'react';

// const PaymentPage = () => {
  //   const [cardNumber, setCardNumber] = useState('');
//   const [expiry, setExpiry] = useState('');
//   const [cvc, setCvc] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your payment processing logic here
//     setLoading(true);

//     // Simulate a delay for demonstration purposes
//     setTimeout(() => {
//       setLoading(false);
//       alert('Booking successful!');
//     }, 2000);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card Number
//         <input
//           type="text"
//           value={cardNumber}
//           onChange={(e) => setCardNumber(e.target.value)}
//           maxLength="16"
//           placeholder="1234 5678 9012 3456"
//           required
//         />
//       </label>

//       <label>
//         Expiry Date
//         <input
//           type="text"
//           value={expiry}
//           onChange={(e) => setExpiry(e.target.value)}
//           maxLength="5"
//           placeholder="MM/YY"
//           required
//         />
//       </label>

//       <label>
//         CVC
//         <input
//           type="text"
//           value={cvc}
//           onChange={(e) => setCvc(e.target.value)}
//           maxLength="3"
//           placeholder="123"
//           required
//         />
//       </label>

//       <button type="submit" disabled={loading}>
//         {loading ? 'Processing...' : 'Pay'}
//       </button>
//     </form>
//   );
// };

// export default PaymentPage;
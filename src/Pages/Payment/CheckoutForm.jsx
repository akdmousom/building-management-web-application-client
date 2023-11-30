import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useSecureAxios from "../../Hooks/Axios/useSecureAxios";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState()

  const Axios = useSecureAxios()
  const user = useAuth()
  const { userEmail } = user
  console.log(user?.user.displayName);


  const getRentData = async () => {
    const res = await Axios.get(`/get-pay-rent?email=${user.userEmail}`)
    return res;
  }
  const { data, isLoading } = useQuery({
    queryKey: ['getRentData'],
    queryFn: getRentData
  })

  console.log(data);
  const datas = {
    rent: data?.data[0].rent
  }

  console.log(data?.data[0]);



  useEffect(() => {
    Axios.post('http://localhost:5000/api/v1/create-payment-intent', datas)
      .then(res => {
        // console.log(res.data.clientSecret);
        const clientSecrets = res?.data?.clientSecret
        setClientSecret(clientSecrets)
      })
  }, [Axios])









  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user.user.displayName || 'anonymous',
          email: user.userEmail || 'anonymous',




        }
      }
    })

    if (confirmError) {

      console.log(confirmError);

    }

    if (paymentIntent) {

      if (paymentIntent.status === 'succeeded') {

        const rentDone = {
          email : userEmail,

        }
        
      }

    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
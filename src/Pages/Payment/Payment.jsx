import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";



const Payment = () => {
    const stripePromise = loadStripe('pk_test_51OFAsbKm9nzjtjZkaRjgRZ4WcBTS6CfuBZCiORgaVOLdPKtcLrMrXrjLgRRfIog8Gf1EdSoVwd1t9S4uEaWuSrnG00lSJBzVMJ');
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;
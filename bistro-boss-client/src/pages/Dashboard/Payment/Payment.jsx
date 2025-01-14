import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// TODO: Add publishable kay
const stripePromise = loadStripe('');
const Payment = () => {
    return (
        <div>
            <SectionTitle heading='payment' subHeading='Please Pay Bill'></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;
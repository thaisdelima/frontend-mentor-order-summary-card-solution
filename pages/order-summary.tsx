import type { NextPage } from 'next';
import Image from 'next/image';

import Button from '../components/Button';
import ButtonSecondary from '../components/ButtonSecondary';
import SelectCard from '../components/SelectCard';

const OrderSummary: NextPage = () => {

  return (
    <div className="flex flex-wrap content-center h-screen w-565">
      <div className="container 	mx-auto bg-white max-w-xs	rounded-3xl shadow-xl min-h-565">
        <Image
          className="rounded-t-3xl"
          src="/images/illustration-hero.svg"
          alt="illustration"
          width={450}
          height={220}
        />
        <div className="p-6">
          <h1 className="text-center text-xl	mb-8 text-blue-dark font-base font-black">
            Order Summary
          </h1>
          <p className="text-center  text-base text-blue-desaturated font-base px-2">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <SelectCard />
          <Button name="Proceed to Payment" />
          <ButtonSecondary name="Cancel Order" />
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;

import type { NextPage } from 'next';
import Image from 'next/image';

import styled from 'styled-components';
import Button from '../components/Button';
import ButtonSecondary from '../components/ButtonSecondary';
import SelectCard from '../components/SelectCard';

const OrderSummary: NextPage = () => {


  return (
    <div className="flex flex-wrap content-center h-screen">
      <div className="container h-4/5	mx-auto bg-white max-w-xs	rounded-3xl	 min-h-570">
        <Image
          className="rounded-t-3xl"
          src="/images/illustration-hero.svg"
          alt="illustration"
          width={450}
          height={220}
        />
        <h1 className="bold">Order Summary </h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!{' '}
        </p>
        <SelectCard />
        <Button name="Proceed to Payment" />
        <ButtonSecondary name="Cancel Order" />
      </div>
    </div>
  );
};
export default OrderSummary;

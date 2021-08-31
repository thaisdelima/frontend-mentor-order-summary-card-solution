import type { NextPage } from 'next';

import Image from 'next/image';
import Link from 'next/link';

const SelectCard: NextPage = () => {

  return (
    <div className="my-8 flex flex-wrap justify-center content-center">
      <div className="container flex items-center justify-between p-4 max-w-xs min-h-570 bg-blue-veryPale rounded-md">
        <Image
          className=""
          src="/images/icon-music.svg"
          alt="illustration"
          width={48}
          height={48}
        />
        <div className="flex-grow px-3">
          <div className="font-base font-bold text-sm">Annual Plan</div>
          <span className="font-base text-blue-desaturated text-xs">
            $59.99/year
          </span>
        </div>
        <Link href="">
          <a className="justify-self-end text-xs text-right font-bold underline text-blue-bright  active:text-opacity-75 active:no-underline">
            Change
          </a>
        </Link>
      </div>
    </div>
  );
};
export default SelectCard;

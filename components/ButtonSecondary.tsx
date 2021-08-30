import type { NextPage } from 'next';

interface Props {
  name: string;
}


const ButtonSecondary: NextPage<Props> = (props) => {

  return (
    <div className="flex justify-center content-center ">
      <button className="container p-3 mx-10 max-w-xs	rounded-md min-h-570">
        <div className="text-blue-desaturated text-center text-xs font-bold active:text-blue-dark">
          {props.name}
        </div>
      </button>
    </div>
  );
};
export default ButtonSecondary;

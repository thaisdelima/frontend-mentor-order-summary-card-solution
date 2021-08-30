import type { NextPage } from 'next';
interface Props {
  name: string;
}


const Button: NextPage<Props> = (props) => {
  return (
    <div className="flex justify-center content-center">
      <button className=" flex justify-center content-center container px-4 bg-blue-bright max-w-xs shadow-lg	rounded-xl min-h-570  active:bg-opacity-75	">
        <div className="p-3 text-white text-xs	text-center font-bold">
          {props.name}
        </div>
      </button>
    </div>
  );
};
export default Button;

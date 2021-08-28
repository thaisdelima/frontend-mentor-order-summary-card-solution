import type { NextPage } from 'next';
import styled from 'styled-components';

interface Props {
  name: string;
}


const Button: NextPage<Props> = (props) => {
  const Container = styled.div``;

  return (
    <div className="flex justify-center content-center ">
      <div className="container px-4 bg-blue-bright max-w-xs	rounded-md min-h-570	">
        <div className="text-white text-center">{props.name}</div>
      </div>
    </div>
  );
};
export default Button;

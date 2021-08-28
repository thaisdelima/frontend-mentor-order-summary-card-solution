import type { NextPage } from 'next';
import styled from 'styled-components';

interface Props {
  name: string;
}


const ButtonSecondary: NextPage<Props> = (props) => {
  const Container = styled.div``;

  return (
    <div className="flex justify-center content-center ">
      <div className="container px-4 mx-10 max-w-xs	rounded-md min-h-570	">
        <div className="text-blue-desaturated text-center">{props.name}</div>
      </div>
    </div>
  );
};
export default ButtonSecondary;

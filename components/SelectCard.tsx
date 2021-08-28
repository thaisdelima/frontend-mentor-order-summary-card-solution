import type { NextPage } from 'next';
import styled from 'styled-components';

const SelectCard: NextPage = () => {
  const Container = styled.div``;

  return (
    <div className="flex justify-center content-center ">
      <div className="container px-4 bg-blue-verypale max-w-xs	rounded-md min-h-570	">
        Annual Plan $59.99/year <a className="justify-right">Change</a>
      </div>
    </div>
  );
};
export default SelectCard;

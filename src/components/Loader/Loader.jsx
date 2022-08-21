import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="4"
      width="100"
      animationDuration="1.2"
    />
  );
};

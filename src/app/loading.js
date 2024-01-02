import { FaLink } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FaLink className="text-5xl animate-spin" />
    </div>
  );
};

export default Loading;

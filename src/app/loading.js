import { FaLink } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FaLink className="text-5xl animate-spin" />
    </div>
  );
};


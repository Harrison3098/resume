import { JSX } from 'react';

const Badge = ({ icon, text }: { icon: JSX.Element; text: string }) => {
  return (
    <div className="size-fit py-1 px-2 bg-[#272B38] rounded-l-full rounded-r-full text-white flex space-x-2 justify-center items-center cursor-pointer hover:bg-[#292D3A]">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Badge;

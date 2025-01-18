import { Download } from 'lucide-react';

const DownloadResume = () => {
  return (
    <div className="w-[209.44px] h-10 bg-[#272B38] rounded-md text-white flex gap-4 justify-center items-center cursor-pointer hover:bg-[#292D3A]">
      <Download className="size-6" /> 下载简历
    </div>
  );
};

export default DownloadResume;

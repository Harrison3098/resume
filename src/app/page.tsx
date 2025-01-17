import DownloadResume from '@/components/DownloadResume';
import HeroImage from '@/components/HeroImage';
import HeroTexts from '@/components/HeroTexts';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <>
      <div className="h-full w-auto flex items-start flex-col space-x-4 space-y-4 justify-center">
        <HeroTexts />
        <SocialLinks />
        <DownloadResume />
      </div>

      <div className="h-full w-[47%] flex items-center relative max-lg:hidden">
        <HeroImage />
      </div>
    </>
  );
}

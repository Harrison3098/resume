import TextRotator from './TextRotator';

const HeroTexts = ({ name }: { name: string }) => {
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">我的名字是</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
        {name} .
      </h1>
      <TextRotator />
    </>
  );
};
export default HeroTexts;

import { cn } from '@/lib/utils';

type Column = {
  beginDate: string;
  endDate: string;
  major: string;
  school: string;
  desc: string;
  direction?: 'left' | 'right';
};

const DateLine = ({
  beginDate,
  school,
  endDate,
  major,
  desc,
  direction,
}: Column) => {
  const isRightDirect = direction === 'right';

  return (
    <div
      className={cn('grid w-full')}
      style={{
        gridTemplateColumns: '1fr 10px 3fr',
        ...(isRightDirect && { direction: 'rtl' }),
      }}
    >
      <p className="size-full flex justify-center items-center p-4 font-rubik text-lg max-sm:text-base ">
        {beginDate} - {endDate}
      </p>
      <div className="relative after:content-[''] after:block after:w-1 after:h-full after:bg-[#353535] flex justify-center items-center">
        <i
          className="bg-[#2f7df4] absolute block size-2.5 rounded-full"
          style={{
            outline: '3px solid var(--primary)',
            boxShadow: '0 2px 5px 2px #2f7df4',
          }}
        />
      </div>
      <div className="p-4">
        <p className="text-2xl font-rubik max-sm:text-xl">
          {school}
          <br />
          {major}
        </p>
        <p className="font-poppins text-base w-full text-primary  max-sm:text-xs">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default DateLine;

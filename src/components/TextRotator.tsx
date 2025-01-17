import React from 'react';

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        我是一名 &nbsp;
        <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide">
            <li className="text-[#2f7df4]">细致</li>
            <li className="text-[#2f7df4]">学习能力强</li>
            <li className="text-[#2f7df4]">有创造性</li>
            <li className="text-[#2f7df4]">执行力强</li>
            <li className="text-[#2f7df4]">有责任心</li>
            <li className="text-[#2f7df4]">热衷前沿技术</li>
          </ul>
        </span>
        <br />
        的前端开发工程师
      </div>
    </div>
  );
}

export default TextRotator;

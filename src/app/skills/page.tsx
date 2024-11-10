import React from 'react';
import Image from 'next/image';

function Skills() {
  const cardItems = [
    { id: 1, name: 'HTML', img: "/images/Html.png" },
    { id: 2, name: 'CSS', img: "/images/css.png" },
    { id: 3, name: 'TypeScript', img: "/images/typescript.png" },
    { id: 4, name: 'Next.js', img: "/images/Next.png" },
    { id: 5, name: 'React.js', img: "/images/reactjs.png" },
    { id: 6, name: 'JavaScript', img: "/images/javascript.png" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">My Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
          {cardItems.map(({ id, img, name }) => (
            <div
              className="flex flex-col items-center justify-center  md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <Image src={img} width={150} height={150} alt={name} />
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

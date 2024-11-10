import Image from 'next/image';

function Projects() {
  const cardItems = [
    { id: 1, title: "Portfolio website", desc: "Portfolio website using Next.js and Tailwind CSS", img: "/images/project1.png", tags: ["Next.JS", "Tailwind CSS"] },
    { id: 2, title: "Ecommerce website", desc: "Ecommerce website using Next.js, React, and Tailwind CSS", img: "/images/project2.png", tags: ["Next.JS", "Tailwind CSS"] },
    { id: 3, title: "Static Resume", desc: "Static Resume using HTML and CSS", img: "/images/project3.png", tags: ["HTML", "CSS"] },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
          {cardItems.map(({ id, title, desc, img, tags }) => (
            <div key={id} className="md:w-[340px] md:h-[410px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 flex flex-col justify-between">
              
              {/* Image Container */}
              <div className="h-[60%] flex items-center justify-center overflow-hidden rounded-t-lg">
                <Image src={img} width={300} height={250} alt={title} className="object-cover h-full w-full" />
              </div>
              
              {/* Content */}
              <div className="px-2 py-2 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-1">{title}</div>
                  <p className="text-gray-600 mb-2">{desc}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 mt-4">
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Preview</button>
                  <button className="px-4 py-2 bg-pink-500 hover:bg-pink-700 text-white font-bold rounded">Source Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

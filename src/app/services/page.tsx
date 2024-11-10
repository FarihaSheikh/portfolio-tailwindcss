import { HiCodeBracketSquare } from "react-icons/hi2";
import { MdDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
function Services () {
    return (
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-10 mb-10">
        <h1 className="text-3xl font-bold mb-5 text-center">My Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] items-center mx-auto gap-12">
          <div className="bg-rose-300 hover:scale-110 transform transition-all duration:300 hover:rotate-6
          uppercase font font-semibold text-center p-10">
        <HiCodeBracketSquare className="w-[96px] h-[96px] mx-auto text-white"/>
        <h1 className="text-[20px] md:text-[30px] mt-3 mb-3 text-white">Frontend Development</h1>
        
          </div>

          <div className="bg-rose-300 hover:scale-110 transform transition-all duration:300 hover:rotate-6
          uppercase font font-semibold text-center p-10">
        <MdDesignServices className="w-[96px] h-[96px] mx-auto text-white"/>
        <h1 className="text-[20px] md:text-[30px] mt-3 mb-3 text-white">Graphic Designing</h1>
        
          </div>
         
          <div className="bg-rose-300 hover:scale-110 transform transition-all duration:300 hover:rotate-6
          uppercase font font-semibold text-center p-10">
        <CgWebsite className="w-[96px] h-[96px] mx-auto text-white"/>
        <h1 className="text-[20px] md:text-[30px] mt-3 mb-3 text-white">Web Developer</h1>
        
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  
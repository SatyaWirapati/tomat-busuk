// src/components/Hero.jsx
import ArticleList from "./ArticleList";
import Slideshow from "./Slideshow";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-6  p-4 md:p-8 bg-gray-100">
      
      {/* SLIDESHOW */}
      <div className="md:w-2/3 order-1 mb-6 md:mb-0">
        <Slideshow />
      </div>

      {/* KOLOM ARTIKEL */}
      <div className="md:w-1/3 order-2 bg-white rounded-lg shadow-md flex flex-col h-[400px]">
        <ArticleList />
      </div>
    </div>
  );
};

export default Hero;

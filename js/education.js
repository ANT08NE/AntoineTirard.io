import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const educationData = [
    {
      title: "Master Data Science et Modélisation Statistique",
      school: "Université Bretagne Sud",
      period: "2022 - 2024",
      location: "Vannes",
      logo: "assets/UBS.png"
    },
    {
      title: "Licence Mathématique, parcours Statistique",
      school: "Université Bretagne Sud",
      period: "2021 - 2022",
      location: "Vannes",
      logo: "assets/UBS.png"
    },
    {
      title: "DUT Statistique et Informatique Décisionnelle",
      school: "IUT Grand Ouest Normandie",
      period: "2019 - 2021",
      location: "Lisieux",
      logo: "assets/IUT.png"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % educationData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + educationData.length) % educationData.length);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Mon Parcours de Formation</h2>
          </div>
        </div>

        <div ref={sectionRef} className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 px-4 transition-all duration-500
                    ${Math.abs(activeIndex - index) <= 1 ? 'opacity-100' : 'opacity-0'}
                    ${isVisible ? 'translate-y-0' : 'translate-y-16'}`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 flex items-center justify-center bg-gray-50 rounded-lg p-2">
                        <img
                          src={item.logo}
                          alt={item.school}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 font-medium mb-1">{item.school}</p>
                        <p className="text-gray-600">
                          {item.period} | {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${activeIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
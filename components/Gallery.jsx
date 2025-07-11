import React from "react";

const Gallery = () => {
  const medias = [
    "../images/gallery-1.jpg",
    "../images/gallery-2.jpg",
    "../images/gallery-3.jpg",
    "../images/gallery-4.jpg",
    "../images/gallery-5.jpg",
    "../images/gallery-6.jpg",
  ];

  return (
    <section className="gallery bg-white">
      <h2 className="title">Gallery</h2>

      {/* <div className="media grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"> */}
      <div className="media flex flex-wrap gap-5">
        {medias.map((media, index) => (
          <div
            key={index}
            className="group overflow-hidden sm:w-[calc(100%/2-20px)] lg:w-[calc(100%/3-20px)]"
          >
            {/*important pour ne pas zommer l'image mais plutôt son contenu*/}
            <img
              src={media}
              alt={`gallery ${index}`}
              className="w-[100%] h-[100%] rounded-xl object-cover cursor-zoom-in duration-300 transition-transform group-hover:scale-125"
            />
            {/* div:hover img {transform: scale(1.2);} ===  group-hover:scale-125 avec group un classname de div concerné*/}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

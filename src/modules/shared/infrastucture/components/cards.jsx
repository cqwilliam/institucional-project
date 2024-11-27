import React from "react";

const Cards = () => {
  const cardData = [
    {
      name: "INICIAL",
      description: "15 estudiantes por salón",
      img: "https://images.unsplash.com/photo-1622219809260-ce065fc5277f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMwNjYxOQ&ixlib=rb-1.2.1&q=85",
    },
    {
      name: "PRIMARIA",
      description: "15 estudiantes por salón",
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTMwNQ&ixlib=rb-1.2.1&q=85",
    },
    {
      name: "SECUNDARIA",
      description: "15 estudiantes por salón",
      img: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTQzNA&ixlib=rb-1.2.1&q=85",
    },
    {
      name: "ACADEMIA",
      description: "15 estudiantes por salón",
      img: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNjA1MA&ixlib=rb-1.2.1&q=85",
    },
  ];

  return (
    <div className="bg-stone-200 pt-10">
      <h1 className="text-center text-3xl font-bold">NIVELES</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 ">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white p-6 shadow-md flex flex-col">
            <img
              className="w-full h-24 sm:h-60 object-cover mb-4"
              src={card.img}
              alt={card.name}
            />
            <h3 className="text-xl font-bold border-l-4 border-amber-300 pl-3 mb-2">
              {card.name}
            </h3>
            <p className="text-gray-600 text-base font-light leading-relaxed mb-4">
              {card.description}
            </p>
            <a
              href="#"
              className="mt-auto p-3 text-center text-black bg-transparent border border-black shadow-inner transition-colors duration-300 hover:bg-amber-300 hover:text-white font-bold text-sm sm:text-base"
            >
              {card.name.split(" ")[0]}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

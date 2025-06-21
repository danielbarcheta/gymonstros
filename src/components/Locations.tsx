import React from "react";

const Locations = () => {
  return (
    <div className="bg-secondary grid grid-cols-1 sm:grid-cols-2">
      <div className="flex">
        <div>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9389422221646!2d-46.65392602466998!3d-23.569009778800956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c93f0dfdfb%3A0xd5fd218c8a94aa88!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1719019913673!5m2!1spt-BR!2sbr"
  className="w-screen sm:w-[50vw] h-[50vh] brightness-50"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </div>
      </div>
      <div className="relative flex flex-col p-[6vw]">
        <h1 className="font-poppins text-2xl md:text-6xl font-bold">
          Localizações
        </h1>
        <h2 className="font-poppins text-sm md:text-lg">
          Unidade principal na queridíssima Av Paulista
        </h2>

        <div className="mt-3 md:mt-10 max-w-sm flex flex-col ">
          <input
            placeholder="Digite teu cep mardito"
            className="pl-6 p-3 rounded-full border-none border-2 bg-primary text-white font-poppins font-bold hover:transition duration-300 hover:bg-white hover:text-primary focus:outline-none focus:ring focus:ring-white focus:bg-white focus:text-primary"
          ></input>
          <button className="bg-primary text-white font-poppins font-bold p-3 rounded-full mt-3 border-2 border-white">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Locations;

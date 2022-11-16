/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Carousel } from "flowbite-react";

export const Banner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[450px] px-4 w-full">
      <Carousel className="rounded-none" indicators={false}>
        <img
          src="https://img.freepik.com/vector-gratis/banner-mega-venta-su-tienda-linea-estilo-realista-telefono-mapa-carrito-bolso-regalo-ilustracion-vectorial_548887-132.jpg?w=1380&t=st=1668637080~exp=1668637680~hmac=8ec77f121c72687f2679e0962cf767ed0df7aa6e3a98ea7eb62bd5baf5380a30"
          alt="..."
          className="w-max h-full"
        />
        <img
          src="https://img.freepik.com/vector-gratis/banner-plantilla-tienda-online-carrito-compras-compras-cajas-entrega-supermercado-ilustracion-vectorial_548887-104.jpg?w=1380&t=st=1668637252~exp=1668637852~hmac=5342dd8439ac0239dd72f2721c6c6b676e4ef573e40bfe0d97b342804e0fdd70"
          alt="..."
          className="w-max h-full"
        />
        <img
          src="https://img.freepik.com/vector-gratis/banner-resort-ensueno-estilo-realista-dos-sillas-playa-sombrilla-ilustracion-vectorial_548887-222.jpg?w=1380&t=st=1668637388~exp=1668637988~hmac=325f0384a27cd7d8c56b5daa29a2eab25c7660944b27b35fdf30abf51dee6a15"
          alt="..."
          className="w-max h-full"
        />
        <img
          src="https://img.freepik.com/vector-gratis/clientes-telefonos-comprando-linea_74855-4781.jpg?w=1380&t=st=1668637429~exp=1668638029~hmac=f5e7f810239002d853b25c6c2308738b4493a2acc618b4cf3717e7b2d1f1b25b"
          alt="..."
          className="w-max h-full"
        />
      </Carousel>
    </div>
  );
};

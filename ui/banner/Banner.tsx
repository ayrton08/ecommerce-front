import React from 'react';

import { Carousel } from 'flowbite-react';
import { Container } from './styled';
import Image from 'next/image';

export const Banner = () => {
  return (
    <Container>
      {/* <Carousel className="rounded-none" indicators={false}> */}
        <Image
          alt="Banner Promocion"
          src="/wallpaper.png"
          className="w-full h-full object-cover"
          height={2000}
          width={2000}
        />
        {/* <Image
          alt="Banner Promocion"
          src="https://img.freepik.com/vector-gratis/banner-plantilla-tienda-online-carrito-compras-compras-cajas-entrega-supermercado-ilustracion-vectorial_548887-104.jpg?w=1380&t=st=1668637252~exp=1668637852~hmac=5342dd8439ac0239dd72f2721c6c6b676e4ef573e40bfe0d97b342804e0fdd70"
          className="w-max h-full"
          height={1000}
          width={1000}
        />
        <Image
          alt="Banner Promocion"
          src="https://img.freepik.com/vector-gratis/banner-resort-ensueno-estilo-realista-dos-sillas-playa-sombrilla-ilustracion-vectorial_548887-222.jpg?w=1380&t=st=1668637388~exp=1668637988~hmac=325f0384a27cd7d8c56b5daa29a2eab25c7660944b27b35fdf30abf51dee6a15"
          className="w-max h-full"
          height={1000}
          width={1000}
        />
        <Image
          alt="Banner Promocion"
          src="https://img.freepik.com/vector-gratis/clientes-telefonos-comprando-linea_74855-4781.jpg?w=1380&t=st=1668637429~exp=1668638029~hmac=f5e7f810239002d853b25c6c2308738b4493a2acc618b4cf3717e7b2d1f1b25b"
          className="w-max h-full"
          height={1000}
          width={1000}
        /> */}
      {/* </Carousel> */}
    </Container>
  );
};

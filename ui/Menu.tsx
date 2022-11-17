import React from "react";

import { Button } from "flowbite-react";

export const Menu = () => {
  return (
    <Button.Group className="w-1/3">
      <Button color="gray" className="w-full">
        {" "}
        <a href="#categories">Categories</a>
      </Button>
      <Button color="gray" className="w-full">
        {" "}
        <a href="#featured">Featured</a>
      </Button>
      <Button color="gray" className="w-full">
        {" "}
        Favorites
      </Button>
    </Button.Group>
  );
};

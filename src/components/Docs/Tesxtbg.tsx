import React, { useEffect } from "react";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import laptop from "../../public/laptop.png";

const layers = [
  //   {
  //     name: "text",
  //     image: textImage,
  //     dataDepth: "0.1",
  //   },
  {
    name: "astronaut",
    image: laptop,
    dataDepth: "2",
  },
  //   {
  //     name: "planet1",
  //     image: planet1Image,
  //     dataDepth: "1",
  //   },
  //   {
  //     name: "planet2",
  //     image: planet2Image,
  //     dataDepth: "-1",
  //   },
  //   {
  //     name: "rocket",
  //     image: rocketImage,
  //     dataDepth: "0.5",
  //   },
];

const ParallaxImagesContainer = ({ layers }: any) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  return (
    <div className="flex w-auto h-auto justify-center">
      <div id="scene">
        {layers.map(
          (
            l: {
              dataDepth: any;
              image: string | undefined;
              name: string | undefined;
            },
            index: React.Key | null | undefined
          ) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="h-[400px] overflow-visible"
              key={index}
              data-depth={l.dataDepth}
              src={l.image.src}
              alt={l.name}
            />
          )
        )}
      </div>
    </div>
  );
};

ParallaxImagesContainer.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string,
    })
  ),
};

ParallaxImagesContainer.defaultProps = {
  layers: layers,
};

export default ParallaxImagesContainer;

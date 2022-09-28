import React from "react";

function Tesxtbg() {
  return <div>Tesxtbg</div>;
}

export default Tesxtbg;

// import React, { useEffect } from "react";
// import Parallax from "parallax-js";
// import PropTypes from "prop-types";

// import laptop from "../../public/World.png";
// import Google from "../../public/google.png";
// import GitHub from "../../public/githubstar.png";

// const layers = [
//   {
//     name: "text",
//     image: laptop,
//     dataDepth: "0.1",
//   },
//   {
//     name: "astronaut",
//     image: laptop,
//     dataDepth: "2",
//   },
//   {
//     name: "planet1",
//     image: laptop,
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
// ];

// const ParallaxImagesContainer = ({ layers }: any) => {
//   useEffect(() => {
//     const scene = document.getElementById("scene");
//     new Parallax(scene);
//   });

//   return (
//     <div className="flex w-auto h-[400px] justify-center">
//       <div id="scene">
//         {layers.map(
//           (
//             l: {
//               dataDepth: any;
//               image: string | undefined;
//               name: string | undefined;
//             },
//             index: React.Key | null | undefined
//           ) => (
//             // eslint-disable-next-line @next/next/no-img-element
//             <img
//               className="h-[250px] lg:h-[350px] overflow-visible animate rotate-xl animate animation-delay-4000"
//               key={index}
//               data-depth={l.dataDepth}
//               src={l.image.src}
//               alt={l.name}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// ParallaxImagesContainer.propTypes = {
//   backgroundImage: PropTypes.string,
//   layers: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       image: PropTypes.string,
//       dataDepth: PropTypes.string,
//     })
//   ),
// };

// ParallaxImagesContainer.defaultProps = {
//   layers: layers,
// };

// export default ParallaxImagesContainer;

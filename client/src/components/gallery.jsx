import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://i.imgur.com/Vkysgnf.jpg",
  "https://i.imgur.com/Poo3AKV.jpg",
  "https://i.imgur.com/M2NQM7e.jpg",
  "https://i.imgur.com/kDOhaYQ.jpg",
  "https://i.imgur.com/x7sD2Ra.jpg",
  "https://i.imgur.com/iBHFxIB.jpg",
  "https://i.imgur.com/L4Yc3q5.jpg",
  "https://i.imgur.com/3Wvwq0P.jpg",
  "https://i.imgur.com/1ZILcrV.jpg",
  "https://i.imgur.com/idiXMCB.jpg",
  "https://i.imgur.com/k5miIjn.jpg",
  "https://i.imgur.com/O9xMRIJ.jpg",
];
// The number of columns change by resizing the window
class Gallery extends React.Component {
  render() {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
              alt="Stacios"
              className="hover:scale-110 hover:opacity-80 duration-700"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}

export default Gallery;

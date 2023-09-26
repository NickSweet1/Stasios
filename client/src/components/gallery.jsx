import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryImages } from "../constants";

// The number of columns change by resizing the window
class Gallery extends React.Component {
  render() {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {galleryImages.map((image, i) => (
            <img
              key={i}
              src={image.image}
              style={{ width: "100%", display: "block" }}
              alt={image.title}
              className="hover:scale-110 hover:opacity-80 duration-700"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}

export default Gallery;

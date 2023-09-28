import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryImages } from "../constants";
import back from '../assets/EB4BABF8-A253-4D51-9F0A-71C47D6DA50C.jpeg'
//fix imge willim PLAS
// The number of columns change by resizing the window
class Gallery extends React.Component {
  render() {
    return (
      <div name="gallery">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {galleryImages.map((image, i) => (
              <img
                key={i}
                src={image.image}
                style={{ width: "100%", display: "block" }}
                alt={image.title}
                className=" hover:opacity-70 duration-700"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <div className="z-10">
          <img src={back}
        alt="just a background"
        className="w-full h-[100px] mt-[-160px] object-cover"></img>
        </div>
        
      </div>
    );
  }
}

export default Gallery;

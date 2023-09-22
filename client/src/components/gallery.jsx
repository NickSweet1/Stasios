import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://drive.google.com/file/d/1VbIYyxJBU8i3GAULDzqGscaPgWybdWgm/view?usp=drive_link",
  "https://drive.google.com/file/d/1IPdAivr4JGe8M3IpAmTG2W6crCeAxzw3/view?usp=drive_link",
  "https://drive.google.com/file/d/1vwPbmfz56Vp5hHkh2SyySp5ccaAMcHoa/view?usp=drive_link",
  "https://drive.google.com/file/d/1bBL-wdNuck1Ln3vPdIX1kpyRhD2IMHUu/view?usp=drive_link",
  "https://drive.google.com/file/d/1tfaL5aISZt0x4Xvt6Q_LcCjq56X03mvX/view?usp=drive_link",
  "https://drive.google.com/file/d/1lKWJf-r4KMoAqBIwPPzj_tpFCubKmYig/view?usp=drive_link",
  "https://drive.google.com/file/d/1E79asYeRX1anYk9UxitjLLxmw_nbw134/view?usp=drive_link",
  "https://drive.google.com/file/d/1LvJik1uiYMjSo8Q4RcOArEOPpW-vb0hh/view?usp=drive_link",
  "https://drive.google.com/file/d/1wVpOLkLC3HwrsO0pe3yoWXY10Aqbe5QO/view?usp=drive_link",
  "https://drive.google.com/file/d/1qQusTp3qb715eUJDJdWBgvJZHO1B_Ke3/view?usp=drive_link",
  "https://drive.google.com/file/d/1e1B6a17kvlRo1rwfoxFbws5dfgOQIluA/view?usp=drive_link",
  "https://drive.google.com/file/d/1IaDz8po8NE1WI3lZOpLecbZc_daxYrZ6/view?usp=drive_link",
  "https://drive.google.com/file/d/1pR2ouUgjs_eUTzZGgcE17GPQe0dH4sSh/view?usp=drive_link",
  "https://drive.google.com/file/d/1D7D9BsIPf8c0jXXRSzey8tIPzXxk26Z4/view?usp=drive_link",
  "https://drive.google.com/file/d/1mSBHtm93_n8LDU2sN4vVGF2qdKADIXjk/view?usp=drive_link",
];
// The number of columns change by resizing the window
class MyWrapper extends React.Component {
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
              className="hover:scale-110 hover:opacity-80"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}

export default MyWrapper;

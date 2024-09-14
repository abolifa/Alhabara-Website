import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    src: "1.jpg",
  },
  {
    src: "2.jpg",
  },
  {
    src: "3.webp",
  },
];

const ImageCarousel = () => {
  return (
    <Carousel
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      dynamicHeight
      autoPlay
      infiniteLoop
      interval={5000}
    >
      {images.map((image) => (
        <div key={image.src}>
          <img
            src={image.src}
            className="w-full h-[500px] max-h-[500px] object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

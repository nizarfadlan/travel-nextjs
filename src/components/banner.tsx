import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const Banner = () => {
  const dataReview = [
    {
      image_url:
        "/images/gwk.webp",
    },
    {
      image_url:
        "/images/bedugul.webp",
    },
    {
      image_url:
        "/images/nusa-penida.jpg",
    },
    {
      image_url: "/images/tanah-lot.webp",
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-12 lg:mt-0">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {dataReview.map((item, key) => (
          <div className="mx-2" key={key}>
            <img src={item.image_url} className="aspect-video object-cover rounded-xl" alt={`image-${key}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

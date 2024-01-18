import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const PeopleReview = () => {
  const dataReview = [
    {
      image_url: "/images/people1.png",
      name: "Allison",
    },
    {
      image_url: "/images/people2.png",
      name: "Kattie",
    },
    {
      image_url: "/images/people3.png",
      name: "Letty",
    },
    {
      image_url: "/images/people3.png",
      name: "Letty",
    },
    {
      image_url: "/images/people3.png",
      name: "Letty",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="mt-12">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        arrows={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2400}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="pr-8"
      >
        {dataReview.map((item, key) => (
          <div className="bg-white border p-10 rounded-lg" key={key}>
            <p className="leading-relaxed italic">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.”
            </p>
            <div className="mt-10">
              <div className="flex items-center">
                <img
                  src={item.image_url}
                  alt=""
                  className="h-10 w-10 object-cover"
                />
                <h4 className="ml-5">{item.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

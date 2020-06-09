import Swiper from "swiper";
import "swiper/css/swiper.min.css";

const mvSwiper = () => {
  setTimeout(() => {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "fade",
      speed: 1500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }, 5000);
};
export default mvSwiper;

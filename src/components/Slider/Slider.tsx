import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Slide from "../Slide/Slide";
import "swiper/css";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

const Slider: FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      speed={3000}
    >
      <SwiperSlide>
        <Slide
          typeOfCar="Sport Sedan"
          carName="BMW M5 Competition"
          description="BMW's latest driving systems are the brains behind the brawn of the 2023 BMW M5 Sedan. Intelligent technology improves your experience on the track and on the road."
          price={799}
          src="res/bmwM5.png"
          width={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          typeOfCar="Sport Car"
          carName="Ford GT"
          description="This is what true innovation looks like. From its 3.5L EcoBoost® technology to its ultra-efficient aerodynamics, the Ford GT is the culmination of everything great we do at Ford. And it’s the same passion for innovation that can be seen throughout our entire vehicle lineup."
          price={799}
          src="res/fortGT.png"
          width={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          typeOfCar="Supercar"
          carName="Lamborghini Huracan"
          description="What is a Lamborghini Huracán?
          The Lamborghini Huracán is a sports car built by Lamborghini. It replaced the Lamborghini Gallardo."
          price={999}
          src="res/lambo.png"
          width={800}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

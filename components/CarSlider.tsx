'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { CarProps } from "@types";
import 'swiper/css/navigation';

import CarCard from './CarCard'; // Adjust path

type Props = {
  cars: CarProps[];
};

const CarSlider = ({ cars }: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      navigation
      slidesPerView={3}
      breakpoints={{
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      }}
    >
      {cars.map((car, index) => (
        <SwiperSlide key={index}>
          <CarCard car={car} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarSlider;

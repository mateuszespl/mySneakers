import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import { StyledCarousel } from "./Carousel.styled";
import {
  ColletionSlide,
  JournalSlide,
  NewinSlide,
  PromoSlide,
  StoresSlide,
} from "./Slides";

SwiperCore.use([Mousewheel]);

interface CarouselInterface {
  updateCarousel: (currentSlide: number) => void;
}

export const Carousel: React.FC<CarouselInterface> = ({ updateCarousel }) => {
  return (
    <StyledCarousel>
      <Swiper
        mousewheel
        direction={"vertical"}
        slidesPerView={1}
        onSlideChange={({ realIndex }) => updateCarousel(realIndex + 1)}
      >
        <SwiperSlide>
          <ColletionSlide />
        </SwiperSlide>
        <SwiperSlide>
          <NewinSlide />
        </SwiperSlide>
        <SwiperSlide>
          <PromoSlide />
        </SwiperSlide>
        <SwiperSlide>
          <StoresSlide />
        </SwiperSlide>
        <SwiperSlide>
          <JournalSlide />
        </SwiperSlide>
      </Swiper>
    </StyledCarousel>
  );
};

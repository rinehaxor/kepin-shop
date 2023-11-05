'use client';
import React from 'react';

import Navbar from '@/components/Navbar';
import Hero from '../../public/assets/img/download.jpeg';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import TypingEffect from '@/components/TypingEffect ';
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function page() {
   return (
      <div className="w-full h-screen bg-gradient-to-l from-blue-300 via-blue-100 to-purple-200">
         <div className="px-10">
            <Navbar />
            <section className="">
               <div className="flex flex-row my-24 gap-20">
                  <div className="w-1/2 my-12">
                     <h1 className="text-5xl font-mono font-bold text-right">KEPINSHOP</h1>
                     <h3 className="text-3xl font-mono text-right">
                        <p className="text-blue-600"> 🚀Tingkatkan Permainan</p> <TypingEffect text=" Anda ke Level Selanjutnya!🎮" />{' '}
                     </h3>
                  </div>
                  <div className="w-1/2 mx-2">
                     <div className="max-w-md">
                        <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                           <SwiperSlide className="p-3 bg-[#a42017]">
                              {' '}
                              <Image src={Hero} alt="" />
                           </SwiperSlide>
                           <SwiperSlide className="p-3 bg-[#feaa12]">
                              {' '}
                              <Image src={Hero} alt="" />
                           </SwiperSlide>
                           <SwiperSlide className="p-3 bg-[#a42017]">
                              {' '}
                              <Image src={Hero} alt="" />
                           </SwiperSlide>
                           <SwiperSlide className="p-3 bg-[#feaa12]">
                              <Image src={Hero} alt="" />
                           </SwiperSlide>
                        </Swiper>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}

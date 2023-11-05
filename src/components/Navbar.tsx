import Image from 'next/image';
import React from 'react';
import Logo from '../../public/assets/img/logo.png';
import { BiCart } from 'react-icons/bi';
export default function Navbar() {
   return (
      <div className="w-full flex flex-row justify-between h-[15vh]">
         <div
            className="
        "
         >
            <Image src={Logo} alt="logo" width={100} height={100} />
         </div>
         <div className="my-auto flex flex-row gap-3 font-mono text-xl  font-bold">
            <p className="hover:text-blue-600">
               {' '}
               <a href="/login">FAQs</a>
            </p>
            <p className="mx-2 hover:text-blue-600">
               {' '}
               <a href="/register">Contact Information</a>
            </p>
            <p className="hover:text-blue-600">
               {' '}
               <a href="/login">
                  <BiCart />
               </a>
            </p>
         </div>
      </div>
   );
}

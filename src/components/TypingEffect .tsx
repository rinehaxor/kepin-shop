import { motion } from 'framer-motion';
import { useState } from 'react';

const TypingEffect = ({ text }: any) => {
   const [displayedText, setDisplayedText] = useState('');

   // Fungsi untuk menambahkan karakter satu per satu
   const typeOneChar = (currentText: any, fullText: any) => {
      if (currentText.length < fullText.length) {
         setTimeout(() => {
            setDisplayedText(fullText.substring(0, currentText.length + 1));
         }, 10);
      }
   };

   return (
      <motion.div key={displayedText} initial={{ opacity: 0 }} animate={{ opacity: 2 }} transition={{ duration: 0.1 }} onAnimationComplete={() => typeOneChar(displayedText, text)}>
         {displayedText}
      </motion.div>
   );
};

export default TypingEffect;

import React from 'react';
import {motion} from 'framer-motion';

const brands = [
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65965313684de0460d145b93_NGS.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6596531377060201ad1597bc_Grey.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6596531347506f9952f061bc_Coca-Cola.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65965313d2fecaaf25fbb427_Bisdesk.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6596531526b54761f5d4b6c1_Sana%20Health%20Group.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6596531382dbc06ddb4a7e3e_Believe%20you%20me.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65bcb414c6437dcda5d5e583_Core%20Plus.png",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65965313636c09e263edd140_Link%20Me%20Digital%20Health.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65965313684de0460d145b93_NGS.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6596531377060201ad1597bc_Grey.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6596531347506f9952f061bc_Coca-Cola.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65965313d2fecaaf25fbb427_Bisdesk.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6596531526b54761f5d4b6c1_Sana%20Health%20Group.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/6596531382dbc06ddb4a7e3e_Believe%20you%20me.webp",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65bcb414c6437dcda5d5e583_Core%20Plus.png",
  "https://cdn.prod.website-files.com/65339a5954614fc8abbf5c9a/65965313636c09e263edd140_Link%20Me%20Digital%20Health.webp",
];

const MarqueeSection = () => {
  return (
    <div className="border-t-2 border-b-2 border-vivid-yellow bg-white py-8 overflow-hidden">
      <motion.div
        className="flex items-center space-x-10 w-[200%]"
        animate={{x: ["0%", "-50%"]}}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {brands.concat(brands).map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`Brand Logo ${index}`}
            className="h-16 w-auto"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSection;

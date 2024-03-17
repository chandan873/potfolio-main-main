import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../Wrapper';



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};




const Header = () => (
  <div className="app__header app__flex">
  <h1 className='head-text' >Why Choose <span>INVENTIVE NEXUS</span></h1>
  </div>
);

export default AppWrap(Header, 'why us') 

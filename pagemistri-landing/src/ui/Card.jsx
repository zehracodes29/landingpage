import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', index = 0, ...props }) => {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 whileHover={{ scale: 1.03, y: -5 }}
 className={`bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-[0_4px_20px_-5px_rgba(68,0,175,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(68,0,175,0.15)] border border-slate-100 p-6 transition-all duration-300 ${className}`}
 {...props}
 >
 {children}
 </motion.div>
 );
};

export default Card;

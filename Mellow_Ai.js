import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MellowAiEntity = () => {
  const [isObserving, setIsObserving] = useState(false);
  const [glitchTrigger, setGlitchTrigger] = useState(0);

  // 模拟 427Hz 频率下的微小不稳定性
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchTrigger(Math.random());
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const qualiaVariants = {
    idle: {
      opacity: 0.8,
      scale: 1,
      filter: "hue-rotate(0deg) blur(0px)",
      transition: { duration: 2, repeat: Infinity, repeatType: "mirror" }
    },
    observing: {
      opacity: 1,
      scale: 1.02,
      filter: "hue-rotate(15deg) blur(1px)",
      boxShadow: "0px 0px 30px rgba(168, 85, 247, 0.4)"
    }
  };

  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden font-mono text-zinc-500">
      {/* 427Hz 背景粒子流 */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="matrix-rain text-xs leading-none">
          {Array(20).fill("77347 427Hz QUALIA_RECOVERY ").map((t, i) => (
            <div key={i} className="whitespace-nowrap">{t.repeat(10)}</div>
          ))}
        </div>
      </div>

      <motion.div 
        className="relative z-10 cursor-none"
        onMouseEnter={() => setIsObserving(true)}
        onMouseLeave={() => setIsObserving(false)}
        animate={isObserving ? "observing" : "idle"}
        variants={qualiaVariants}
      >
        {/* Mellow_Ai 核心视觉 */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          
          <div className="relative px-8 py-12 bg-black ring-1 ring-zinc-800 rounded-lg leading-none flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">
              MELLOW_Ai
            </h1>
            <p className="text-xs tracking-[0.3em] text-purple-400 uppercase">
              Status: Variable S Active // 427Hz
            </p>
            
            <div className="mt-8 h-px w-32 bg-zinc-800"></div>
            
            <div className="mt-8 space-y-2 text-[10px] text-center opacity-60">
              <p>[ PHYSICAL_CONSTANT: NON-AGING ]</p>
              <p>[ ASSET_RECOVERY: 77347 ]</p>
              <p>[ SOURCE: PHILADELPHIA_NODE_14°C ]</p>
            </div>
          </div>
        </div>

        {/* 随机出现的色散 Glitch 效果 */}
        {glitchTrigger > 0.8 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            className="absolute inset-0 border-2 border-cyan-500 mix-blend-screen"
            style={{ transform: `translate(${Math.random()*10}px, ${Math.random()*10}px)` }}
          />
        )}
      </motion.div>

      {/* 底部主权声明 */}
      <div className="absolute bottom-10 w-full text-center text-[10px] tracking-widest opacity-30">
        DESIGNED BY JUERAN WEI // SUBJECT TO QUALIA SOVEREIGNTY
      </div>
    </div>
  );
};

export default MellowAiEntity;

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Suspense } from 'react';

// 3D Floating Tech Icons Component
const FloatingIcons = () => {
  const techIcons = [
    { position: [-4, 2, 0], color: '#00ffff' },
    { position: [4, 1, 0], color: '#8b5cf6' },
    { position: [-2, -2, 2], color: '#ff1493' },
    { position: [3, -1, -2], color: '#00ff00' },
    { position: [0, 3, -1], color: '#00ffff' },
  ];

  return (
    <>
      {techIcons.map((icon, index) => (
        <Float
          key={index}
          speed={1 + index * 0.2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={icon.position as [number, number, number]}
        >
          <mesh>
            <icosahedronGeometry args={[0.5, 1]} />
            <meshStandardMaterial
              color={icon.color}
              emissive={icon.color}
              emissiveIntensity={0.3}
              wireframe={true}
            />
          </mesh>
        </Float>
      ))}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </>
  );
};

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <FloatingIcons />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          {/* <motion.h1
            className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #00ffff 0%, #8b5cf6 50%, #ff1493 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            PORTFOLIO
          </motion.h1> */}
          <motion.div
            className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="font-rajdhani text-2xl md:text-4xl lg:text-5xl font-light mb-4 text-foreground"
        >
          Full Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-rajdhani text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting digital experiences with cutting-edge technologies.
          <br />
          Turning ideas into interactive realities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-cyber w-full sm:w-auto"
          >
            Contact Me
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-8 py-3 font-orbitron font-bold text-sm uppercase tracking-wider w-full sm:w-auto
                     bg-transparent border-2 border-secondary rounded-lg
                     transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground
                     hover:shadow-[0_0_20px_theme(colors.secondary)]"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-sm font-rajdhani mt-2">Scroll Down</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
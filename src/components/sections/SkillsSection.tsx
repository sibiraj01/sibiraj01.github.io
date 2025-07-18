import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import { Suspense } from 'react';

// 3D Skill Icons Component
const Skill3D = ({ position, color }: { position: [number, number, number]; color: string }) => (
  <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3} position={position}>
    <mesh>
      <dodecahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        wireframe={true}
      />
    </mesh>
  </Float>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "#61dafb" },
        { name: "JavaScript", level: 90, color: "#3178c6" },
        // { name: "Next.js", level: 85, color: "#000000" },
        { name: "Tailwind CSS", level: 92, color: "#06b6d4" },
        { name: "Framer Motion", level: 88, color: "#ff0055" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring", level: 90, color: "#339933" },
        { name: "Springboot", level: 95, color: "#000000" },
        { name: "MySQL", level: 80, color: "#336791" },
        // { name: "MongoDB", level: 82, color: "#47a248" },
        // { name: "Redis", level: 75, color: "#dc382d" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95, color: "#f05032" },
        // { name: "Docker", level: 78, color: "#2496ed" },
        // { name: "AWS", level: 70, color: "#ff9900" },
        // { name: "Figma", level: 85, color: "#f24e1e" },
        // { name: "Three.js", level: 80, color: "#000000" },
      ]
    }
  ];

  const skill3DPositions = [
    { position: [-3, 2, 0] as [number, number, number], color: "#f7df1e" },
    { position: [3, 1, -1] as [number, number, number], color: "#61dafb" },
    { position: [-2, -1, 2] as [number, number, number], color: "#339933" },
    { position: [2, -2, 1] as [number, number, number], color: "#1572b6" },
    { position: [0, 3, -2] as [number, number, number], color: "#f05032" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <section id="skills" ref={ref} className="relative py-20 px-6">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <Suspense fallback={null}>
            {skill3DPositions.map((skill, index) => (
              <Skill3D
                key={index}
                position={skill.position}
                color={skill.color}
              />
            ))}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="font-orbitron text-5xl md:text-6xl font-bold mb-6 glow-pink"
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-accent to-primary mb-8"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            My technical expertise spans across modern web technologies, 
            databases, and development tools.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass-card p-6"
            >
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-center text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-rajdhani font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification/Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="font-orbitron text-2xl font-bold mb-4 text-secondary">
              Continuous Learning
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm constantly exploring new technologies and frameworks to stay at the forefront 
              of web development. Currently diving deeper into Web3, AI integration, 
              and advanced animation techniques.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {["Java","Springboot Expert", "Full Stack", "Open Source"].map((badge, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 
                           border border-primary/30 rounded-full text-sm font-rajdhani font-medium"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
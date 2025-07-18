import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, User, Code, Zap } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: User,
      title: "User-Centric",
      description: "Designing with the end user in mind"
    }
  ];

  return (
    <section id="about" ref={ref} className="relative py-20 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-space/50 to-transparent" />
      
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
            className="font-orbitron text-5xl md:text-6xl font-bold mb-6 glow-cyan"
          >
            About Me
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-secondary mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-primary">
                Hi, I'm a Full Stack Developer
              </h3>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                With a strong passion for crafting innovative web solutions, I specialize in developing
                modern applications using React.js for the frontend and Java Spring Boot for the backend.
                As a fresher in software development, I'm continuously expanding my skills across both frontend and backend technologies.
                </p>
                
                <p>
                  I focus on writing clean, maintainable code and building user-friendly experiences
                  that blend functionality with simplicity. Every project I work on is a chance
                  to learn, grow, and push my boundaries.
                </p>
                
                <p>
                 When I'm not coding, I enjoy exploring new frameworks, 
                 enhancing my technical knowledge, and engaging with the developer community to share insights and learnings.
                </p>
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(255, 20, 147, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 font-orbitron font-bold text-sm uppercase tracking-wider
                         bg-transparent border-2 border-accent rounded-lg
                         transition-all duration-300 hover:bg-accent hover:text-accent-foreground
                         hover:shadow-[0_0_20px_theme(colors.accent)] w-full sm:w-auto"
              >
                <Download className="inline-block w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 
                                group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-orbitron text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
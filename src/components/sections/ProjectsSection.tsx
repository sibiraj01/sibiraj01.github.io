import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Zap, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Business Website",
      description: "A full-stack Business Website solution with React, Java, Springboot and MySQL.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "javascript", "MySQL", "java","Springboot", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    // {
    //   title: "Task Management App",
    //   description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    //   technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: true
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    //   technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description: "A comprehensive social media analytics dashboard with real-time data visualization and engagement metrics.",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    //   technologies: ["Vue.js", "D3.js", "Firebase", "Social APIs"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false
    // }
  ];

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
    <section id="projects" ref={ref} className="relative py-20 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/20 via-transparent to-dark-surface/20" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="font-orbitron text-5xl md:text-6xl font-bold mb-6 glow-purple"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-secondary to-accent mb-8"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A showcase of my recent work in web development, featuring modern technologies 
            and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group glass-card overflow-hidden ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Overlay with Links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-primary/20 backdrop-blur-sm rounded-full 
                             border border-primary/50 hover:bg-primary/40 transition-all duration-300"
                  >
                    <Globe className="w-6 h-6 text-primary" />
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-secondary/20 backdrop-blur-sm rounded-full 
                             border border-secondary/50 hover:bg-secondary/40 transition-all duration-300"
                  >
                    <Github className="w-6 h-6 text-secondary" />
                  </motion.a>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full 
                                   border border-accent/50 text-accent text-sm font-orbitron font-bold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-orbitron text-2xl font-bold mb-3 text-foreground 
                             group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted/20 backdrop-blur-sm rounded-full 
                               border border-muted/30 text-sm font-rajdhani"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-primary/20 border border-primary/50 rounded-lg
                             text-primary font-rajdhani font-medium text-center
                             hover:bg-primary/30 transition-all duration-300
                             flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-secondary/20 border border-secondary/50 rounded-lg
                             text-secondary font-rajdhani font-medium
                             hover:bg-secondary/30 transition-all duration-300
                             flex items-center justify-center"
                  >
                    <Code className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {/* <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-cyber"
          >
            <Zap className="inline-block w-5 h-5 mr-3" />
            View All Projects
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
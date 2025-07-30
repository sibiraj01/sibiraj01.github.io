import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
             Sibiraj V
            </h1>
            <p className="text-xl text-muted-foreground mb-6">Full Stack Developer</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                sibir0252@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 7867894543
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Chennai, India
              </div>
            </div>

            <Button className="bg-gradient-primary hover:opacity-80 transition-opacity">
              <Download className="w-4 h-4 mr-2" />
              Download PDF Resume
            </Button>
          </motion.div>

          {/* Professional Summary */}
          <motion.section variants={itemVariants} className="glass-card p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
             Full Stack Developer skilled in React.js and Java Spring Boot.
Passionate about building scalable, user-friendly web applications and eager to contribute to dynamic development teams. Committed to continuous learning and delivering high-quality software solutions.
            </p>
          </motion.section>

          {/* Experience */}
          <motion.section variants={itemVariants} className="glass-card p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Work Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-primary mb-2">Mayuri Tours And Travels</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  Jan 2025 - Present
                </div>
               <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Designed and developed the Mayuri Tours and Travels website from scratch</li>
                <li>• Built a fully responsive frontend for seamless viewing across devices</li>
                <li>• Deployed the static website on AWS S3 for fast and reliable access</li>
                <li>• Technologies used: HTML, CSS, JavaScript, React, AWS S3</li>
              </ul>
              </div>

              <div className="border-l-2 border-primary/30 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-primary mb-2">Course Registration system</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                   may 2025 - jun 2025
                </div>
                 <ul className="text-muted-foreground space-y-1 text-sm">
                 <li>• Developed a Course Registration System using Spring Boot and Spring Data JPA</li>
                 <li>• Implemented CRUD operations for students, courses, and registration workflows</li>
                 <li>• Built a responsive user interface using HTML, CSS, and JavaScript</li>
                 <li>• Technologies used: Java, Spring Boot, Spring Data JPA, HTML, CSS, JavaScript, MySQL</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={itemVariants} className="glass-card p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Education</h2>
            <div className="border-l-2 border-primary/30 pl-6">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-primary mb-2">Agurchand manmull jain college</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                2020 - 2023
              </div>
              <p className="text-muted-foreground text-sm">
                percentage: 70% • Relevant Coursework: Java, Springboot, Springdatajpa, Springsecurity, Data Structures, SQL,
                 Software Engineering
              </p>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section variants={itemVariants} className="glass-card p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'javascript'
                  , 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Springboot', 'MySQL', 'AWS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications */}
          {/* <motion.section variants={itemVariants} className="glass-card p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Certifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">AWS Certified Developer</h3>
                  <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                </div>
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">React Developer Certification</h3>
                  <p className="text-sm text-muted-foreground">Meta</p>
                </div>
                <span className="text-sm text-muted-foreground">2022</span>
              </div>
            </div>
          </motion.section> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
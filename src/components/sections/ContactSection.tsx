import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sibiraj-v-064b4527b/",
      color: "#0077b5"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/sibiraj01",
      color: "#333"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:sibir0252@gmail.com",
      color: "#ea4335"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sibir0252@gmail.com",
      link: "mailto:sibir0252@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      link: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7867894543",
      link: "tel:+15551234567"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <section id="contact" ref={ref} className="relative py-20 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-surface/30 to-transparent" />
      
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
            className="font-orbitron text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #00ffff 0%, #ff1493 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-accent mb-8"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-primary">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-rajdhani font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/10 border border-muted/30 rounded-lg
                             focus:border-primary focus:ring-1 focus:ring-primary
                             transition-all duration-300 font-rajdhani"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-rajdhani font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/10 border border-muted/30 rounded-lg
                             focus:border-primary focus:ring-1 focus:ring-primary
                             transition-all duration-300 font-rajdhani"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-rajdhani font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted/10 border border-muted/30 rounded-lg
                             focus:border-primary focus:ring-1 focus:ring-primary
                             transition-all duration-300 font-rajdhani resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-cyber flex items-center justify-center space-x-3
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-secondary">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-3 rounded-lg
                             hover:bg-muted/10 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-accent">
                Connect with me
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-muted/30
                             hover:border-primary/50 hover:bg-muted/10 transition-all duration-300 group"
                  >
                    <div 
                      className="p-3 rounded-lg transition-colors duration-300"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon 
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: social.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <span className="font-rajdhani font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {social.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
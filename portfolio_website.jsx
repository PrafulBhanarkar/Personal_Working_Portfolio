import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Briefcase, Star, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      {/* Header */}
      <header className="p-6 shadow-md bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-green-700"
          >
            My Portfolio
          </motion.h1>
          <nav className="space-x-6 text-gray-600 font-medium">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#trailhead">Trailhead</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Photo */}
        <img src="C:\Users\LENOVO\Downloads\create a group photo.png" alt="Profile" className="..." />

        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-green-200"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 
            className="text-4xl font-extrabold text-gray-800"
          >
            Hi, I’m <span className="text-green-700">Praful Bhanarkar</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Salesforce QA | Trailhead Three Star Achiever
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-green-700 mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate Salesforce QA professional with hands-on experience in automation, test planning, and delivering high-quality solutions. My focus is on continuous learning and growing expertise in Salesforce ecosystem.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-green-700 mb-8">Work Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[1,2].map((exp) => (
              <motion.div 
                key={exp} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Briefcase className="text-green-700 mr-3" />
                      <h4 className="text-xl font-semibold">Job Title {exp}</h4>
                    </div>
                    <p className="text-gray-600">
                      Description of role, responsibilities, and key achievements here.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trailhead Section */}
      <section id="trailhead" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-green-700 mb-8">Trailhead Achievements</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card className="rounded-2xl shadow-lg text-center p-6">
              <Trophy className="mx-auto text-yellow-500" size={40} />
              <h4 className="text-xl font-semibold mt-4">Rank</h4>
              <p className="text-gray-700">Ranger</p>
            </Card>
          </motion.div>

          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="rounded-2xl shadow-lg text-center p-6">
              <Star className="mx-auto text-blue-500" size={40} />
              <h4 className="text-xl font-semibold mt-4">Points</h4>
              <p className="text-gray-700">123,456</p>
            </Card>
          </motion.div>

          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <Card className="rounded-2xl shadow-lg text-center p-6">
              <Star className="mx-auto text-green-600" size={40} />
              <h4 className="text-xl font-semibold mt-4">Badges</h4>
              <p className="text-gray-700">250+</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Get In Touch</h3>
          <p className="text-gray-700 mb-6">Let’s connect and discuss opportunities or collaborations.</p>
          <Button size="lg" className="rounded-2xl">
            <Mail className="mr-2" /> Contact Me
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} [Your Name]. All rights reserved.
      </footer>
    </div>
  );
}

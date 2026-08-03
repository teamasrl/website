import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Award, Users } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';

const About = () => {
  const values = [
    {
      icon: <Rocket className="h-8 w-8 text-accent-500" />,
      title: 'Innovation',
      description: 'Pushing boundaries through creative thinking and cutting-edge aerospace technologies.'
    },
    {
      icon: <Target className="h-8 w-8 text-accent-500" />,
      title: 'Excellence',
      description: 'Committing to the highest standards in all our research and development projects.'
    },
    {
      icon: <Users className="h-8 w-8 text-accent-500" />,
      title: 'Collaboration',
      description: 'Working across disciplines to solve complex problems through team-based approaches.'
    },
    {
      icon: <Award className="h-8 w-8 text-accent-500" />,
      title: 'Impact',
      description: 'Creating meaningful solutions that contribute to aerospace advancement and education.'
    }
  ];

  // Each row pairs a Competition Achievement with its matching Research Milestone.
  // Rows render inside a CSS grid, so both cells in a row share the same height
  // automatically -- no more drift when one side's text is longer than the other.
  const legacyRows = [
    {
      achievement: {
        title: 'ASRL Research Program – Round Wing',
        subtitle: 'Chennai, Tamil Nadu'
      },
      milestone: {
        title: 'Round Wing',
        subtitle: 'Citation from University of Kharkiv Research work acknowledged for its contribution to UAV design, autonomous flight systems, and aerospace innovation.'
      }
    },
    {
      achievement: {
        title: 'Best Design – Aerofest 2026',
        subtitle: 'Chennai, Tamil Nadu'
      },
      milestone: {
        title: 'Advanced UAV Design & Development',
        subtitle: 'UAV systems by integrating aerodynamic analysis, lightweight structures, and autonomous flight capabilities.'
      }
    },
    {
      achievement: {
        title: 'MediDrop',
        subtitle: 'Chennai, Tamil Nadu'
      },
      milestone: {
        title: 'GPS-Guided Medical Supply Delivery System',
        subtitle: 'Designed and developed an autonomous UAV capable of navigating to predefined GPS coordinates and accurately deploying medical supplies for emergency response scenarios.'
      }
    },
    {
      achievement: {
        title: '1st Rank, Design Category - SUAS Competition (2019)',
        subtitle: 'Maryland, USA'
      },
      milestone: {
        title: 'Advanced UAV Autonomy Systems',
        subtitle: 'Pioneering work in autonomous flight control and navigation'
      }
    },
    {
      achievement: {
        title: '1st Rank - SAE Autonomous Design Challenge (2020)',
        subtitle: 'National Competition'
      },
      milestone: {
        title: 'Long-Range Telemetry Solutions',
        subtitle: 'Development of 5km+ range secure communications'
      }
    },
    {
      achievement: {
        title: '1st Rank - VAYURVA, NITTE, Multirotor payload dropping (2024)',
        subtitle: 'Mangaluru, Karnataka'
      },
      milestone: {
        title: 'Hybrid VTOL Aircraft Design',
        subtitle: 'Innovative approach to vertical takeoff and horizontal flight integration'
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-about-pattern bg-cover bg-center pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About ASRL</h1>
            <p className="text-xl text-white/80">
              The story behind our aerospace research laboratory and our mission to push the boundaries of aerial innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-white/80 mb-4">
                The Aerospace Systems Research Laboratory (ASRL) emerged from the merger of two technical student teams at SRM Institute of Science and Technology: SRMUAV and SRMSCRO. This strategic combination united expertise in unmanned aerial vehicles and space mission design.
              </p>
              <p className="text-white/80 mb-4">
                Since our formation, ASRL has rapidly grown into a leading student-led aerospace research group, specializing in developing innovative UAVs, autonomous systems, and aerospace technology solutions for real-world challenges.
              </p>
              <p className="text-white/80">
                Our multidisciplinary team brings together engineering, computer science, electronics, and design expertise to create cutting-edge aerospace systems that push technological boundaries and contribute to advancing the field.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-space-900/40 backdrop-blur-sm rounded-lg p-8 border border-space-800"
            >
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-white/80 mb-8">
                To tackle modern-day problems through cutting-edge aerospace innovation while fostering the next generation of aerospace engineers and researchers.
              </p>
              
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-white/80">
                To become a globally recognized student-led aerospace research hub that develops impactful technological solutions and prepares students for leadership in the aerospace industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-space-900">
        <div className="container-custom">
          <SectionTitle 
            title="Our Values"
            subtitle="The core principles that guide our research, development, and team culture."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-space-800/40 backdrop-blur-sm p-6 rounded-lg border border-space-700 text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Our Legacy"
            subtitle="A proud history of innovation, competition success, and technological advancement."
          />
          
          <div className="bg-space-900/40 backdrop-blur-sm rounded-lg p-8 border border-space-800">
            {/* Column headers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
              <h3 className="text-2xl font-bold">Competition Achievements</h3>
              <h3 className="text-2xl font-bold">Research Milestones</h3>
            </div>

            {/* Paired rows - each row is its own grid, so the achievement and
                milestone cells always share the same row height */}
            <div className="space-y-6">
              {legacyRows.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-6 border-b border-space-800 last:border-b-0 last:pb-0"
                >
                  <div className="flex">
                    <span className="text-accent-500 mr-3">🏆</span>
                    <div>
                      <p className="font-medium">{row.achievement.title}</p>
                      <p className="text-white/60 text-sm">{row.achievement.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="text-accent-500 mr-3">✓</span>
                    <div>
                      <p className="font-medium">{row.milestone.title}</p>
                      <p className="text-white/60 text-sm">{row.milestone.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
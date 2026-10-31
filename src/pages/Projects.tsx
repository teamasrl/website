import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Filter } from 'lucide-react';
import TimelineEvent from '../components/TimelineEvent'



import SectionTitle from '../components/SectionTitle';
import { link } from 'framer-motion/client';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [,setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const featuredProjects = [
    {
          name: 'Nether – Boeing Aeromodelling UAV (January)',
          year: '2025',
          description: 'Project Nether for Boeing Aeromodelling Chennai, involved building a high-wing RC aircraft with a semi-monocoque structure using birch, balsa, Depron, and carbon fiber. It achieved 110 km/h with a 1.5:1 thrust-to-weight ratio. Aerodynamic performance was validated using XFLR5 and ANSYS Fluent, and the power system delivered 10.5 minutes of endurance. The design featured a NACA 4412 airfoil and a modular wing for optimized stability and efficiency.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/nether.jpg',
          link: '',
        }, 
{
          name: 'Spectre – 3D Acrobatic Aircraft\n(March)',
          year: '2025',
          description: 'Project Spectre is a lightweight, Depron-foam RC aircraft designed for advanced aerobatics and pilot training at ASRL. Powered by a 1000KV brushless motor, it delivers high thrust-to-weight performance for stunts like torque rolls, hovers, and knife-edge flight. With a custom airframe and control surface design, Spectre serves as a technology demonstrator for fixed-wing agility and control in experimental flight testing.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/spectre.jpg',
          link: '',
        },
    {
          name: 'Trident - Tricopter (May)',
          year: '2025',
          description: 'This tricopter features a Y-configuration with servo-based yaw control, designed for modular payloads and stable flight. Built with birch, aluminum, and PETG-printed components, it supports an MTOW of 1.5 kg and 5+ minutes of flight.Powered by SunnySky X2212 motors and LiPo batteries, the design was validated through dynamic modeling and simulation, making it a versatile platform for surveillance, delivery, and research applications.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/tricop.jpg',
          link: '',
        },
  ];

  const timelineData = [
    {
      year: '2026',
      projects: [
        {
          name: 'Aerofest (March)',
          year: '2026',
          description: 'Designed and developed twin engine RC plane with modular tail – conventional tail and bird tail. From CFD analysis to manufacturing to flight testing, we won Best Design Award and experiences lot of engineering.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/Aerofest%202026.jpeg',
          link: '',
        },
        {
          name: 'Technoxian (July)',
          year: '2026',
          description: 'Designed and explored 3d print RC plane. Participated in zonal round. Great experience with lot of learnings from flight test, pilot training and aerodynamic design.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/Technoxian%202026.jpeg',
          link: '',
        }, 
        {
          name: 'Aerospanza (July)',
          year: '2026',
          description: 'Designed and developed a Hybrid VTOL UAV with aerospace-grade design, autonomous flight architecture, embedded electronics, and an intelligent ground control station for disaster response operations. Integrated AI-driven multi-protocol communication with reinforcement learning for adaptive prioritisation, bandwidth optimisation, and autonomous decision-making. Built for flood-response missions, enabling resilient communication, real-time situational awareness, and efficient coordination between UAVs, sensors, and emergency teams. Successfully advanced through multiple competition rounds to the finals, presenting the complete system before an expert panel.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/Aerospanza.jpeg',
          link: '',
        },
         {
          name: 'TEKNOFEST fixed wing (July)',
          year: '2026',
          description: 'Designed and developed an autonomous UAV capable of QR-code based navigation, payload delivery, and precision landing for the Teknofest Aerospace Competition. Contributed to mission planning, computer vision, autonomous navigation, and Ground Control Station (GCS) development using Raspberry Pi 5, Pixhawk, MAVLink, OpenCV, Python, ROS 2, and PX4. Implemented real-time telemetry, waypoint navigation, obstacle avoidance, QR detection, and mission automation while integrating onboard sensors and communication systems.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/teknofest%20fixedwing.jpeg',
          link: '',
        },
         {
          name: 'SAE (june)',
          year: '2026',
          description: 'Designed and developed an autonomous UAV capable of QR-code based navigation, payload delivery, and precision landing for the Teknofest Aerospace Competition. Contributed to mission planning, computer vision, autonomous navigation, and Ground Control Station (GCS) development using Raspberry Pi 5, Pixhawk, MAVLink, OpenCV, Python, ROS 2, and PX4. Implemented real-time telemetry, waypoint navigation, obstacle avoidance, QR detection, and mission automation while integrating onboard sensors and communication systems.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/SAE.jpeg',
          link: '',
        },
         {
          name: 'TEKNOFEST Rotary Wing (July)',
          year: '2026',
          description: 'An autonomous 4 kg quadcopter built on a hybrid H/X carbon-fiber airframe with 30° swept quick-detach arms for compact storage and sub-4-minute field assembly. SunnySky X2814 motors on 13×6.5 props give a 2:1 thrust-to-weight margin at MTOW. A Pixhawk Cube Orange+ paired with a Raspberry Pi 5 runs an OpenCV vision pipeline that detects colored geometric ground targets, geolocates them from pixel position and altitude, and triggers a servo-actuated dual-bay payload release over MAVLink — backed by failsafes for signal loss, low battery, geofence breach, and GPS dropout.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/teknofest%20rotary%20wing.png',
          link: '',
        },
         {
          name: 'neptune (jan)',
          year: '2026',
          description: 'The drone is designed for emergency and disaster-relief operations, with the primary objective of transporting and deploying medical supplies at predefined GPS locations. The system incorporates a GPS module with a dedicated mount, enabling reliable navigation, accurate positioning, and precise payload deployment.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/neptune.jpeg',
          link: '',
        },
      ]
    },
    {
      year: '2025',
      projects: [
        {
          name: 'Trident - Tricopter (May)',
          year: '2025',
          description: 'This tricopter features a Y-configuration with servo-based yaw control, designed for modular payloads and stable flight. Built with birch, aluminum, and PETG-printed components, it supports an MTOW of 1.5 kg and 5+ minutes of flight.Powered by SunnySky X2212 motors and LiPo batteries, the design was validated through dynamic modeling and simulation, making it a versatile platform for surveillance, delivery, and research applications.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/tricop.jpg',
          link: '',
        },
        {
          name: 'Spectre – 3D Acrobatic Aircraft\n(March)',
          year: '2025',
          description: 'Project Spectre is a lightweight, Depron-foam RC aircraft designed for advanced aerobatics and pilot training at ASRL. Powered by a 1000KV brushless motor, it delivers high thrust-to-weight performance for stunts like torque rolls, hovers, and knife-edge flight. With a custom airframe and control surface design, Spectre serves as a technology demonstrator for fixed-wing agility and control in experimental flight testing.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/spectre.jpg',
          link: '',
        },
        {
          name: 'Nether – Boeing Aeromodelling UAV (January)',
          year: '2025',
          description: 'Project Nether for Boeing Aeromodelling Chennai, involved building a high-wing RC aircraft with a semi-monocoque structure using birch, balsa, Depron, and carbon fiber. It achieved 110 km/h with a 1.5:1 thrust-to-weight ratio. Aerodynamic performance was validated using XFLR5 and ANSYS Fluent, and the power system delivered 10.5 minutes of endurance. The design featured a NACA 4412 airfoil and a modular wing for optimized stability and efficiency.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/nether.jpg',
          link: '',
        }, 
        {
          name: 'Horizon',
          year: '2025',
          description: 'Design for Boeing Aeromodelling',
          image: '',
          link: '',
        },
        {
          name: 'ASRL Research Program - Round Wing',
          year: '2026',
          description: 'As part of ASRL Research Program, analysis CFD, lift and aerodynamic parameters of rings wings of various shapes round, elliptical and rectangular wings.',
          image: '',
          link: 'https://www.researchgate.net/publication/394502784_Ring-Wing_Exploring_Feasibility_Through_Simulation_and_Design_Analysis',
        },
      ]
    },
    {
        year:'2024',
      projects: [
        {
          name: 'Firefly (November)',
          description: ' Firefly was ASRL’s entry to SAE Aerothon 2024 in Bangalore. The team developed an autonomous aerial vehicle optimized for autonomous navigation, target detection and payload drop.  Key innovations included solving structural resonance issues through vibration testing, dampening, and reinforced joints using rivets and lock nuts',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/firefly.jpg',
          link: '',
        },
        {
          name: 'Cargomax — Autonomous Cargo UAV (September)',
          description: 'Cargomax is a modular UAV developed by ASRL at SRM IST, designed for autonomous cargo delivery. Featuring a 2-meter collapsible fuselage with sectional wings, it balances portability and performance.Built using depron foam and 3D-printed bayonet mounts, the UAV minimizes drag while maximizing internal cargo space. Powered by twin 6S LiPo-driven motors, it reaches 60 km/h and carries up to 750 grams.Cargomax includes a custom payload dropping mechanism and is one of ASRL’s earliest ventures into lightweight cargo UAV systems',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/cgmax.jpg ',
          link: '',
           },
        {
          name: 'Arrow (March)',
          description: 'Fixed-wing UAV designed for NITTE UAV competition with enhanced stability and range.',
          image: '',
          link: '',
          },
        {
          name: 'Zeus (March)',
          description: 'High-performance multirotor developed for precise aerial operations and payload delivery.',
          image: '',
          link: '',
        },
        {
          name: 'Ground Control Station ( January)',
          year: '2025',
          description: '',
          image: '',
          link: '',
        },
      ]
    },
    {
      year: '2023',
      projects: [
       
        {
          name: 'Terra (November)',
          description: 'TERRA is a modular ground robot developed by ASRL SRM for exploring hazardous terrains like caves and debris zones. It features LIDAR-based 3D mapping, a winch deployment system, and a 1–10 km telemetry range. With an all-wheel drive, live infrared camera feed, and a rich sensor suite, TERRA is built for reconnaissance, mapping, and search-and-rescue missions.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/Terra.jpeg',
          link: '',
        },
         
        {
          name: 'Marlin — Aerobatic Fixed-Wing Aircraft (July)',
          description: 'Marlin is a high-performance stunt aircraft developed by ASRL SRM for Technoxian 2023 – World Robotics Championship in New Delhi. Built with a birch wood airframe, it was engineered for both durability and agility under extreme flying conditions.With a Maximum Takeoff Weight of 3 kg and cruise speed of 22 m/s, Marlin was optimized for tight loops, rolls, and stall turns, thanks to a finely tuned powertrain and control surfaces. The design emphasized aerodynamic efficiency and structural integrity to maintain stability under high G-loads.Marlin demonstrated advanced piloting and robust design in a competitive, real-world environment.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/Marlin.png',
          link: '',
        },
        {
          name: 'Yagi Beam Antenna — Long-Range Telemetry Support (March)',
          description: 'Developed at ASRL SRM, this 3-element Yagi antenna was built using copper tubes and an aluminum boom, with isolated elements for optimal performance. Designed for 433 MHz Pixhawk telemetry, it delivered a gain of 8.6 dBi and achieved an estimated range of ~10 km line-of-sight, with a 50–80° field of view.This antenna significantly improved ground-to-air communication reliability for UAV operations.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/yagi.jpg',
          link: '',
        },
        {
          name: 'Osprey (March)',
          description: 'Multirotor drone with robotic arm capabilities for precision operations.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/Osprey%20Mission%20PAtch.png',
          link: '',
        },

      ]
    },
    {
      year: '2022',
      projects: [
        {
          name: 'Light Fury — Long-Endurance Surveillance UAV (November)',
          description: 'Light Fury is a fixed-wing UAV developed by ASRL SRM for aerial surveillance, reconnaissance, and data collection. Featuring a lightweight composite airframe, modular electronics bay, and optimized aerodynamics, it is built for stable, efficient, and autonomous flight.The UAV supports real-time telemetry, autonomous navigation, and live video streaming, making it ideal for both tactical and civilian applications. Key points included the design of a 3D-printed PLA landing gear with a Factor of Safety of 15, precision wing assembly, and structural testing to ensure mission readiness and durability.',
          image: 'https://raw.githubusercontent.com/teamasrl/images/main/Mission%20Patches/Lf.jpg',
          link: '',
        },

        
      ]
    },
    {
      year: '2020',
      projects: [
        {
          name: 'AlphaX',
          description: 'Autonomous UAV designed for the Essay Autonomous Design Challenge.',
          image: '',
          link: '',
        },
      ]
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-project-pattern bg-cover bg-fixed pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white/80">
              Explore our innovative UAVs, aerospace systems, and groundbreaking research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Projects"
            subtitle="Our most innovative and impactful projects showcasing our capabilities."
          />
          
          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {featuredProjects.map((project, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="h-[400px] rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                      <p className="text-accent-400 mb-4">{project.year}</p>
                      <p className="text-white/80">{project.description}</p>
                      <a
                        href={project. link }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary mt-6 inline-block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {instanceRef.current && (
              <>
                <button 
                  onClick={() => instanceRef.current?.prev()}
                  
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent-500/80 p-2 rounded-full disabled:opacity-30"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => instanceRef.current?.next()}
          
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent-500/80 p-2 rounded-full disabled:opacity-30"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
<section className="py-20 bg-space-900">
  <div className="container-custom">
    <div className="flex flex-wrap justify-between items-center mb-12">
      <SectionTitle 
        title="Project Timeline"
        subtitle="Our journey of innovation and achievement through the years."
      />
      <div className="flex items-center mt-6 lg:mt-0 bg-space-800/60 rounded-lg p-2">
        <Filter className="h-5 w-5 text-accent-400 mr-2" />
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-transparent text-white border-none focus:outline-none text-sm"
        >
          <option value="all" className="bg-space-900">All Years</option>
          <option value="2024" className="bg-space-900">2024</option>
          <option value="2023" className="bg-space-900">2023</option>
          <option value="2022" className="bg-space-900">2022</option>
          <option value="2021" className="bg-space-900">2021</option>
          <option value="2020" className="bg-space-900">2020</option>
          <option value="2019" className="bg-space-900">2019</option>
        </select>
      </div>
    </div>

    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-space-800 hidden md:block"></div>

      {/* Timeline Events */}
      <div className="space-y-10 md:ml-6">
        {timelineData
          .filter(data => filter === 'all' || data.year === filter)
          .map((yearData, index) => (
            <TimelineEvent 
              key={index}
              year={yearData.year}
              projects={yearData.projects}
            />
          ))
        }
      </div>
    </div>
  </div>
</section>
</div>
  );
};

export default Projects;
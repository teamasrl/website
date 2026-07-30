import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Code, CircuitBoard, User, } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import TeamMemberCard from '../components/TeamMemberCard';

const Team = () => {
  const [division, setDivision] = useState('all');
  
  const divisions = [
    { id: 'all', name: 'Full Team', icon: <Users className="h-5 w-5" /> },
    { id: 'design', name: 'Design and Fabrication', icon: <Wrench className="h-5 w-5" /> },
    { id: 'flight', name: 'Flight Systems', icon: <CircuitBoard className="h-5 w-5" /> },
    { id: 'Coding', name: 'Coding', icon: <Code className="h-5 w-5" /> },
    { id: 'Corporate', name: 'Corporate', icon: <User className="h-5 w-5" /> },
    {id: 'alumni', name: 'Alumni', icon: <Users className="h-5 w-5" />},
  ];
  
  
    const teamMembers = [
      //Team Lead
      {
        name: 'Manan Agarwal',
        role: 'Team Lead',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Manan Agarwal.jpg',
        linkedinUrl: 'http://linkedin.com/in/manan-agarwal-a489a72b9',
        emailAddress: 'ma7595@stmist.edu.in',
        instagramUrl: 'https://www.instagram.com/Me_mananagarwal'
      },
      //All Domain Leads
      {
        name: 'Rishabh Raushan',
        role: 'Coding Lead',
        division: ['Coding'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Rishabh Raushan.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/rishabh-raushan-7762422a1/',
        emailAddress: 'rishabhraushan200524@gmail.com',
        instagramUrl: 'https://www.instagram.com/itszrishabh/'
      },
      {
        name: 'Archit Amey',
        role: 'Flight System Lead',
        division: ['flight'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Archit Amey.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/archit-amey-bb17642b7?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'architamey@gmail.com',
        instagramUrl: 'https://www.instagram.com/architamey?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
      },
       {
        name: 'Alapan Chatterjee',
        role: 'Design and Fabrication Lead',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Alapan Chatterjee.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/alapan-chatterjee-2a7766295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        emailAddress: 'alapan.chatterjee2204@gmail.com',
        instagramUrl: 'https://www.instagram.com/ace_.8202'
      },
      {
        name: 'Aratrika Joardar',
        role: 'Corporate Lead & Flight Systems Engineer',
        division: ['flight', 'Corporate'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Aratrika Joardar.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/aratrika-joardar-824692326',
        emailAddress: 'aratrikajoardar@gmail.com',
        instagramUrl: ''
      },
       {
        name: 'Akshaya P',
        role: 'Corporate',
        division: ['Corporate'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Akshaya P.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/akshaya-padmanabhan-780b66337?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'akshayapadmanabhan584@gmail.com',
        instagramUrl: 'https://www.instagram.com/_akshayaa.13?igsh=MTBuNmVhNms0Mm42YQ=='
      },
      //Seniors 
      {
        name: 'Priyansh Sethi',
        role: 'Coding Senior',
        division: ['Coding'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Priyansh Sethi.jpg',
        linkedinUrl: 'Linkedid: https://www.linkedin.com/in/priyansh-sethi-aerospace',
        emailAddress: 'priyanshsethi019@gmail.com',
        instagramUrl: 'https://www.instagram.com/priyanshsethi_?utm_source=qr&igsh=Zjc1eTJlb2UzZ295'
      },
     {
        name: 'P. Srizan Sai Ram',
        role: 'Coding Senior',
        division: ['Coding'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/srizan.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/srizan-pallapothu-026a113a5?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'srizansairampallapothu@gmail.com',
        instagramUrl: 'https://www.instagram.com/srizan306?igsh=OTBtaHBnZXF6YzZj'
      },
      {
        name: 'Vedaant Sarda',
        role: 'Flight Systems Senior',
        division: ['flight'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Vedaant Sarda.jpg',
        linkedinUrl:'',
        emailAddress: 'vs1982@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/@vedaant-sarda'
      },
       {
        name: 'Alysia Gomes',
        role: 'Flight Systems Senior',
        division: ['flight'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Alysia Gomes.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/alysia-gomes-88b488303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        emailAddress: 'alysiagomes102@gmail.com',
        instagramUrl: 'https://www.instagram.com/phoenix_in_space?igsh=b252Njk0MDFicHRp'
      },
       {
        name: 'Archisha Sahoo',
        role: 'Flight Systems Senior',
        division: ['flight'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Archisha Sahoo.jpg',
        linkedinUrl: 'www.linkedin.com/in/Archisha_Sahoo',
        emailAddress: 'archishasahoo.16@gmail.com',
        instagramUrl: 'https://www.instagram.com/archisha_1016'
      },
      {
        name: 'Rishav Kamboj',
        role: 'Design and Fabrication Senior',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Rishav Kamboj.jpeg',
        linkedinUrl: 'www.linkedin.com/in/rishav-kamboj',
        emailAddress: 'rk6828@srmist.edu.in',
        instagramUrl: ''
      },

      {
        name: 'Prithvi Shankar',
        role: 'Design and Fabrication Senior',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Prithvi Shankar.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/prithvi-shankar-a0a9aa290/?skipRedirect=true',
        emailAddress: 'ps0676@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/pritttthvi'
      },

      {
        name: 'Tejas R Nadig',
        role: 'Design and Fabrication Senior',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Tejas R Nadig.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/tejas-r-nadig-534b852b3?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'tn1267@srmist.edu.in',
        instagramUrl: ''
      },

      {
        name: 'Siranjeevi MR',
        role: 'Coding member',
        division: ['Coding'],
        imageSrc:'https://raw.githubusercontent.com/ASRL-SRM/image/main/Siranjeevi MR.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/siranjeevi-mr-8b1b683ba?utm_source=share_via&utm_content=profile&utm_medium=member_android' ,
        emailAddress: 'siranjeevi040807@gmail.com',
        instagramUrl: 'https://www.instagram.com/siranjeevi.infinite?igsh=MXZhbTFsNHN4dm55Mw=='
      },

      {
        name: 'Aaditya Raj ',
        role: 'Coding member', 
        division: ['Coding'],
        imageSrc:'https://raw.githubusercontent.com/ASRL-SRM/image/main/Aaditya.jpg',
        linkedinUrl:'https://www.linkedin.com/in/aaditya-raj-9a7108342?utm_source=share_via&utm_content=profile&utm_medium=member_android' ,
        emailAddress: 'aadityar2006@gmail.com',
        instagramUrl: 'https://www.instagram.com/aadihere09/?utm_source=ig_web_button_share_sheet'
      },
      {
        name: 'Sathwik Srikakulapu',
        role: 'Coding member',
        division: ['Coding'],
        imageSrc:'https://raw.githubusercontent.com/ASRL-SRM/image/main/sathwik Srikakulapu.jpeg',
        linkedinUrl:'https://www.linkedin.com/in/sathwik-srikakulapu-8b3453390?utm_source=share_via&utm_content=profile&utm_medium=member_android' ,
        emailAddress: 'sathwiksrikakulapu@gmail.com',
        instagramUrl: 'https://www.instagram.com/sxsathvikxs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
      },
      {
        name: 'Abhinav Kumar',
        role: 'Flight Systems Engineer',
        division: ['flight'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Abhinav Kumar.jpeg',
        linkedinUrl:'https://www.linkedin.com/in/abhinav-kumar-91a14533b',
        emailAddress: 'abhinavkumar98087@gmail.com',
        instagramUrl: 'https://www.instagram.com/ab.hinav_k?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
      },
      {
        name: 'Arnav Peechara',
        role: 'Flight Systems Engineer',
        division: ['flight'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Arnav Peechara.jpeg',
        linkedinUrl:'https://www.linkedin.com/in/arnav-peechara-3981051b4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrtvB8FJCT9ySmC0uktpRPg%3D%3D',
        emailAddress: 'arnav.peechara@gmail.com',
        instagramUrl: 'https://www.instagram.com/arnav.peechara/'
      },
      {
        name: 'T.Hiresh Jishnu',
        role: 'Flight Systems Engineer',
        division: ['flight'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/T.HireshJishnu.jpeg',
        linkedinUrl:'',
        emailAddress: ' hireshjish@gmail.com',
        instagramUrl: ''
      },

       {
        name: 'Ridhi Mittal',
        role: 'Design and Fabrication Engineer',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Ridhi Mittal.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/ridhi-mittal-b78539322?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'rp2551@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/ridrk_1508?igsh=bzlzYjd6bzluY25p'
      },
       {
        name: 'Purvi Managuli',
        role: 'Design and Fabrication Engineer',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Purvi Managuli.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/purvi-m-56172a245?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'purvimanaguli@gmail.com',
        instagramUrl: 'https://www.instagram.com/purviii112?igsh=cXZhamo1NHFidWcz'
      },
       {
        name: 'Siddhi Dhanawade',
        role: 'Design and Fabrication Engineer',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Siddhi Dhanawade.jpeg',
        linkedinUrl: 'https://www.linkedin.cominsiddhi-dhanawade-326154225',
        emailAddress: 'sd9712@srmist.edu.in',
        instagramUrl: 'httpswww.instagram.com_siddhiii31_'
      },
       {
        name: 'Rudranil Bhattacharjee',
        role: 'Design and Fabrication Engineer',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Rudranil Bhattacharjee.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/rudranil-bhattacharjee-530312378?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'bhattacharjee.rudranil2007@gmail.com',
        instagramUrl: 'https://www.instagram.com/rudranil.py?igsh=bWRpbDQyNHduaHM1'
      },
       {
        name: 'Paluri Durga Nandini',
        role: 'Design and Fabrication Engineer',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Durga Nandini Paluri.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/nandini-paluri-857502393?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'dnandinip@gmail.com',
        instagramUrl: 'https://www.instagram.com/paluri.nandini?igsh=MTJsbG51YWd6eGkxeQ=='
      },
       {
        name: 'Rokkala Suvashv',
        role: 'Design and Fabrication Engineer',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Rokkala Suvashv.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/suvashv-rokkala-185a21374?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'suvashvrokkala@gmail.com',
        instagramUrl: 'https://www.instagram.com/imsuvashv_rokkala?igsh=MWhobHB5eWQwcjh2bA=='
      },
       {
        name: 'Shubham Jariwala',
        role: 'Design and Fabrication Engineer',
        division: ['design'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Shubham Jariwala.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/shubham-jariwala-087168307?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        emailAddress: 'ehubham.jariwalaa06@gmail.com',
        instagramUrl: 'https://www.instagram.com/sjx._jw?igsh=dWNvbmc0dHZjaXhi'
      },
       {
        name: 'Praneel Sharma',
        role: 'Ex-Design and Fabrication',
        division: ['alumni'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Praneel Sharma.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/praneel-sharma299792458/',
        emailAddress: 'sharmapraneelas@gmail.com',
        instagramUrl: 'https://www.instagram.com/sharma.praneel'
      },
       {
        name: 'Yash Verma',
        role: 'Ex-Flight Systems',
        division: ['alumni'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Yash Verma.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/yashverma2004/',
        emailAddress: 'yashverma7531@gmail.com',
        instagramUrl: 'https://www.instagram.com/yash___verma/'
      },
       {
        name: 'Aarya Menon',
        role: 'Ex-Coding',
        division: ['alumni'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Aarya Menon.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/aarya-menon-83b420251/',
        emailAddress: 'am8957@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/_aaryamenon'
      },
       {
        name: 'Shagun Somani',
        role: 'Ex-Corporate',
        division: ['alumni'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Shagun Somani.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/shagun-somani-00b29a24b/',
        emailAddress: 'ss9416@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/shagunnn____?igsh=MjdmdjdleHNqdDV6'
      },
       {
        name: 'Laxmi Waghmare',
        role: 'Ex-Design and Fabrication',
        division: ['alumni'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Laxmi Waghmare.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/laxmi-w/',
        emailAddress: 'lw5951@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/_.l_.a_.x_.m_.i_'
      },
       {
        name: 'Divyansh Singh',
        role: 'Ex-Coding',
        division: ['alumni'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Divyansh Singh.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/divyansh-singh-8b12b426a/',
        emailAddress: 'ds8556@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/__just_divyaaaanshh__/'
      },
       {
        name: 'Akshika Pathania',
        role: 'Ex-Design and Fabrication',
        division: ['alumni'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Akshika Pathania.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/akshika-pathania-b20304282/',
        emailAddress: 'ap7251@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/akshika2805'
      },
       {
        name: 'Akshansh Sharma',
        role: 'Ex-Coding',
        division: ['alumni'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Akshansh Sharma.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/akshansh-sharma-16220832b/',
        emailAddress: 'akshansh9816264920@gmail.com',
        instagramUrl: 'https://www.instagram.com/akshansh_shrma?igsh=eTFoYWQ4cm9zbGN5&utm_source=qr'
      },
       {
        name: 'Siddharth Venkatesan',
        role: 'Ex-Coding',
        division: ['alumni'],
        imageSrc: 'https://raw.githubusercontent.com/ASRL-SRM/image/main/Siddharth Venkatesan.png',
        linkedinUrl: '',
        emailAddress: 'sv4643@srmist.edu.in',
        instagramUrl: ''
      },


  ];
  
  const filteredMembers = (() => {
  // Full Team - keep original order
  if (division === 'all') {
    return teamMembers.filter(
      member => !member.division.includes('alumni')
    );
  }

  // Filter members for the selected division
  let members = teamMembers.filter(member =>
    member.division.includes(division)
  );

  // Flight Systems custom order
  if (division === 'flight') {
    const getPriority = (member) => {
      if (member.role === 'Flight System Lead') return 1;
      if (member.role === 'Flight Systems Senior') return 2;
      if (member.name === 'Aratrika Joardar') return 3;
      if (member.role === 'Flight Systems Engineer') return 4;
      return 5;
    };

    return members.sort((a, b) => getPriority(a) - getPriority(b));
  }

  // Corporate custom order
  if (division === 'Corporate') {
    return members.sort((a, b) => {
      if (a.name === 'Aratrika Joardar') return -1;
      if (b.name === 'Aratrika Joardar') return 1;
      return 0;
    });
  }

  // Design & Coding remain unchanged
  return members;
})();
  
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-white/80">
              Meet the talented members behind ASRL's innovative aerospace projects and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="Our multidisciplinary team brings together engineering, computer science, electronics, and design expertise."
          />
          
          {/* Division Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {divisions.map((div) => (
              <button
                key={div.id}
                onClick={() => setDivision(div.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  division === div.id 
                    ? 'bg-accent-500 text-white' 
                    : 'bg-space-800 text-white/70 hover:bg-space-700'
                }`}
              >
                <span className="mr-2">{div.icon}</span>
                {div.name}
              </button>
            ))}
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                linkedinUrl={member.linkedinUrl}
                emailAddress={member.emailAddress}
                instagramUrl={member.instagramUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-space-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-space-800/50 backdrop-blur-sm rounded-lg p-8 border border-space-700 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate students to join our multidisciplinary team. Whether you're interested in aerospace engineering, computer science, electronics, or design, there's a place for you at ASRL.
            </p>
            <a href="/careers" className="btn-primary">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;

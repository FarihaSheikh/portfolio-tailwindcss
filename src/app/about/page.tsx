import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">About Me</h1>

        
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <p>
              Hello, I am Fariha Sheikh, a passionate web developer with a keen eye for HTML, CSS, Next.js, and Tailwind CSS. With a background in IT, I strive to create impactful and visually stunning websites that leave a lasting impression.
            </p>

            <br />
            <h1 className="text-pink-500 font-semibold text-xl">Education & Training</h1>
            <span>
              Generative AI Course, GIAIC, 2024
              <br />
              Graphic Designing course from Arena Multimedia
              <br />
              Masters in Business Administration (MBA) from Dow University of Health Sciences, 2021-2023
              <br />
              Bachelors in Bioinformatics (BS) from Sir Syed University of Engineering & Technology, 2018
              <br />
              Intermediate in Pre-Medical from Govt. Degree Girls College Gulistan-e-Jauhar Karachi, 2014
              <br />
              Matriculation in Science from Bahria Model School (Majeed S.R.E)
              <br />
              English Language Course from Lingo English Language Institute
            </span>
            <br />
            <br />
            
            <h1 className="text-pink-500 font-semibold text-xl">Skills & Expertise</h1>
            <span>
              Proficient in Programming Languages
              <br />
              Experienced with new technologies
              <br />
              Strong grasp of design principles and concepts
              <br />
              Excellent problem-solving skills
              <br />
              Effective communicator and collaborator
              <br />
            </span>

            <br />
            <h1 className="text-pink-500 font-semibold text-xl">Professional Experience</h1>
            <span>
              Freelancer at Upwork
              <br />
              6 months internship at Dow Institute for Advanced Biological and Animal Research (DIABAR)
              <br />
              Worked as an administrator in White Rose Grammar School
              <br />
            </span>

            <br />
            <h1 className="text-pink-500 font-semibold text-xl">Achievements & Certifications</h1>
            <span>
              Attended workshop on Freelancing
              <br />
              Attended workshop on Digital Marketing
            </span>
          </div>
        </div>

        <br />
        <h1 className="text-pink-500 font-semibold text-xl text-justify">Mission Statement</h1>
        <p>
          My mission is to leverage my skills and creativity to deliver innovative ideas into reality that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;

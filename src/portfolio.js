/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abderrahmane Makhlouf",
  title: "Hi all, I'm Abderrahmane",
  subTitle: emoji(
    "High-achieving student awarded for academic excellence, passionate about technology, developing IT skills in networking, cybersecurity, and AI. Aspiring to study Computer Science via scholarship and contribute to digital innovation."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
github: "https://github.com/abderrahmanemakhlouf",
  linkedin: "https://www.linkedin.com/in/abderrahmane-makhlouf/",  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "💻 Providing technical support | 🖥 Exploring Windows & Linux | 📝 Learning programming | 🌐 Experimenting with networking 🚀",
  skills: [
    "💻 Technical Support for Hardware & Software",
    "🌐 Networking Basics and Configuration",
    "🖥 Working with Windows & Linux systems",
    "📜 Programming Basics and Scripting"
    
  ],
  softwareSkills: [
    { skillName: "Hardware Support", fontAwesomeClassname: "fas fa-desktop" },
    { skillName: "Software Support", fontAwesomeClassname: "fas fa-laptop-code" },
    { skillName: "Programming", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Windows", fontAwesomeClassname: "fab fa-windows" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Networking", fontAwesomeClassname: "fas fa-sitemap" },    
    { skillName: "Microsoft 365", fontAwesomeClassname: "fas fa-file-alt" }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ain El Malha 2 High School",
      logoBlack: require("./assets/images/graduation55.png"), // النسخة السوداء
      logoWhite: require("./assets/images/graduation2.png"), // النسخة البيضاء
      subHeader: "Baccalauréat in Technical Mathematics",
      duration: "2024",
      desc: "Graduated with a strong academic record, focusing on mathematics, physics, and engineering.",
      descBullets: [
        "Recognized among the top students of the school 🎓",
        "Awarded an honor certificate by the mayor 🏅"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Technical Support",
      progressPercentage: "85%"
    },
    {
      Stack: "Networking",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "49%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Technical Support Fundamentals",
      subtitle: "Completed the foundational IT support course by Google.",
      image: require("./assets/images/google5.png"), // استخدم شعار Google
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/6AQB51OE0FOD"
        }
      ]
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "Completed the networking fundamentals course by Google.",
      image: require("./assets/images/google5.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/OOKQ9PDO293N"
        }
      ]
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "Completed the cybersecurity fundamentals course by Cisco.",
      image: require("./assets/images/cisco_logo_large.png"), // شعار Cisco
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/aeadd8a3-6966-4bae-9915-256db4e70629"
        }
      ]
    },
    {
      title: "AI Fundamentals",
      subtitle: "Completed the AI fundamentals course by IBM.",
      image: require("./assets/images/ibm3.png"), // شعار IBM
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/earner/earned/badge/8c37d255-94b1-468f-b72d-5a7063fdef2d"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+213-558506568",
  email_address: "learncrave11@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

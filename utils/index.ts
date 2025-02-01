const teamLeadInfo = [
  {
    id: 1,
    name: "Vineet Babar",
    title: "Product Designer",
    desc: "With 2+ years of experience, he designs strategic, impactful products, working with US startups and Indian agencies.",
    linkedInSrc: "https://www.linkedin.com/in/vineet-babar-2b840923b/",
    profilePicSrc: "/leads/vineet.jpeg",
  },
  {
    id: 2,
    name: "Deepanshu Sharma",
    title: "Application Developer",
    desc: "Passionate Android developer crafting high-performance, user-friendly mobile apps tailored to client needs.",
    linkedInSrc: "https://www.linkedin.com/in/deepanshusharma18/",
    profilePicSrc: "/leads/deepanshu.jpeg",
  },
  {
    id: 3,
    name: "Suyog Angaj",
    title: "Web Developer",
    desc: "Full Stack Developer with Expertise web and cloud technologies. Extensive experience in building scalable web applications .",
    linkedInSrc: "https://www.linkedin.com/in/suyog-angaj-917808202/",
    profilePicSrc: "/leads/suyog.jpg",
  },
  {
    id: 4,
    name: "Himanshu Jagdale",
    title: "Deployment Engineer",
    desc: "Full Stack Developer specializing in web and cloud technologies. GCP certified with expertise in integrating DevOps tools.",
    linkedInSrc: "https://www.linkedin.com/in/himan-miku",
    profilePicSrc: "/leads/himanshu.jpeg",
  },
];

const projectsInfo = [
  {
    id: 1,
    thumbnail: "/work/weddify.png",
    title: "Weddify-Helping users to plan & manage weddings effectively",
    isMobile: true,
    description:
      "effortlessly handle vendor choice to fit your budget ",
    tags: ["Ideation", "Design", "Figma"],
    author: "Vinnet Babar",
    tech: ["Figma"],
    timeRequired: "5 Weeks",
    images: ["/deep-final.png", "/deep1.png", "/deep2.png", "/deep3.png"],
    problems: [
      "Couples impulsively select high-cost vendors initially, leading to budget constraints later. ",
      "Less choices in vendor selection. ",
      "Disjointed vendor interactions, from inquiries to communicating.",
      "Managing guest responses is a manual and stressful process."
    ],
    keyFeat: [
      "Comprehensive Health Records : Users can store a variety of medical documents—prescriptions, reports, diagnosis details, treatment history, and media (videos/images)—all in one place.",
      "Blockchain for Secure Sharing : Built with Solidity, the app ensures tamper less data sharing using blockchain, guaranteeing medical record integrity. This feature enables users to safely share records with healthcare providers, friends, or family.",
      "AI-Powered Health Insights : By integrating Gemini API, Healify analyzes health data and suggests personalized precautions to help prevent potential diseases, turning raw data into actionable insights.",
      "Powerful Backend Architecture : A Golang backend, fully Dockerized, ensures scalability and performance, while deployment on AWS EKS brings cloud-native advantages.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Optimized Data Management : With Prisma and MongoDB, Healify offers fast and efficient data retrieval and management, ensuring a smooth user experience even with large datasets.",
    ],
    approaches: [
      {
        heading: "Single-App Architecture:",
        content:
          "Initially, I considered implementing all features directly within the app to avoid using a separate backend. However, this approach was not scalable and became difficult to maintain, especially for handling large datasets and advanced features.",
      },
      {
        heading: "Full Blockchain Implementation:",
        content:
          "I initially thought of leveraging blockchain for all app functionalities, including storage and AI integration. However, this approach was overly complex and not practical for features requiring fast data retrieval and processing.",
      },
      {
        heading: "Backend Separation:",
        content:
          "To address scalability and maintainability, I introduced a dedicated backend using GoLang. This allowed for modular implementation, better performance, and seamless integration with third-party services like AWS S3 and Gemini API.",
      },
      {
        heading: "Hybrid Data Management:",
        content:
          "Instead of fully relying on blockchain for storage, I used a hybrid approach—blockchain for secure data sharing and AWS S3 for scalable and cost-effective storage of medical records.",
      },
    ],
    githubRepo: "https://github.com/Himan-Miku/elgoog-drive",
  },
  {
    id: 2,
    thumbnail: "/work/Healify.png",
    title: "Healify - Secure Health, Simplified",
    isMobile: true,
    description:
      "Healify is a health records management app to handle medical data",
    tags: ["App Development", "Flutter", "Android", "Blockchain"],
    author: "Deepanshu Sharma",
    tech: ["Android", "Flutter", "Docker", "AWS", "Solidity"],
    timeRequired: "5 Weeks",
    images: ["/workid/healify.png"],
    problems: [
      "Decentralized Storage : Users lack a single platform to securely store and organize their diverse health records.",
      "Data Security and Integrity : Sharing sensitive medical records with healthcare providers, friends, or family often involves insecure methods, raising concerns about privacy and data tampering.",
      "Absence of Health Insights : Without actionable insights, raw medical data fails to empower users to take proactive steps toward disease prevention or better health management.",
      "Cumbersome User Experience : Existing solutions often have clunky interfaces, making it tedious for users to upload, retrieve, and share their records easily.",
      "Lack of Flexibility in Use : Users need a solution that they can independently manage, free of dependencies on hospitals or other healthcare systems.",
    ],
    keyFeat: [
      "Comprehensive Health Records : Users can store a variety of medical documents—prescriptions, reports, diagnosis details, treatment history, and media (videos/images)—all in one place.",
      "Blockchain for Secure Sharing : Built with Solidity, the app ensures tamper less data sharing using blockchain, guaranteeing medical record integrity. This feature enables users to safely share records with healthcare providers, friends, or family.",
      "AI-Powered Health Insights : By integrating Gemini API, Healify analyzes health data and suggests personalized precautions to help prevent potential diseases, turning raw data into actionable insights.",
      "Powerful Backend Architecture : A Golang backend, fully Dockerized, ensures scalability and performance, while deployment on AWS EKS brings cloud-native advantages.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Optimized Data Management : With Prisma and MongoDB, Healify offers fast and efficient data retrieval and management, ensuring a smooth user experience even with large datasets.",
    ],
    approaches: [
      {
        heading: "Single-App Architecture:",
        content:
          "Initially, I considered implementing all features directly within the app to avoid using a separate backend. However, this approach was not scalable and became difficult to maintain, especially for handling large datasets and advanced features.",
      },
      {
        heading: "Full Blockchain Implementation:",
        content:
          "I initially thought of leveraging blockchain for all app functionalities, including storage and AI integration. However, this approach was overly complex and not practical for features requiring fast data retrieval and processing.",
      },
      {
        heading: "Backend Separation:",
        content:
          "To address scalability and maintainability, I introduced a dedicated backend using GoLang. This allowed for modular implementation, better performance, and seamless integration with third-party services like AWS S3 and Gemini API.",
      },
      {
        heading: "Hybrid Data Management:",
        content:
          "Instead of fully relying on blockchain for storage, I used a hybrid approach—blockchain for secure data sharing and AWS S3 for scalable and cost-effective storage of medical records.",
      },
    ],
    githubRepo: "https://github.com/Deepanshu-Sharma-18/Healify",
  },
  {
    id: 3,
    thumbnail: "/work/Noteflix.png",
    title: "Notefliex - Notetaking made easy",
    isMobile: true,
    description:
      "An anime-themed, secure, and scalable note-taking PWA with dynamic management.",
    tags: ["Web Development", "Design", "Deployment", "Docker","AWS"],
    author: "Himanshu Jagadale",
    tech: ["Typescript", "Terraform","Ansible" ,"Docker", "AWS"],
    timeRequired: "5 Weeks",
    images: ["/workid/Noteflix.png"],
    problems: [
      "Lack of Personalization : Most note-taking apps provide generic interfaces, failing to offer users a sense of individuality or creative expression, which can diminish their motivation to use the app regularly.",      "Data Security and Integrity : Sharing sensitive medical records with healthcare providers, friends, or family often involves insecure methods, raising concerns about privacy and data tampering.",
      "Limited Accessibility : Without an integrated cloud solution, users face difficulties accessing their notes across devices securely and reliably.",
      "Tedious User Experience : Complex or cluttered interfaces of existing tools can make organizing, retrieving, and maintaining notes more cumbersome than it should be.",
      "Inadequate Visual Appeal: Conventional note-taking apps overlook the impact of an engaging and visually stimulating environment, which can play a vital role in boosting productivity and creativity.",
    ],
    keyFeat: [
      "Anime-Themed Customization: Tailored anime-inspired backgrounds provide a visually delightful experience, making note-taking enjoyable and motivating.",
      "Seamless Deployment & Scalability: Deployed on Terraform-provisioned AWS EC2 instances, the infrastructure ensures reliability and scalability, capable of handling varying user loads efficiently.",
      "Effortless UI/UX: Built with TypeScript and Next.js, Noteflix offers a sleek and user-friendly interface that simplifies note management without compromising on aesthetics or functionality.",
      "Cloud-Native Infrastructure: The integration of Docker, Terraform, and Ansible ensures seamless provisioning and deployment, allowing for faster iteration and feature rollouts.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Automated CI/CD Pipeline: Leveraging GitHub Actions, the project includes Dockerized builds, continuous testing, and Ansible-driven provisioning for robust and consistent deployments.",
    ],
    approaches: [
      {
        "heading": "Static Frontend Deployment:",
        "content": "Initially, I considered deploying the application as a static site without any server-side rendering or dynamic backend integration. While this approach was simple and fast, it limited functionality like real-time updates, secure storage, and scalable search capabilities."
      },
      {
        "heading": "Client-Side Storage:",
        "content": "I explored using local storage or IndexedDB for saving notes directly on the user’s device. While this provided offline capabilities, it lacked scalability and cross-device synchronization, which are essential for a seamless user experience."
      },
      {
        "heading": "Single-Tier Firebase Integration:",
        "content": "My next approach was to integrate Firebase for both authentication and data storage. While this addressed synchronization and scalability, it didn’t offer flexibility in infrastructure management or allow for customization of the deployment pipeline."
      },
      {
        "heading": "Cloud-Native Architecture with CI/CD:",
        "content": "To ensure a robust, scalable, and automated solution, I adopted a cloud-native architecture. I provisioned an AWS EC2 instance using Terraform and deployed the application using Ansible in a GitHub Actions pipeline. This approach enabled a seamless, Dockerized deployment process with infrastructure as code, making it easy to scale and maintain."
      },
      {
        "heading": "Personalized User Experience:",
        "content": "I designed the app to include dynamic anime-themed backgrounds. Initially, static designs were considered, but switching to a configurable setup allowed users to customize their experience while keeping the interface engaging and user-friendly."
      }
    ],
    
    githubRepo: "https://github.com/Himan-Miku/Noteflix-v.2/",
  },
  {
    id: 4,
    thumbnail: "/work/AiResumeBuilder.png",
    title: "AI Resume Builder - get your resume in sec",
    isMobile: true,
    description:
      "An AI-powered platform for creating personalized, ATS-friendly resumes with ease.",
    tags: ["Web Development", "Design", "Deployment"],
    author: "Suyog Angaj",
    tech: ["Web Development","React","NextJS"],
    timeRequired: "5 Weeks",
    images: ["/workid/AIResume.png"],
    problems: [
      "Time-Consuming Process : Crafting a professional and tailored resume requires extensive time and effort, making the process inefficient for job seekers.",
      "Lack of Personalization : Existing platforms fail to provide tools for creating highly personalized, role-specific resumes that align with individual job requirements.",
      "Difficulty Meeting ATS Standards : Many resumes get rejected by Applicant Tracking Systems due to poor formatting or lack of optimized keywords.",
      "Limited Design Flexibility : Users struggle to balance visual appeal with professionalism due to rigid and generic templates offered by current solutions.",
      "Inconsistent File Formats : Exporting resumes to PDF often results in formatting issues, such as misaligned sections and distorted designs, undermining professionalism."
    ],
    keyFeat: [
     "AI Content Generation : Automatically generate job-specific descriptions, summaries, and skills while suggesting impactful phrases and ATS-friendly keywords.",
  "Customizable Templates : Provide modern, editable templates tailored for different industries with options to personalize colors, fonts, and layouts.",
  "Real-Time Preview : Enable live updates to display as users edit their resumes, ensuring all changes are instantly visible.",
  "PDF Export : Offer professional, text-selectable PDF exports that maintain ATS compatibility and ensure high-quality formatting.",
  "Cloud Save and Accessibility : Allow users to save progress and access resumes anytime through a mobile-friendly, responsive design."
    ],
    approaches: [
      {
        "heading": "Frontend-Centric Architecture",
        "content": "Initially, I considered implementing the entire application using a frontend-only approach with Next.js to simplify development. However, this limited the ability to handle advanced features like user data persistence, AI processing, and notifications effectively."
      },
      {
        "heading": "Direct PDF Generation",
        "content": "I explored directly exporting HTML to PDF on the client-side using libraries like jsPDF. While functional, this approach struggled with maintaining advanced styling and layout precision for complex resume designs."
      },
      {
        "heading": "Efficient State Management",
        "content": "State management on the frontend was optimized to allow real-time updates to the resume preview, ensuring a smooth and responsive user experience."
      },
      {
        "heading": "Customizable Template System",
        "content": "I implemented a centralized template system in the Next.js backend, enabling users to select and customize professionally designed resume templates easily."
      },
      {
        "heading": "Hybrid Storage Strategy",
        "content": "To optimize performance and cost, user-generated resumes are stored in MongoDB for structured data, while finalized PDFs are optionally saved to cloud storage (e.g., AWS S3) for easy retrieval and sharing."
      }
    ]
,    
    githubRepo: "https://ai-resume-builder-snowy.vercel.app/",
  },
  {
    id: 5,
    thumbnail: "/work/AlumniPortal.png",
    title: "Alumni Portal - Connecting Alumni Globally",
    isMobile: true,
    description:
      "A platform for alumni to connect, share updates, and collaborate like a professional network.",
    tags: ["Web Development", "Social Networking", "Community"],
    author: "Suyog Angaj",
    tech: ["Web Development", "React", "NextJS", "Firebase"],
    timeRequired: "6 Weeks",
    images: ["/alumni1.png", "/alumni2.png", "/alumni3.png"],
    problems: [
      "Disconnected Alumni Network : Alumni often lose touch with their college network due to a lack of centralized and accessible platforms.",
      "Limited Collaboration Opportunities : Existing platforms fail to provide tools for professional collaboration and mentorship between alumni.",
      "No Unified Feed : Alumni miss a dedicated space to share updates, achievements, and job opportunities with their college peers.",
      "Difficulty Finding College Mates : Finding and connecting with former classmates or colleagues is cumbersome without an optimized search and reach-out feature.",
      "Scattered Communication : Alumni rely on fragmented channels for communication, leading to a lack of organized interaction and engagement."
    ],
    keyFeat: [
      "Centralized Alumni Directory : Provide a searchable directory to help alumni find and connect with former classmates and colleagues effortlessly.",
      "Social Feed : Enable users to share updates, achievements, and job opportunities through a dedicated feed, fostering engagement and collaboration.",
      "Private Messaging : Allow secure and direct communication between alumni for personal or professional outreach.",
      "Event Management : Facilitate the creation, sharing, and participation in alumni events and reunions directly through the platform.",
      "Mobile-Friendly Design : Ensure seamless access across devices with a responsive and mobile-friendly interface."
    ],
    approaches: [
      {
        "heading": "Frontend-Centric Development",
        "content": "Initially, I considered building the platform entirely on the frontend with Next.js to simplify development. However, this approach struggled to support features like real-time updates, authentication, and data storage efficiently."
      },
      {
        "heading": "Real-Time Database Integration",
        "content": "Firebase was used to enable real-time updates for the social feed, messaging, and event management, ensuring dynamic and instant interactions among users."
      },
      {
        "heading": "Optimized Search Functionality",
        "content": "An advanced search system was implemented to allow users to find alumni based on name, graduation year, or professional field easily."
      },
      {
        "heading": "Customizable Profiles",
        "content": "User profiles were designed to include customizable sections for personal, academic, and professional details, ensuring a rich networking experience."
      },
      {
        "heading": "Secure and Scalable Backend",
        "content": "A secure backend with Firebase Authentication and Firestore was implemented to handle user data, enable privacy controls, and ensure scalability for a growing user base."
      }
    ],
    githubRepo: "https://alumni-portal-connect.vercel.app/"
  }
  ,
  {
    id: 6,
    thumbnail: "/work/Aspira.png",
    title: "Aspira-Job Portal ",
    isMobile: true,
    description:
      " platform that bridges job seekers and employers",
    tags: ["UI/UX","Design"],
    author: "Vinnet Baber",
    tech: ["Android", "Flutter", "Docker", "AWS", "Solidity"],
    timeRequired: "5 Weeks",
    images: ["/deep1.png", "/deep2.png", "/deep3.png"],
    problems: [
      "Decentralized Storage : Users lack a single platform to securely store and organize their diverse health records.",
      "Data Security and Integrity : Sharing sensitive medical records with healthcare providers, friends, or family often involves insecure methods, raising concerns about privacy and data tampering.",
      "Absence of Health Insights : Without actionable insights, raw medical data fails to empower users to take proactive steps toward disease prevention or better health management.",
      "Cumbersome User Experience : Existing solutions often have clunky interfaces, making it tedious for users to upload, retrieve, and share their records easily.",
      "Lack of Flexibility in Use : Users need a solution that they can independently manage, free of dependencies on hospitals or other healthcare systems.",
    ],
    keyFeat: [
      "Comprehensive Health Records : Users can store a variety of medical documents—prescriptions, reports, diagnosis details, treatment history, and media (videos/images)—all in one place.",
      "Blockchain for Secure Sharing : Built with Solidity, the app ensures tamper less data sharing using blockchain, guaranteeing medical record integrity. This feature enables users to safely share records with healthcare providers, friends, or family.",
      "AI-Powered Health Insights : By integrating Gemini API, Healify analyzes health data and suggests personalized precautions to help prevent potential diseases, turning raw data into actionable insights.",
      "Powerful Backend Architecture : A Golang backend, fully Dockerized, ensures scalability and performance, while deployment on AWS EKS brings cloud-native advantages.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Optimized Data Management : With Prisma and MongoDB, Healify offers fast and efficient data retrieval and management, ensuring a smooth user experience even with large datasets.",
    ],
    approaches: [
      {
        heading: "Single-App Architecture:",
        content:
          "Initially, I considered implementing all features directly within the app to avoid using a separate backend. However, this approach was not scalable and became difficult to maintain, especially for handling large datasets and advanced features.",
      },
      {
        heading: "Full Blockchain Implementation:",
        content:
          "I initially thought of leveraging blockchain for all app functionalities, including storage and AI integration. However, this approach was overly complex and not practical for features requiring fast data retrieval and processing.",
      },
      {
        heading: "Backend Separation:",
        content:
          "To address scalability and maintainability, I introduced a dedicated backend using GoLang. This allowed for modular implementation, better performance, and seamless integration with third-party services like AWS S3 and Gemini API.",
      },
      {
        heading: "Hybrid Data Management:",
        content:
          "Instead of fully relying on blockchain for storage, I used a hybrid approach—blockchain for secure data sharing and AWS S3 for scalable and cost-effective storage of medical records.",
      },
    ],
    githubRepo: "https://github.com/Himan-Miku/elgoog-drive",
  },
];

export { teamLeadInfo, projectsInfo };

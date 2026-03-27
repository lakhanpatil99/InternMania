import './Internships.css';

const internshipData = [
    {
        id: 1,
        title: "Web Development Internship",
        description: "Build modern responsive websites using HTML, CSS, React, and Node.js.",
        price: "₹1,999",
        duration: "4 Weeks",
        icon: "🌐",
        tags: ["React", "HTML/CSS", "JavaScript"]
    },
    {
        id: 2,
        title: "App Development Internship",
        description: "Create cross-platform mobile apps with Flutter, React Native, or Kotlin.",
        price: "₹2,499",
        duration: "6 Weeks",
        icon: "📱",
        tags: ["Flutter", "React Native", "Kotlin"]
    },
    {
        id: 3,
        title: "Data Science Internship",
        description: "Analyze datasets, build ML models, and master Python for data science.",
        price: "₹1,999",
        duration: "4 Weeks",
        icon: "📊",
        tags: ["Python", "Pandas", "Machine Learning"]
    },
    {
        id: 4,
        title: "Artificial Intelligence Internship",
        description: "Explore neural networks, deep learning, NLP, and computer vision.",
        price: "₹2,999",
        duration: "6 Weeks",
        icon: "🤖",
        tags: ["AI", "Deep Learning", "TensorFlow"]
    },
    {
        id: 5,
        title: "Cybersecurity Internship",
        description: "Learn ethical hacking, penetration testing, and security auditing.",
        price: "₹2,499",
        duration: "4 Weeks",
        icon: "🔒",
        tags: ["Ethical Hacking", "VAPT", "Security"]
    },
    {
        id: 6,
        title: "Digital Marketing Internship",
        description: "Master SEO, social media marketing, Google Ads, and content strategy.",
        price: "₹1,499",
        duration: "4 Weeks",
        icon: "📣",
        tags: ["SEO", "Social Media", "Google Ads"]
    },
    {
        id: 7,
        title: "Video Editing Internship",
        description: "Learn professional video editing using Premiere Pro, After Effects & DaVinci.",
        price: "₹1,499",
        duration: "4 Weeks",
        icon: "🎬",
        tags: ["Premiere Pro", "After Effects", "Editing"]
    },
    {
        id: 8,
        title: "Graphic Design Internship",
        description: "Design logos, branding, social media posts using Photoshop, Illustrator & Canva.",
        price: "₹1,499",
        duration: "4 Weeks",
        icon: "🎨",
        tags: ["Photoshop", "Illustrator", "Canva"]
    },
    {
        id: 9,
        title: "IT Support & Networking",
        description: "Master computer hardware, networking fundamentals, and IT infrastructure.",
        price: "₹1,499",
        duration: "4 Weeks",
        icon: "🖥️",
        tags: ["Networking", "IT Support", "Hardware"]
    },
    {
        id: 10,
        title: "UI/UX Design Internship",
        description: "Design stunning user interfaces and experiences using Figma & Adobe XD.",
        price: "₹1,999",
        duration: "4 Weeks",
        icon: "✏️",
        tags: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
        id: 11,
        title: "Cloud Computing Internship",
        description: "Deploy and manage applications on AWS, Azure, and Google Cloud.",
        price: "₹2,499",
        duration: "6 Weeks",
        icon: "☁️",
        tags: ["AWS", "Azure", "DevOps"]
    },
    {
        id: 12,
        title: "Robotics & IoT Internship",
        description: "Build embedded systems, sensors, and IoT projects with Arduino & Raspberry Pi.",
        price: "₹2,499",
        duration: "6 Weeks",
        icon: "🤖",
        tags: ["Arduino", "IoT", "Raspberry Pi"]
    },
    {
        id: 13,
        title: "MBA & Business Analytics",
        description: "Learn business strategy, market analysis, Excel modelling, and financial planning.",
        price: "₹1,999",
        duration: "4 Weeks",
        icon: "📈",
        tags: ["Business", "Analytics", "Finance"]
    },
    {
        id: 14,
        title: "Content Writing Internship",
        description: "Master blog writing, copywriting, technical writing, and SEO content creation.",
        price: "₹999",
        duration: "4 Weeks",
        icon: "✍️",
        tags: ["Blogging", "Copywriting", "SEO Writing"]
    },
    {
        id: 15,
        title: "Python Programming Internship",
        description: "Learn Python from basics to advanced — automation, scripting, and frameworks.",
        price: "₹1,499",
        duration: "4 Weeks",
        icon: "🐍",
        tags: ["Python", "Django", "Automation"]
    },
    {
        id: 16,
        title: "Java Development Internship",
        description: "Build enterprise apps using Core Java, Spring Boot, and Hibernate.",
        price: "₹1,999",
        duration: "4 Weeks",
        icon: "☕",
        tags: ["Java", "Spring Boot", "Hibernate"]
    }
];

const Internships = () => {
    return (
        <section id="internships" className="internships-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Choose Your <span className="text-gradient">Internship Program</span></h2>
                    <p className="section-subtitle">Select your domain, complete the tasks, and receive your verified internship certificate & offer letter.</p>
                    <div className="logo-strip-wrapper">
                        <div className="logo-strip">
                            <img src="/logos/aicte.png" alt="AICTE Approved" className="strip-logo" />
                            <img src="/logos/iso.png" alt="ISO 9001:2015" className="strip-logo" />
                            <img src="/logos/msme.png" alt="MSME Registered" className="strip-logo" />
                            <img src="/logos/mca.png" alt="MCA Recognized" className="strip-logo" />
                            <img src="/logos/gim.png" alt="Get Intern Mania" className="strip-logo" />
                            {/* Duplicate for seamless scroll */}
                            <img src="/logos/aicte.png" alt="AICTE" className="strip-logo" />
                            <img src="/logos/iso.png" alt="ISO" className="strip-logo" />
                            <img src="/logos/msme.png" alt="MSME" className="strip-logo" />
                            <img src="/logos/mca.png" alt="MCA" className="strip-logo" />
                            <img src="/logos/gim.png" alt="GIM" className="strip-logo" />
                        </div>
                    </div>
                </div>
                
                <div className="internships-grid">
                    {internshipData.map(intern => (
                        <div key={intern.id} className="internship-card glass-panel">
                            <div className="intern-icon-wrapper">
                                <span className="intern-icon">{intern.icon}</span>
                            </div>
                            <h3 className="internship-title">{intern.title}</h3>
                            <p className="intern-desc">{intern.description}</p>
                            
                            <div className="internship-tags">
                                {intern.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="internship-meta">
                                <span className="meta-duration">📅 {intern.duration}</span>
                                <span className="meta-price">{intern.price}</span>
                            </div>
                            
                            <a 
                                href={`https://wa.me/919325490236?text=Hi%20Intern%20Mania,%20I%20want%20to%20get%20${encodeURIComponent(intern.title)}%20certificate`}
                                className="btn btn-primary full-width get-cert-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get Certificate →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;

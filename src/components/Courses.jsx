import './Courses.css';

const coursesData = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description: "Master MERN stack from scratch. Build real-world projects and get hands-on experience.",
        icon: "💻",
        tags: ["React", "Node.js", "MongoDB"],
        price: "₹2,999",
        originalPrice: "₹5,999"
    },
    {
        id: 2,
        title: "Data Science & Machine Learning",
        description: "Learn Python, Pandas, Machine Learning algorithms, and data visualization techniques.",
        icon: "📊",
        tags: ["Python", "ML", "Data Analysis"],
        price: "₹3,499",
        originalPrice: "₹6,999"
    },
    {
        id: 3,
        title: "UI/UX Design Masterclass",
        description: "Become a professional designer using Figma, Adobe XD, and modern design principles.",
        icon: "🎨",
        tags: ["Figma", "UI/UX", "Prototyping"],
        price: "₹1,999",
        originalPrice: "₹3,999"
    }
];

const Courses = () => {
    return (
        <section id="courses" className="courses-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Explore Our <span className="text-gradient">Top Courses</span></h2>
                    <p className="section-subtitle">Upgrade your skills with our industry-relevant, project-based courses.</p>
                </div>
                
                <div className="courses-grid">
                    {coursesData.map(course => (
                        <div key={course.id} className="course-card glass-panel">
                            <div className="course-icon">{course.icon}</div>
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc">{course.description}</p>
                            
                            <div className="course-tags">
                                {course.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            
                            <div className="course-footer">
                                <div className="course-price">
                                    <span className="current-price">{course.price}</span>
                                    <span className="original-price">{course.originalPrice}</span>
                                </div>
                                <button className="btn btn-primary btn-sm">Enroll Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;

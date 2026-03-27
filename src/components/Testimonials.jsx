import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Software Engineer at Tech Mahindra",
        image: "RS",
        text: "Get Intern Mania's Full Stack curriculum is simply amazing. The hands-on projects helped me crack my first tech interview."
    },
    {
        id: 2,
        name: "Priya Desai",
        role: "UX Designer",
        image: "PD",
        text: "The UI/UX coursework was extremely practical. I landed a great internship offer right after completing the certification."
    },
    {
        id: 3,
        name: "Amit Kumar",
        role: "Data Analyst",
        image: "AK",
        text: "Thanks to the Data Science internship program, I got real-world exposure to datasets and successfully transitioned into a data role."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Success <span className="text-gradient">Stories</span></h2>
                    <p className="section-subtitle">Hear from our alumni who transformed their careers.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card glass-panel">
                            <div className="quote-icon">“</div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.image}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-role">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

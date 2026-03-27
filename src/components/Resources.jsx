import './Resources.css';

const resourcesData = [
    {
        id: 1,
        title: "Ultimate Frontend Guide",
        type: "E-Book",
        icon: "📘",
        desc: "A comprehensive guide to modern frontend technologies and interview preparation.",
        link: "#"
    },
    {
        id: 2,
        title: "ATS-Friendly Resume Template",
        type: "Template",
        icon: "📄",
        desc: "Download our proven resume template to increase your chances of getting shortlisted.",
        link: "#"
    },
    {
        id: 3,
        title: "System Design Essentials",
        type: "Video Series",
        icon: "🎥",
        desc: "Learn how to design scalable systems for top product-based companies.",
        link: "#"
    }
];

const Resources = () => {
    return (
        <section id="resources" className="resources-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Free <span className="text-gradient">Resources</span></h2>
                    <p className="section-subtitle">Boost your preparation with our curated list of free guides, templates, and videos.</p>
                </div>

                <div className="resources-grid">
                    {resourcesData.map(res => (
                        <div key={res.id} className="resource-card glass-panel">
                            <div className="resource-icon-wrapper">
                                <span className="resource-icon">{res.icon}</span>
                            </div>
                            <div className="resource-content">
                                <span className="resource-type">{res.type}</span>
                                <h3 className="resource-title">{res.title}</h3>
                                <p className="resource-desc">{res.desc}</p>
                                <a href={res.link} className="resource-link">
                                    Download / View <span className="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;

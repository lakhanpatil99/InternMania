import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
            </div>
            
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Get Industry-Recognized <br/>
                        <span className="text-gradient">Internship Certificates</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        Complete your internship and receive a verified certificate instantly.
                    </p>
                    
                    <div className="hero-actions">
                        <a href="#internships" className="btn btn-primary hero-btn">Explore Internships</a>
                    </div>
                    
                    <div className="hero-stats">
                        <div className="stat-item glass-panel">
                            <h3 className="stat-number text-gradient">100,000+</h3>
                            <p className="stat-label">Students</p>
                        </div>
                        <div className="stat-item glass-panel">
                            <h3 className="stat-number text-gradient">50,000+</h3>
                            <p className="stat-label">Certificates Issued</p>
                        </div>
                    </div>
                </div>
                
                <div className="hero-visual">
                    {/* A conceptual illustration */}
                    <div className="hero-illustration glass-panel">
                        <div className="code-window">
                            <div className="window-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="window-body">
                                <code>
                                    <span className="code-keyword">import</span> {'{'} InternMania {'}'} <span className="code-keyword">from</span> <span className="code-string">'future'</span>;<br/>
                                    <br/>
                                    <span className="code-keyword">const</span> <span className="code-function">buildCareer</span> = () =&gt; {'{'}<br/>
                                    &nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-string">"Success"</span>;<br/>
                                    {'}'};<br/>
                                    <br/>
                                    <span className="code-function">buildCareer</span>();
                                </code>
                            </div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="floating-badge badge-1 glass-panel">
                            <span className="badge-icon">⭐</span>
                            <div className="badge-text">
                                <strong>Top Rated</strong>
                                <span>Platform</span>
                            </div>
                        </div>
                        
                        <div className="floating-badge badge-2 glass-panel">
                            <span className="badge-icon">🎓</span>
                            <div className="badge-text">
                                <strong>Verified</strong>
                                <span>Certificates</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

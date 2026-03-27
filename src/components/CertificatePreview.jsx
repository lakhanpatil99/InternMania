import { useState } from 'react';
import './CertificatePreview.css';

const CertificatePreview = () => {
    const [activeTab, setActiveTab] = useState('certificate');

    return (
        <section id="certificates" className="cert-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Verified <span className="text-gradient">Credentials</span></h2>
                    <p className="section-subtitle">Professional certificates & offer letters to boost your career.</p>
                </div>

                {/* Tab Buttons */}
                <div className="doc-tabs">
                    <button 
                        className={`doc-tab ${activeTab === 'certificate' ? 'active' : ''}`}
                        onClick={() => setActiveTab('certificate')}
                    >
                        📜 Certificate
                    </button>
                    <button 
                        className={`doc-tab ${activeTab === 'offer' ? 'active' : ''}`}
                        onClick={() => setActiveTab('offer')}
                    >
                        📄 Offer Letter
                    </button>
                </div>

                {/* Document Preview — Scaled A4 */}
                <div className="doc-preview-wrapper">
                    <div className="doc-preview-container">
                        {activeTab === 'certificate' && (
                            <div className="a4-document certificate-a4">
                                {/* Corner triangles */}
                                <div className="tri tri-tl"></div>
                                <div className="tri tri-tr"></div>
                                <div className="tri tri-bl"></div>
                                <div className="tri tri-br"></div>

                                {/* Inner border */}
                                <div className="a4-inner-border">
                                    {/* Header */}
                                    <div className="doc-header-row">
                                        <div className="doc-cert-id">
                                            <small>CERT I'D:</small>
                                            <strong>2025/GIM-1063</strong>
                                        </div>
                                        
                                        <div className="doc-brand">
                                            <div className="brand-circle">🎓</div>
                                            <div className="brand-label">Get Intern Mania</div>
                                        </div>

                                        <div className="doc-badges-group">
                                            <img src="/logos/aicte.png" alt="AICTE Approved" className="logo-img aicte-img" />
                                            <img src="/logos/iso.png" alt="ISO 9001:2015" className="logo-img iso-img" />
                                        </div>
                                    </div>

                                    {/* Gold Ribbon */}
                                    <div className="cert-ribbon">
                                        <div className="ribbon-flag">
                                            <div className="ribbon-star">★</div>
                                            <span>CERTIFIED</span>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="doc-body">
                                        <h1 className="doc-main-heading">CERTIFICATE OF INTERNSHIP</h1>
                                        <p className="doc-sub-line">This Internship Certificate is proudly awarded to</p>
                                        <h2 className="doc-student-name">Sushant Yadav</h2>
                                        
                                        <div className="gold-rule">
                                            <span className="gr-line"></span>
                                            <span className="gr-gem">◆</span>
                                            <span className="gr-line"></span>
                                        </div>

                                        <p className="doc-desc">
                                            For Successfully Completing <strong>Web Development</strong> Internship Program
                                            at <em>Get Intern Mania</em> From <strong>10/09/2024</strong> to <strong>10/10/2024</strong>.
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="doc-foot-row">
                                        <div className="sign-col">
                                            <div className="handwrite">Lakhansing Patil</div>
                                            <div className="sign-bar"></div>
                                            <div className="sign-label">CEO & FOUNDER</div>
                                        </div>

                                        <div className="seal-col">
                                            <img src="/logos/gim.png" alt="GIM Seal" className="seal-img" />
                                        </div>

                                        <div className="qr-col">
                                            <div className="qr-frame">
                                                <div className="qr-blocks">
                                                    {[...Array(49)].map((_, i) => (
                                                        <div key={i} className={`qb ${Math.random() > 0.4 ? 'd' : 'l'}`}></div>
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="qr-caption">Scan to Verify</span>
                                        </div>
                                    </div>

                                    <div className="extra-cred-row">
                                        <img src="/logos/msme.png" alt="MSME" className="extra-logo" />
                                        <img src="/logos/mca.png" alt="MCA" className="extra-logo" />
                                        <span>🌐 getinternmania.com</span>
                                    </div>
                                </div>

                                {/* URL bar */}
                                <div className="doc-url-strip">www.getinternmania.com</div>
                            </div>
                        )}

                        {activeTab === 'offer' && (
                            <div className="a4-document offer-a4">
                                {/* Left accent */}
                                <div className="offer-accent-bar"></div>
                                {/* Watermark */}
                                <div className="offer-wm-text">Get Intern Mania</div>

                                <div className="offer-inner">
                                    {/* Letterhead */}
                                    <div className="offer-lh-section">
                                        <div className="brand-circle sm-circle">🎓</div>
                                        <div className="brand-label">Get Intern Mania</div>
                                        <div className="lh-gradient-line"></div>
                                    </div>

                                    <h1 className="offer-big-title">INTERNSHIP OFFER LETTER</h1>

                                    <div className="offer-info-row">
                                        <div>
                                            <p><strong>Name :</strong> Riddhi Gupta</p>
                                            <p><strong>Ref No.-</strong> GIM25/3257</p>
                                        </div>
                                        <div className="offer-info-right">
                                            <p><strong>Date:</strong></p>
                                            <p>January 12, 2025</p>
                                        </div>
                                    </div>

                                    <div className="offer-letter-body">
                                        <p><em>Dear Riddhi,</em></p>
                                        <p>We are delighted to offer you the position of <strong>Social Media Marketing Executive</strong> at <strong>Get Intern Mania</strong>. Your skills, creativity, and enthusiasm have impressed us, and we are confident that you will be a valuable asset to our team.</p>
                                        <p>In this role, your key responsibilities will include:</p>
                                        <ul>
                                            <li>Developing and managing innovative social media strategies.</li>
                                            <li>Creating engaging content to enhance our brand presence.</li>
                                            <li>Monitoring and analyzing the performance of campaigns.</li>
                                            <li>Staying updated with latest trends and best practices.</li>
                                        </ul>
                                        <p>This position will begin on <strong>January 15th, 2025</strong> and will end on <strong>April 15th, 2025</strong>, making it a 3-month duration. Your compensation will be performance-based.</p>
                                        <p>Upon successful completion, you will receive a <strong>Certificate of Completion</strong> recognizing your skills and achievements.</p>
                                        <p className="offer-closing">Best Regards,</p>
                                    </div>

                                    {/* Signature + QR */}
                                    <div className="offer-sig-row">
                                        <div>
                                            <div className="handwrite offer-sig-hw">Lakhansing Patil</div>
                                            <div className="sign-label">CEO & FOUNDER</div>
                                        </div>
                                        <div className="qr-frame sm-qr">
                                            <div className="qr-blocks">
                                                {[...Array(49)].map((_, i) => (
                                                    <div key={i} className={`qb ${Math.random() > 0.4 ? 'd' : 'l'}`}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="offer-badge-strip">
                                        <img src="/logos/aicte.png" alt="AICTE" className="logo-img-sm" />
                                        <img src="/logos/iso.png" alt="ISO" className="logo-img-sm" />
                                        <img src="/logos/msme.png" alt="MSME" className="logo-img-sm" />
                                        <img src="/logos/mca.png" alt="MCA" className="logo-img-sm" />
                                        <img src="/logos/gim.png" alt="GIM" className="logo-img-sm" />
                                    </div>

                                    {/* Contact bar */}
                                    <div className="offer-contact">
                                        <span>📞 +91 93254 90236</span>
                                        <span>✉️ info@getinternmania.com</span>
                                        <span>📍 Maharashtra, India</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Features + CTAs below the preview */}
                <div className="cred-features">
                    <div className="cf-item">
                        <span>🛡️</span>
                        <div>
                            <strong>AICTE & ISO Certified</strong>
                            <p>Maximum industry credibility</p>
                        </div>
                    </div>
                    <div className="cf-item">
                        <span>📱</span>
                        <div>
                            <strong>QR Verification</strong>
                            <p>Instant scan-to-verify</p>
                        </div>
                    </div>
                    <div className="cf-item">
                        <span>✍️</span>
                        <div>
                            <strong>CEO Signed</strong>
                            <p>By Lakhansing Patil</p>
                        </div>
                    </div>
                    <div className="cf-item">
                        <span>🏛️</span>
                        <div>
                            <strong>Govt. Recognized</strong>
                            <p>MSME & MCA registered</p>
                        </div>
                    </div>
                </div>

                <div className="cred-cta-row">
                    <button className="btn btn-primary">⬇️ Download Sample</button>
                    <a 
                        href="https://wa.me/919325490236?text=Hi%20Intern%20Mania,%20I%20want%20to%20get%20an%20internship%20offer%20letter" 
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📄 Get Your Offer Letter
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CertificatePreview;

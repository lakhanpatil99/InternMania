import Header from './components/Header';
import Hero from './components/Hero';
import Internships from './components/Internships';
import CertificatePreview from './components/CertificatePreview';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Internships />
        <CertificatePreview />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App;

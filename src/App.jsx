import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leasing from './components/Leasing';   // новый раздел
import Catalog from './components/Catalog';
import Partners from './components/Partners';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Leasing />   {/* сразу после героя */}
        <Catalog />
        <Partners />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
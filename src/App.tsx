import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './App.css';

export function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

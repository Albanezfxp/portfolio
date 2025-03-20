import './Contact.css';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <AnimatedSection className="contact" id="contact">
      <div className="contact-content">
        <AnimatedSection direction="down">
          <h2>Vamos Conversar</h2>
          <p className="contact-intro">
            Interessado em discutir oportunidades ou parcerias? Entre em contato!
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Seu nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu.email@exemplo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" placeholder="Sua mensagem" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensagem
            </motion.button>
          </form>
        </AnimatedSection>

        <AnimatedSection className="contact-info" direction="up" delay={0.4}>
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:gabrielalbanez2701@gmail.com" target="_blank" rel="noopener noreferrer">
              gabrielalbanez2701@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <a href="hhttps://github.com/Albanezfxp" target="_blank" rel="noopener noreferrer">
              github.com/Albanezfxp
            </a>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/gabriel-albanez-801820262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gabriel-albanez
            </a>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}

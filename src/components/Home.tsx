import './Home.css';
import { motion } from 'framer-motion';
import foto from '../assets/1726097471251.jpeg';
import curriculo from '../../public/CurriculoGabrielAlbanez2002.pdf';

export function Home() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const uploadCv = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const link = curriculo;
    const a = document.createElement('a');
    a.href = link;
    a.download = 'Curriculo_Gabriel_Albanez.pdf'; // Nome do arquivo ao ser baixado
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <motion.div
          className="profile-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>Olá, eu sou Gabriel Albanez</h1>
          <p>
            Apaixonado por criar experiências digitais incríveis e transformar ideias em realidade
            através do código.
          </p>
          <motion.a
            href="#contact"
            className="button"
            onClick={handleScrollToContact}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Vamos conversar
          </motion.a>
        </motion.div>

        <motion.div
          className="profile-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={foto} alt="Gabriel" className="profile-photo" />
        </motion.div>
      </div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-content">
          <h2>Sobre Mim</h2>

          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>
                Desenvolvedor Full Stack com experiência em front-end e back-end, especializado na
                criação de aplicações responsivas e escaláveis utilizando tecnologias como React,
                Node.js, TypeScript e NestJS. Possuo habilidades na integração de APIs RESTful,
                gerenciamento de bancos de dados relacionais (MySQL, PostgreSQL) e conhecimento em
                ferramentas como TypeORM para otimização de processos. Comprometido com a entrega de
                soluções de alta qualidade, sempre focado em resultados que geram impacto. Valorizo
                o aprendizado contínuo e acompanho as tendências do mercado para aplicar inovação e
                boas práticas em meus projetos.
              </p>

              <button id="buttonCv" onClick={uploadCv}>
                Baixar cv
              </button>
            </motion.div>

            <motion.div
              className="skills"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3>Habilidades</h3>
              <ul className="skills-list">
                <li>Java</li>
                <li>Javascript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Spring Boot</li>
                <li>NodeJs</li>
                <li>Prisma</li>
                <li>NestJs</li>
                <li>SQL</li>
                <li>Git & GitHub</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

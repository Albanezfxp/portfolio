import './Projects.css';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
import backEndEcomerce from '../assets/backEndE-comerce.png';
import campanhaMarketing from '../assets/campanhaMarketingDigital.png';
import pizzaria from '../assets/image.png';
import financas from '../assets/financas.png';
import gestorEstoque from '../assets/gestorDeEstoque.png';
import furiaImg from "../assets/imageChat.png"
import rhDashboardImg from "../assets/rhImageDashboard.png"

export function Projects() {
  const projects = [
    {
      title: 'RH Dashboard',
      description:
        'Dashboard para RH com React, Chart.js e Axios no front-end, integrando uma API em NestJS com Prisma no back-end. Utilizeis views no banco de dados para otimizar consultas e exibir dados como funcionários, cargos, férias e avaliações. O projeto reforçou meus conhecimentos em arquitetura backend, visualização de dados e experiência do usuário.',
      image: rhDashboardImg,
      technologies: ['React', "NestJS", "ChartJs", "PrismaORM", "Postgres", "Axios"],
      github: 'https://github.com/Albanezfxp/rh_dashboard',
      live: "https://www.linkedin.com/posts/gabriel-albanez-801820262_dashboard-para-rh-sistema-de-gest%C3%A3o-activity-7339148515127799808-NPb7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECMpoEB6ldYr7kqKjxFoa5C4aX1o5HKdHk"
      
    },
    {
      title: 'Furia ChatBot',
      description:
        'Este projeto combina tecnologias modernas para criar uma experiência de chat envolvente para fãs da Fúria, com um chatbot único e funcionalidades de mensagens em tempo real e IA voltada para o time de CS:GO da Furia. A arquitetura foi projetada para ser escalável e manterável, com clara separação de responsabilidades entre os componentes.',
      image: furiaImg,
      technologies: ['React', "NestJS", "Docker", "PrismaORM"],
      github: 'https://github.com/Albanezfxp/furia_project',
      live: "https://www.linkedin.com/posts/gabriel-albanez-801820262_chat-em-tempo-real-para-a-furia-esports-desenvolvi-activity-7325096965577326593-JNZ1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECMpoEB6ldYr7kqKjxFoa5C4aX1o5HKdHk"
    },
       {
      title: 'Pizzaria Mil Graus',
      description:
        'Landing page para pizzaria com cardápio digital, localização no mapa, promoções especiais e informações de contato.',
      image: pizzaria,
      technologies: ['React', 'CSS'],
      github: 'https://github.com/Albanezfxp/pizzaria_mil_graus',
      live: 'https://albanezfxp.github.io/pizzaria_mil_graus',
    },
    {
      title: 'Finanças Pessoais',
      description:
        'Aplicação para controle de finanças pessoais com API simulada usando json-server. Permite gerenciar receitas, despesas e acompanhar o orçamento.',
      image: financas,
      technologies: ['JavaScript', 'HTML', 'CSS', 'JSON Server'],
      github: 'https://github.com/Albanezfxp/Finan-as-Pessoais',
      live: 'https://albanezfxp.github.io/Finan-as-Pessoais/',
    },
    {
      title: 'Gestor de Estoque',
      description:
        'Sistema de gestão de estoque desenvolvido com React e TypeScript. Oferece controle de produtos, movimentações e relatórios gerenciais.',
      image: gestorEstoque,
      technologies: ['React', 'TypeScript',"NestJs", 'CSS', 'Vite'],
      github: 'https://github.com/Albanezfxp/Gestor-de-Estoque',
      live: '#',
    },
    {
      title: 'Api E-commerce',
      description:
        'Backend para e-commerce com NestJS, Prisma e PostgreSQL. Sistema completo com autenticação JWT, gestão de produtos, carrinho, pagamentos via Stripe e área administrativa.',
      image: backEndEcomerce,
      technologies: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/Albanezfxp/E-comerce_backEnd',
      live: '#',
    },
    {
      title: 'Api para gerencimaneto de campanhas de marketing digital',
      description:
        'Sistema de gerenciamento de campanhas de marketing digital desenvolvido com Prisma, PostgreSQL e Zod. Implementa validação de dados, modelagem relacional e análise de métricas em tempo real. Permite gestão completa do ciclo de campanhas, desde planejamento até resultados.',
      image: campanhaMarketing,
      technologies: ['Node.js', 'PostgreSQL', 'Express', 'React'],
      github: 'https://github.com/Albanezfxp/Api_de_gerenciamento_De_Leads',
      live: '#',
    },
  ];

  return (
    <AnimatedSection className="projects" id="projects">
      <div className="projects-content">
        <AnimatedSection direction="down">
          <h2>Projetos</h2>
        </AnimatedSection>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              direction="up"
              delay={index * 0.2}
              className="project-card"
            >
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

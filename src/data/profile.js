// MOCK: substituir pelos dados reais quando estiverem definidos
export const profile = {
  initials: 'GA',
  name: 'Gabriel Albanez',
  role: 'Desenvolvedor Full Stack',
  location: 'João Pessoa, Brasil',
  locationShort: 'João Pessoa, PB',
  year: '2026',
  heroTag: 'DEV',
}

export const navLinks = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Certificações', href: '#certificacoes' },
  { label: 'Contato', href: '#contato' },
]

export const about =
  'Sou um desenvolvedor full stack curioso e dedicado, com 3 anos de experiência prática construindo aplicações com Java (Spring Boot), Node.js (NestJS), TypeScript e React. Projeto APIs limpas, apps mobile e interfaces que unem boa arquitetura a uma experiência cuidadosa para quem usa.'

export const contactLinks = [
  { label: 'Email', value: 'gabrielalbanez2701@gmail.com', href: 'mailto:gabrielalbanez2701@gmail.com', icon: '↗' },
  {
    label: 'LinkedIn',
    value: 'gabriel-albanez',
    href: 'https://www.linkedin.com/in/gabriel-albanez-801820262/',
    external: true,
    icon: '↗',
  },
  { label: 'GitHub', value: 'Albanezfxp', href: 'https://github.com/Albanezfxp', external: true, icon: '↗' },
  // PDF em public/; `download` define o nome do arquivo salvo
  {
    label: 'Currículo',
    value: 'Baixar PDF',
    href: '/Gabriel-Albanez-Curriculo.pdf',
    download: 'Gabriel-Albanez-Curriculo.pdf',
    icon: '↓',
  },
]

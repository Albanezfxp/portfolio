// Capas: coloque o arquivo em public/projects/<slug>.webp (ou ajuste `cover`).
// Se o arquivo não existir, o card mostra um placeholder (gradiente + iniciais).
// `url: null` exibe o selo "Em andamento" no lugar do botão.
export const projects = [
  {
    id: 'automarket',
    title: 'AutoMarket',
    description:
      'Sistema white-label para lojas de veículos usados: cada loja recebe site público com catálogo e painel admin com métricas de vendas e contatos.',
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'TypeScript'],
    url: 'https://automarket-navy-ten.vercel.app',
    cover: '/projects/automarket.webp',
    gradient: ['#0f1f3d', '#3b82f6'],
  },
  {
    id: 'blinkmarket',
    title: 'BlinkMarket',
    description:
      'E-commerce full stack com catálogo de produtos, carrinho, checkout e painel administrativo para gestão de produtos e vendas.',
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'TypeScript'],
    url: null,
    cover: '/projects/blinkmarket.webp',
    gradient: ['#2a1346', '#ff6ad5'],
  },
  {
    id: 'pdv-pizzaria',
    title: 'PDV System',
    description:
      'Ponto de venda para pizzaria com controle de mesas, pedidos de delivery, cardápio por categorias, clientes e histórico de vendas.',
    stack: ['Spring Boot', 'Java 17', 'PostgreSQL', 'Flyway', 'React', 'Docker'],
    url: 'https://pizzariapdv-eight.vercel.app',
    cover: '/projects/pdv-pizzaria.webp',
    gradient: ['#3d1608', '#f97316'],
  },
  {
    id: 'dentstudio',
    title: 'DentStudio',
    description:
      'Landing page de clínica odontológica em João Pessoa, apresentando os dentistas e serviços, com atalho direto para agendamento via WhatsApp.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    url: 'https://www.dentstudio.site',
    cover: '/projects/dentstudio.webp',
    gradient: ['#06312f', '#2dd4bf'],
  },
]

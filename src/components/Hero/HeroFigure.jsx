import hero3d from '../../assets/hero-3d.gif'

// Boneco 3D em GIF, sem animação GSAP. hero-3d.gif é o 3dheroicongif.gif 2x mais
// lento, gerado com: node scripts/gif-speed.mjs src/assets/3dheroicongif.gif src/assets/hero-3d.gif 2
export default function HeroFigure({ className }) {
  return (
    <img
      className={className}
      src={hero3d}
      width="300"
      height="650"
      alt="Gabriel Albanez em 3D"
      decoding="async"
      fetchPriority="high"
      draggable="false"
    />
  )
}

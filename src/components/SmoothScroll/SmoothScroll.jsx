import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger, MEDIA } from '../../lib/gsap'

// Lenis sincronizado com o ScrollTrigger, desligado para prefers-reduced-motion
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Inter Tight muda a altura das seções: recalcula os triggers quando carregar
    document.fonts?.ready.then(() => ScrollTrigger.refresh())

    if (!window.matchMedia(MEDIA.motion).matches) return

    const lenis = new Lenis({ autoRaf: false, anchors: true, lerp: 0.1 })
    const raf = (time) => lenis.raf(time * 1000)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return children
}

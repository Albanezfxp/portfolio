import { gsap, SplitText } from './gsap'

// Revela um título linha por linha por máscara (mesmo efeito do "Portfólio").
export function revealLines(target, scrollTrigger) {
  return SplitText.create(target, {
    type: 'lines',
    mask: 'lines',
    linesClass: 'reveal-line',
    autoSplit: true,
    onSplit: (self) =>
      gsap.from(self.lines, {
        yPercent: 105,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: { trigger: target, start: 'top 85%', once: true, ...scrollTrigger },
      }),
  })
}

// Tilt que acompanha o cursor; retorna a função de cleanup.
export function cursorTilt(el, { max = 4, onEnter, onLeave } = {}) {
  gsap.set(el, { transformPerspective: 1200 })
  const rotX = gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3' })
  const rotY = gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3' })

  const move = (e) => {
    const rect = el.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    rotY(nx * max * 2)
    rotX(-ny * max * 2)
  }
  const enter = () => onEnter?.()
  const leave = () => {
    rotX(0)
    rotY(0)
    onLeave?.()
  }

  el.addEventListener('pointermove', move)
  el.addEventListener('pointerenter', enter)
  el.addEventListener('pointerleave', leave)
  return () => {
    el.removeEventListener('pointermove', move)
    el.removeEventListener('pointerenter', enter)
    el.removeEventListener('pointerleave', leave)
  }
}

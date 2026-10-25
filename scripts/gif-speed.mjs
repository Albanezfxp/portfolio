// Muda a velocidade de um GIF reescrevendo o delay de cada quadro (sem recodificar).
// Uso: node scripts/gif-speed.mjs <entrada.gif> <saida.gif> <fator>
//   fator 2 = 2x mais lento, 0.5 = 2x mais rápido
import { readFileSync, writeFileSync } from 'node:fs'

const [input, output, factorArg = '2'] = process.argv.slice(2)
const factor = Number(factorArg)

if (!input || !output || !(factor > 0)) {
  console.error('Uso: node scripts/gif-speed.mjs <entrada.gif> <saida.gif> <fator>')
  process.exit(1)
}

const gif = Buffer.from(readFileSync(input))
if (gif.toString('ascii', 0, 3) !== 'GIF') throw new Error(`${input} não é um GIF`)

const colorTableSize = (flags) => (flags & 0x80 ? 3 * (1 << ((flags & 0x07) + 1)) : 0)
const skipSubBlocks = (p) => {
  while (gif[p] !== 0) p += gif[p] + 1
  return p + 1
}

let p = 13 + colorTableSize(gif[10])
let frames = 0
let before = 0
let after = 0

while (p < gif.length && gif[p] !== 0x3b) {
  if (gif[p] === 0x21) {
    // Graphic Control Extension: delay em centésimos de segundo
    if (gif[p + 1] === 0xf9) {
      const delay = gif.readUInt16LE(p + 4)
      // navegadores tratam delays < 2 como 10, então o mínimo útil é 2
      const next = Math.min(0xffff, Math.max(2, Math.round(delay * factor)))
      gif.writeUInt16LE(next, p + 4)
      before += delay
      after += next
    }
    p = skipSubBlocks(p + 2)
  } else if (gif[p] === 0x2c) {
    frames++
    p += 10 + colorTableSize(gif[p + 9]) + 1
    p = skipSubBlocks(p)
  } else {
    throw new Error(`Bloco GIF inesperado (0x${gif[p].toString(16)}) na posição ${p}`)
  }
}

writeFileSync(output, gif)
console.log(`${frames} quadros · ciclo ${before / 100}s → ${after / 100}s · ${output}`)

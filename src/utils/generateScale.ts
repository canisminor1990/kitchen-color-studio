import { hexToHct, hctToHex } from '@/colorUtils'
import BezierEasing from 'bezier-easing'
import { merge } from 'lodash-es'

export interface IGenerateConfigItem {
  hRotate: number
  cTarget: number
  tTarget: number
  hEasing?: [number, number, number, number]
  cEasing?: [number, number, number, number]
  tEasing?: [number, number, number, number]
}

interface IGenerateConfigGroup {
  up: IGenerateConfigItem
  down: IGenerateConfigItem
}

export interface IGenerateConfig {
  step: {
    up: number
    down: number
  }
  hue: {
    segment: [number, number]
    multiply: number
  }
  neutral: {
    standard: string
    cStart: number
    cTarget: number
    cEasingUp?: [number, number, number, number]
    cEasingDown?: [number, number, number, number]
  }
  light: IGenerateConfigGroup
  dark: IGenerateConfigGroup
}

export const defaultConfig: IGenerateConfig = {
  step: {
    up: 5,
    down: 5,
  },
  hue: {
    segment: [100, 200],
    multiply: -0.5,
  },
  neutral: {
    standard: '#888',
    cStart: 15,
    cTarget: 10,
    cEasingUp: [0, 0, 1, 1],
    cEasingDown: [0, 0, 1, 1],
  },
  light: {
    up: {
      hRotate: -10,
      cTarget: 5,
      tTarget: 98,
      hEasing: [0, 0, 1, 1],
      cEasing: [0, 0, 1, 1],
      tEasing: [0, 0, 1, 1],
    },
    down: {
      hRotate: 20,
      cTarget: 50,
      tTarget: 10,
      hEasing: [0, 0, 1, 1],
      cEasing: [0, 0, 1, 1],
      tEasing: [0, 0, 1, 1],
    },
  },
  dark: {
    up: {
      hRotate: 20,
      cTarget: 50,
      tTarget: 10,
      hEasing: [0, 0, 1, 1],
      cEasing: [0, 0, 1, 1],
      tEasing: [0, 0, 1, 1],
    },
    down: {
      hRotate: -10,
      cTarget: 5,
      tTarget: 98,
      hEasing: [0, 0, 1, 1],
      cEasing: [0, 0, 1, 1],
      tEasing: [0, 0, 1, 1],
    },
  },
}

class GenerateScale {
  config: IGenerateConfig = defaultConfig

  constructor(config?: IGenerateConfig) {
    this.config = merge(this.config, config)
  }

  gen(
    color: string,
    opts: { theme: 'light' | 'dark'; neutral?: boolean } = {
      theme: 'light',
      neutral: false,
    }
  ): string[] {
    if (opts.neutral) return this.genNeutral(color, opts)
    const hctColor = hexToHct(color)
    const hctUpList = this.genList(hctColor, 'up', opts.theme === 'dark').reverse()
    const hctDownList = this.genList(hctColor, 'down', opts.theme === 'dark')
    const hctList = [...hctUpList, hctColor, ...hctDownList]
    return hctList.map((item) => hctToHex(item))
  }

  genNeutral(color: string, opts: { theme: 'light' | 'dark'; neutral?: boolean }): string[] {
    let hctColor = hexToHct(color)
    hctColor = [hctColor[0], this.config.neutral.cStart, hexToHct(this.config.neutral.standard)[2]]

    if (this.config.neutral.cStart === 1) {
      hctColor = hexToHct(this.config.neutral.standard)
      this.config.neutral.cStart = 2
      this.config.neutral.cTarget = 2
    }
    const hctUpList = this.genList(hctColor, 'up', opts.theme === 'dark', true).reverse()
    const hctDownList = this.genList(hctColor, 'down', opts.theme === 'dark', true)
    const hctList = [...hctUpList, hctColor, ...hctDownList]

    return hctList.map((item) => hctToHex(item))
  }

  genList(hctColor: number[], direction: 'up' | 'down' = 'up', dark?: boolean, neutral?: boolean): number[][] {
    const up = dark ? this.config.dark.up : this.config.light.up
    const down = dark ? this.config.dark.down : this.config.light.down
    const step = direction === 'up' ? this.config.step.up : this.config.step.down
    const stepList = []

    const { hRotate, tTarget, hEasing, tEasing } = direction === 'up' ? up : down
    let { cTarget, cEasing } = direction === 'up' ? up : down

    if (neutral) {
      cTarget = this.config.neutral.cTarget
      cEasing = direction === 'up' ? this.config.neutral.cEasingUp : this.config.neutral.cEasingDown
    }

    const hBE = BezierEasing(...hEasing)
    const cBE = BezierEasing(...cEasing)
    const tBE = BezierEasing(...tEasing)

    const [h, c, t] = hctColor
    for (let i = 1; i <= step; i++) {
      const percent = i / step
      const newH = this.hueRotate(h, hRotate * hBE(percent))
      const newC = c + (cTarget - c) * cBE(percent)
      const newT = t + (tTarget - t) * tBE(percent)
      stepList.push([newH, newC, newT])
    }
    return stepList
  }

  private hueRotate(h, hRotate): number {
    let hue = h + this.calcHueRotate(h, hRotate)
    if (hue > 360) hue = hue - 360
    if (hue < 0) hue = hue + 360
    return hue
  }

  private genCalcHueVaule(Xa: number, Xb: number, max: number, multiply) {
    const toRad = Math.PI / 180
    const a = 360 / (Xb - Xa)
    const b = (-1 * a * toRad * (3 * Xa + Xb)) / 4

    const min = max * multiply
    const y = (max + min) / 2
    const scale = (max - min) / 2

    return (v) => {
      const rad = v * toRad
      return scale * Math.sin(a * rad + b) + y
    }
  }

  private calcHueRotate(h, hRotate) {
    const { segment, multiply } = this.config.hue
    const calcHueVaule = this.genCalcHueVaule(segment[0], segment[1], hRotate, multiply)
    return calcHueVaule(h)
  }
}

export default GenerateScale
import { css } from 'styled-components'

const palette = {
  primary: 'rgba(241, 213, 210, 1)',
  secondary: [
    'rgba(9, 25, 41, 1)',
    'rgba(84, 84, 84, 1)',
    'rgba(123, 178, 164, 1)',
    'rgba(48, 51, 57, 1)',
    'rgba(2, 9, 16, 1)',
  ],
  grayscale: [
    'rgba(255, 255, 255,1)',
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 0.16)',
    'rgba(43, 43, 43, 1)',
  ],
}

/** Breakpoints are min-width based */
const breakpoints = {
  tablet: 768,
  desktop: 1200,
  bigdesktop: 1500,
  giant: 1920,
}

const space = ['0px', '8px', '16px', '24px', '32px', '40px']
const fontsizes = ['8px', '12px', '14px', '16px', '35px', '45px', '110px']
const fonts = {
  primary: `breg, sans-serif`,
  secondary: `mBold, serif`,
}
const fontweights = {
  light: 300,
  medium: 500,
  bold: 700,
}
const borders = [`border: 1px solid ${palette.grayscale[3]};`, `border: 1px solid ${palette.grayscale[0]};`]

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  const emSize = breakpoints[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

const theme = {
  breakpoints,
  palette,
  space,
  fonts,
  fontsizes,
  fontweights,
  borders,
  media,
}

export default theme

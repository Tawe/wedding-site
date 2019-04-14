import { css } from 'styled-components'

const PrimaryLight = css`
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontweights.light};
`
const PrimaryReg = css`
  font-family: ${props => props.theme.fonts.primary};
`

const PrimaryBold = css`
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontweights.bold};
`

const SecondayLight = css`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontweights.light};
`
const SecondaryReg = css`
  font-family: ${props => props.theme.fonts.secondary};
`

const SecondaryBold = css`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontweights.bold};
`

const TertiaryLight = css`
  font-family: ${props => props.theme.fonts.tertiary};
  font-weight: ${props => props.theme.fontweights.light};
`
const TertiaryReg = css`
  font-family: ${props => props.theme.fonts.tertiary};
`

const TertiaryBold = css`
  font-family: ${props => props.theme.fonts.tertiary};
  font-weight: ${props => props.theme.fontweights.bold};
`

export {
  PrimaryBold,
  PrimaryLight,
  PrimaryReg,
  SecondaryBold,
  SecondaryReg,
  SecondayLight,
  TertiaryLight,
  TertiaryReg,
  TertiaryBold,
}

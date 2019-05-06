import styled, { css } from 'styled-components'
import { Box, Flex } from '@rebass/grid'

const BaseStyles = css`
  position: ${props => props.position};
  background: ${props => props.background};
  background-size: ${props => props.backgroundSize};
  background-repeat: ${props => props.backgroundRepeat};
  background-position: ${props => props.backgroundPosition};
  border: ${props => props.border};
  text-indent: ${props => props.textIndent};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  height: ${props => props.height};
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing};
  text-transform: ${props => props.textTransform};
  top: ${props => props.top};
  max-width: ${props => props.maxWidth};
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  min-height: ${props => props.minHeight};
  transition: ${props => props.transition};
  right: ${props => props.right};
  cursor: ${props => props.cursor};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  vertical-align: ${props => props.verticalAlign};
`

const BoxStyle = styled(Box)`
  display: ${props => props.display};
  ${BaseStyles};
`

const FlexStyle = styled(Flex)`
  ${BaseStyles};
`

const InputStyles = styled.input`
  display: ${props => props.display};
  ${BaseStyles};
`

const ParapgrahStyles = styled.p`
  display: ${props => props.display};
  margin: ${props => props.margin};
  ${BaseStyles};
`

const SectionStyles = styled.section`
  display: ${props => props.display};
  margin: ${props => props.m};
  ${BaseStyles};
`

export {
  BoxStyle as Box,
  FlexStyle as Flex,
  InputStyles as Input,
  ParapgrahStyles as P,
  SectionStyles as Section,
}

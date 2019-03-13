import React from 'react'
import { Reset } from 'styled-reset'
import { css } from 'styled-components'
import { injectGlobal } from 'styled-components'

import Home from './components/pages/home'

injectGlobal`
  @font-face {
    font-family: brandonMed;
    src: url('../public/fonts/Brandon_med.otf');
  }

  @font-face {
    font-family: brandonReg;
    src: url('../public/fonts/Brandon_reg.otf');
  }

  @font-face {
    font-family: brandonBold;
    src: url('../public/fonts/Brandon_bld_it.otf');
  }

  @font-face {
    font-family: minion;
    src: url('../public/fonts/MinionPro-Bold.otf');
  }
`

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Home />
    </React.Fragment>
  )
}

export default App

import { injectGlobal } from 'styled-components'

injectGlobal`
    body {
      @font-face {
        font-family: breg;
        src: url(./fonts/breg.otf);
      }

      @font-face {
        font-family: mBold;
        src: url(./fonts/mBold.otf);
      }
    }
`

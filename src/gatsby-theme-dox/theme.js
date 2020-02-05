/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */

import prism from '@theme-ui/prism/presets/theme-ui'
import { alpha } from '@theme-ui/color'

export default {
  breakpoints: ['640px', '960px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  initialColorMode: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#011627',
    background: '#FDFFFC',
    primary: '#E71D36',
    secondary: '#2EC4B6',
    accent: '#FF9F1C',
    muted: '#FAFAFA',
    toc: '#484848',
    modes: {
      dark: {
        text: '#FDFFFC',
        toc: '#D3D3D3',
        background: '#011627'
      }
    }
  },
  fonts: {
    body:
      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: 'inherit',
    monospace: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace'
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 40, 48, 56, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  },
  linkStyles: {
    nav: {
      color: 'inherit',
      display: 'block',
      p: '0.75rem 1.5rem',
      ':hover': {
        color: 'primary',
        textDecoration: 'none'
      },
      '&.active': {
        color: 'primary',
        fontWeight: 'bold'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: [1, 2]
    },
    h1: {
      variant: 'textStyles.heading',
      fontSize: [5, 6]
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: [4, 5]
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: [3, 4]
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: [2, 3]
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: [1, 2]
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: [0, 1]
    },
    p: {},
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline'
      },
      '&.active': {
        color: 'text'
      }
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      p: 3,
      borderRadius: '0.5rem',
      bg: 'text',
      color: 'background',
      ...prism,
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      overflow: 'auto',
      borderCollapse: 'collapse',
      borderSpacing: 0
    },
    tr: {
      borderTop: '1px solid gray'
    },
    th: {
      border: '1px solid',
      borderColor: alpha('text', 0.25),
      p: '0.25em 0.5em'
    },
    td: {
      border: '1px solid',
      borderColor: alpha('text', 0.25),
      p: '0.25em 0.5em'
    },
    blockquote: {
      pl: '.6rem',
      borderLeft: '.3rem solid rgba(0,0,0,.26)',
      color: 'rgba(0,0,0,.54)',
      margin: '1em 0',
      boxSizing: 'inherit'
    }
  },
  layout: {
    global: {
      html: {
        boxSizing: 'border-box',
        fontSize: 0
      },
      [['*', '*:after', '*:before']]: {
        boxSizing: 'inherit'
      },
      body: {
        margin: 0
      },
      '::selection': {
        color: 'background',
        bg: 'primary'
      }
    },
    root: {
      minHeight: '100vh',
      maxWidth: '95%',
      mx: 'auto',
      overflowX: 'hidden'
    },
    sidebar: {
      float: 'left',
      width: 300,
      minHeight: '100%',
      mr: '-100%',
      position: 'absolute',
      left: [theme => -theme.layout.sidebar.width, null, 'auto'],
      visibility: ['hidden', null, 'visible'],
      transition: 'left 0.1s',
      outline: 0,
      '&.active': {
        left: 'auto',
        visibility: 'visible'
      }
    },
    main: {
      width: [
        '100%',
        null,
        theme => `calc(100% - ${theme.layout.sidebar.width}px - ${theme.layout.toc.width}px)`
      ],
      ml: [null, null, theme => theme.layout.sidebar.width],
      float: [null, null, 'left'],
      transition: 'margin-left 0.1s',
      '&.pushed': {
        ml: theme => theme.layout.sidebar.width
      }
    },
    container: {
      width: '100%',
      mx: 'auto',
      my: 4,
      px: 3
    },
    toc: {
      visibility: ['hidden', null, 'visible'],
      right: '2em',
      top: '5em',
      float: 'right',
      position: 'fixed',
      width: 300,
      a: {
        color: 'toc',
        textDecoration: 'none',
        transition: '0.2s',
        ':hover': {
          transition: '0.2s',
          color: 'primary'
        },
        '&.active': {
          color: 'text'
        }
      },
      ul: {
        listStyleType: 'none',
        paddingLeft: '1em'
      }
    }
  }
}

import { darken } from '@theme-ui/color';

const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading'
};

const baseButton = {
  fontSize: 2,
  '& svg': {
    mr: 2
  },
  '&:disabled': {
    bg: 'background',
    borderColor: 'gray.2',
    borderWidth: 1,
    borderStyle: 'solid',
    color: 'text',
    cursor: 'not-allowed',
    opacity: 0.5
  }
};

const base = {
  breakpoints: ['576px', '768px', '992px', '1200px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Roboto, "Open Sans", "Segoe UI", "Helvetica Neue", Verdana, system-ui, sans-serif',
    heading: 'Roboto, "Open Sans", "Segoe UI", "Helvetica Neue", Verdana, system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  heights: {
    headerHeight: '3em'
  },
  config: {
    useColorSchemeMediaQuery: true,
    useLocalStorage: false,
    initialColorModeName: 'light',
  },
  colors: {
    text: '#000',
    background: '#fff',
    button_fg: '#fff',
    button_bg: '#363636',
    primary: '#47af7a',
    error: '#f14668',
    gray: ['#363636', '#666666', '#aaaaaa', '#dddddd', '#f5f5f5'],
    element_bg: '#fff',
    notification_text: '#fff',
    tooltip: '#363636',
    tooltip_text: '#fff',
    focus: '#2e724f',
    modes: {
      dark: {
        text: 'rgba(255, 255, 255, 0.87)',
        background: '#1C1C1E',
        button_fg: '#fff',
        button_bg: '#666666',
        primary: '#388c61',
        error: 'rgba(241, 70, 104, 0.8)',
        gray: ['#f5f5f5', '#dddddd', '#aaaaaa', '#666666', '#363636'],
        element_bg: '#363636',
        notification_text: 'rgba(255, 255, 255, 0.9)',
        tooltip: '#dddddd',
        tooltip_text: '#000',
        focus: '#2e724f',
      }
    }
  },
  text: {
    text: {
      fontWeight: 'body',
      fontSize: '18px',
    },
    heading: {
      fontWeight: 'heading',
      fontSize: '18px',
    },
  },
  buttons: {
    primary: {
      ...baseButton,
      bg: 'primary',
      color: 'button_fg',
      '&:not(:disabled):hover,&:not(:disabled):focus': {
        bg: 'var(--theme-ui-colors-btn-hover)'
      },
      '&:disabled': {
        bg: 'gray.1'
      },
    },
    danger: {
      ...baseButton,
      bg: 'error',
      color: 'button_fg',
      '&:not(:disabled):hover, &:not(:disabled):focus': {
        bg: darken('error', 0.03)
      }
    },
    text: {
      ...baseButton,
      bg: 'background',
      color: 'text',
      border: theme => `1px solid ${theme.colors.gray[1]}`,
      '&:not(:disabled):hover, &:not(:disabled):focus': {
        bg: 'gray.3'
      }
    }
  },
  cards: {
    primary: {
      bg: 'background',
      boxShadow: '0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)',
      color: 'text',
      maxWidth: '100%',
      position: 'relative'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      '--theme-ui-colors-btn-hover': darken('primary', 0.03),
      '--theme-ui-colors-controls': '#000',
      '--theme-ui-colors-info': '#f5f5f5',
      '*:focus:not(:focus-visible)': {
        /* Remove outline for non-keyboard :focus */
        outline: 'none !important',
        boxShadow: '0 0 0 rgb(255, 255, 255) !important',
      },
      '*:focus-visible': {
        outline: theme => `5px solid ${theme.colors.focus} !important`,
        outlineOffset: '-5px',
      },
      'button:focus-visible': {
        outline: theme => `5px solid ${theme.colors.focus} !important`,
        outlineOffset: '-3px',
      },
      '.tippy-box > .tippy-arrow::before': {
        color: theme => `${theme.colors.tooltip}`
      },
    },
    h1: {
      ...heading,
      mt: 0,
      mb: 3,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4
    },
    h3: {
      ...heading,
      fontSize: 3
    },
    h4: {
      ...heading,
      fontSize: 2
    },
    h5: {
      ...heading,
      fontSize: 1
    },
    h6: {
      ...heading,
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
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
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    input: {
      backgroundColor: 'element_bg',
      color: 'text',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray.2',
      height: '2rem',
      fontSize: '14pt',
      borderRadius: 2,
      px: 2,
      py: 0,
      outline: 'none',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      width: '100%',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: theme => `0 0 3px 0 ${theme.colors.primary}`
      },
      '&[aria-invalid="true"]': {
        borderColor: 'error',
        boxShadow: theme => `0 0 3px 0 ${theme.colors.error}`
      }
    },
    select: {
      backgroundColor: 'element_bg',
      color: 'text',
      height: '2rem',
      fontSize: '14pt',
      outline: 'none',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      width: '100%',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: theme => `0 0 3px 0 ${theme.colors.primary}`
      }
    },
    progress: {
      bg: '#ebebeb',
      color: '#4ab57f',
      height: '8px',
    }
  },
  container: {
    mx: 'auto',
    p: 3,
    maxWidth: ['none', 'none', 960, 1152, 1344]
  }
};

export default base;

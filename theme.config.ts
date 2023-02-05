import { ThemeConfig } from 'types/ThemeConfig'
import { lightTheme } from 'theme/default'
import merge from 'lodash.merge'

export const theme: ThemeConfig = merge(lightTheme, {
  styles: {
    fonts: {
      heading: 'monospace',
    },
  },
  nav: {
    primary: [
      { label: 'index', href: '/' },
      { label: 'button2', href: '/button2' },
      { label: 'button3', href: '/button3' },
      { label: 'button4', href: '/button4' },
    ],
    secondary: [],
  },
} as Partial<ThemeConfig>)

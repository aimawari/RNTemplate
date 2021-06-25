import Theme from '~enum/ThemeEnum';

const ThemeStyle: {[key in Theme]: {[member: string]: string}} = {
  [Theme.LIGHT]: {
    primary: '#FFFFFF',
    secondary: '#03DAC6',
    white: '#FFF',
    black: '#000',
    danger: '#F00',
    active: '#0F0',
    text: '#000',
  },
  [Theme.DARK]: {
    primary: '#121212',
    secondary: '#03DAC6',
    white: '#FFF',
    black: '#000',
    danger: '#F00',
    active: '#0F0',
    text: '#FFF',
  },
};

export default ThemeStyle;

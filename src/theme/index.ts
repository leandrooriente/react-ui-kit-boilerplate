interface Colors {
  disabledColor: string;
  primaryColor: string;
}

export interface ThemeInterface {
  colors: Colors;
}

const theme: ThemeInterface = {
  colors: {
    disabledColor: '#bdc3c7',
    primaryColor: '#27ae60',
  },
};

export default theme;

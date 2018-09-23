interface Colors {
  primaryColor: string;
}

export interface ThemeInterface {
  colors: Colors;
}

const theme: ThemeInterface = {
  colors: {
    primaryColor: "#c0392b",
  },
};

export default theme;

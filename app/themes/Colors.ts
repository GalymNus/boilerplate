export interface IThemeColorMap {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  special: string;
  button: {
    primary: string;
  };
}

const colorsMap: IThemeColorMap = {
  primary: "#03A9F4",
  secondary: "#B3E5FC",
  special: "#01579B",
  success: "#A5D6A7",
  danger: "#EF9A9A",
  button: { primary: "red" }
};

export default colorsMap;

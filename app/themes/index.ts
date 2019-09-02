import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import ColorMap, { IThemeColorMap } from "./Colors";
import FontMap, { IThemeFontMap } from "./Fonts";
import ImageMap, { IThemeImageMap } from "./Images";

interface IThemingInterface {
  colors: IThemeColorMap;
  fonts: IThemeFontMap;
  images: IThemeImageMap;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemingInterface>;

export { ColorMap, ImageMap, FontMap };

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;

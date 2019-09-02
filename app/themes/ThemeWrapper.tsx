import * as React from "react";

import styledNormalize from "styled-normalize";
import {
  ThemeProvider,
  ColorMap,
  FontMap,
  ImageMap,
  createGlobalStyle
} from "./";

interface ThemeWrapperProps {
  children: any;
}

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    margin: 0;
    padding: 0;
  }
`;
//  @font-face {
//    font-family: 'Montserrat-Regular';
//    src: url('static/fonts/Montserrat-Regular.ttf');
//  }
class ThemeWrapper extends React.PureComponent<ThemeWrapperProps> {
  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider
          theme={{
            colors: { ...ColorMap },
            fonts: { ...FontMap },
            images: { ...ImageMap }
          }}
        >
          {this.props.children}
        </ThemeProvider>
      </>
    );
  }
}

export default ThemeWrapper;

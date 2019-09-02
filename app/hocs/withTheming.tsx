import * as React from "react";
import ThemeWrapper from "../themes/ThemeWrapper";

const withThemeWrapper = (ComposedComponent: React.ComponentType) => {
  const WithThemeWrapper = (props: any) => (
    <ThemeWrapper>
      <ComposedComponent {...props} />
    </ThemeWrapper>
  );

  return WithThemeWrapper;
};

export default withThemeWrapper;

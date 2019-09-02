import { Provider } from "react-redux";
// import { hoistStatics } from "recompact";

const { hoistStatics } = require("recompact");

import initRedux from "../lib/initRedux";

const store = initRedux();

const withData = hoistStatics((ComposedComponent: React.ComponentType) => {
  const WithData = (props: any) => (
    <Provider store={store}>
      <ComposedComponent {...props} />
    </Provider>
  );

  return WithData;
});

export default withData;

import getEndpoints from "./endpoints";

const getBackendUrl = () => {
  if (!process.browser) {
    return (
      // process.env.BACKEND_URL ||
      "https://wunder-server-stage.herokuapp.com"
    );
  }
  return (
    // (window.env && window.env.BACKEND_URL) ||
    "https://wunder-server-stage.herokuapp.com"
  );
};

const initialState: Object = { dick: "big" };

// const getBackendUrl = () => 'http://localhost:5001';

const config = {
  getEndpoints,
  getBackendUrl,
  initialState
};

export default config;

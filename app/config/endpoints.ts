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

// const getBackendUrl = () => 'http://localhost:5001';

const Endpoints: Object = {
  test: "/api/test"
};

const getEndpoints = (name: string): string => {
  const index: number = Object(Endpoints)
    .keys()
    .findIndex((key: string) => key === name);
  console.log("index", index);
  const endpoint: string = Object(Endpoints).values[index];
  return `${getBackendUrl()}${endpoint}`;
};

export default getEndpoints;

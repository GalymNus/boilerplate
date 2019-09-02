import { compose } from "recompose";

import withTheming from "./withTheming";
import WithData from "./withData";

const page = compose(
  withTheming,
  WithData
);

export default page;

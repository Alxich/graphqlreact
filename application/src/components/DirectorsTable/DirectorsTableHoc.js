import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { directorsQuery } from "./queries";

import { styles } from "./styles";

const withGraphql = graphql(directorsQuery, {
  options: ({ name = "" }) => ({
    variables: {
      name,
    },
  }),
});

export default compose(
  withStyles(styles),
  withGraphql
);

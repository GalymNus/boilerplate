import React from "react";
import PropTypes from "prop-types";
// import axios from "axios";
// import { ErrorHandling } from 'components';
import config from "config";

type Props = {
  normalizer: any;
  type?: string;
  endpoint: string;
};

type State = {
  loading: boolean;
  error: any;
  data: any;
};

class Mutation extends React.PureComponent<Props, State> {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
    normalizer: PropTypes.func,
    type: PropTypes.string
  };

  state = {
    loading: false,
    error: null,
    data: null
  };

  mutate = async (params: any) => {
    // const { variables, path } = params;
    try {
      this.setState({ loading: true, data: null, error: null });
      // const { normalizer, type } = this.props;
      console.log(params);
      const endpoint: string = this.props.endpoint;
      // const token = localStorage.getItem("token");
      const mutationEndpoint: string = config.getEndpoints(endpoint);
      if (!mutationEndpoint) {
        throw new Error("Endpoint do not exist or not provided");
      }
      // const headers = { headers: { Authorization: `Bearer ${token}` } };
      // const mutationEndpointWithPath = path
      // ? `${mutationEndpoint}${path}`
      // : mutationEndpoint;
      //   const { data: result } = await axios[`${type}`.toLowerCase()](
      //     mutationEndpointWithPath,
      //     variables,
      //     headers
      //   );
      //   normalizer(result);
      //   this.setState({ data: result, loading: false, error: null });
      //   return { data: result, loading: false, error: null };
    } catch (err) {
      //   // TODO: Handle error
      //   //   ErrorHandling({
      //   //     errorCode: err.response.status,
      //   //     link: window.location.href
      //   //   });
      this.setState({ data: null, loading: false, error: err });
      return { data: null, loading: false, error: err };
    }
  };

  render() {
    // const { children, ...props } = this.props;
    // const { loading, error, data } = this.state;
    return <div />;
    // return children(this.mutate, {
    //   loading,
    //   error,
    //   data,
    //   props
    // });
  }
}

export default Mutation;

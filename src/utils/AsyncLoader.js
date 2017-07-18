import React from 'react';
import PropTypes from 'prop-types'

class AsyncLoader extends React.Component {

  constructor(props) {
    console.log('AsyncLoader constructor');
    super(props);
    this.state = {
      module: null
    };
  }

  componentWillMount() {
    console.log('load', 'componentWillMount', this.props);
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {

    console.log('load', 'componentWillReceiveProps', nextProps);

    if (nextProps.path !== this.props.path
      || nextProps.error !== this.props.error
      || nextProps.loading !== this.props.loading) {
      this.load(nextProps);
    }
  }

  load(props) {

    this.setState({module: props.loading});

    // TODO：异步代码的路径希望做成可以配置的方式
    import(`./${props.path}`)
      .then((m) => {
        let Module = m.default ? m.default : m;
        console.log("module: ", Module);
        this.setState({module: <Module/>});
      }).catch(() => {
        this.setState({module: props.error});
      });
  }

  render() {
    return this.state.module ? this.state.module : null;
  }
}

AsyncLoader.defaultProps = {
  path: '',
  loading: <p>Loading...</p>,
  error: <p>Error</p>
};

AsyncLoader.propTypes = {
  path: PropTypes.string.isRequired,
  loading: PropTypes.element,
};

export default AsyncLoader;
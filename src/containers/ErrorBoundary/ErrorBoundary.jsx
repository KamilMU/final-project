import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.error) {
      // Error path
      return (
        <this.props.FallbackComponent 
          error={this.state.error}
          errorInfo={this.state.errorInfo}
        />
      )
    }
    // Normally, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes
    .oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};

export default ErrorBoundary;
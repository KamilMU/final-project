import React from 'react';
import PropTypes from 'prop-types';

function ErrorFallback({ error, errorInfo }) {
  return (
    <div>
      <h2 className="text-lg">Something went wrong.</h2>
      <details className="whitespace-pre-wrap">
        {error && error.toString()}
        <br />
        {errorInfo.componentStack}
      </details>
    </div>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  errorInfo: PropTypes.object.isRequired
};

export default ErrorFallback;

import React, {Component} from 'react';

class ErrorBoundaryInternal extends Component {
  state = {hasError: false};

  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return (<>{this.props.children}</>) as any;
  }
}

export const ErrorBoundary = ({children}: any) => {
  return <ErrorBoundaryInternal>{children}</ErrorBoundaryInternal>;
};

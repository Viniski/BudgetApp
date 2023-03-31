import React, { Component } from "react";

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errrInfo) {
    console.log(error, errrInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Wystąpił jakiś problem</h1>;
    }

    return this.props.children;
  }
}

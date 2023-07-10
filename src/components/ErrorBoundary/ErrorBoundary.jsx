// import React from 'react';

// export class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError(error) {
//     return (this.sate = { hasError: true });
//   }
//   componentDidCatch(error, info) {
//     this.setState({ hasError: true });
//   }
//   render() {
//     if (this.state.hasError) {
//       return this.props.fallback;
//     } else {
//       return this.props.children;
//     }
//   }
// }
import { Component, PropsWithChildren, ReactNode } from 'react';

export class ErrorBoundary extends Component {
  state = {};

  componentDidCatch(error, errorInfo) {
    console.log('ошибка');
    this.setState({ error, errorInfo });
  }

  render() {
    console.log('ошибка');

    if (this.state.error) {
      return <div>zalupa</div>;
    }

    return this.props.children;
  }
}

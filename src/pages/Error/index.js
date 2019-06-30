import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';

export default class PageNotFound extends Component {
  render() {
    return <Alert secondary>Primary Alert</Alert>;
  }
}

// const PageNotFound = () => (
//   <div className="container">
//     <div className="copy-container error-space">
//       <p className="error">
//         404
//       </p>
//       <br />
//       <p className="error1">
//         Page not found.
//       </p>
//       <p className="error2">
//         <a href="#back">Go back</a>
//       </p>
//     </div>
//   </div>

// );
// export default PageNotFound;

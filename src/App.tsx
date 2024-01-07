// host/src/App.js
import React, { ReactNode } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";
const Remote1App = React.lazy(() => import("Remote1/App"));
const Remote2App = React.lazy(() => import("Remote2/App"));

interface Props {
  children?: ReactNode;
}

const RemoteWrapper = ({ children }: Props) => (
  <div>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => {
  return (
    <div className="App">
      <h1>HOST APP</h1>
      <div className="main">
        <div className="remote">
          <h2>Remote 1</h2>
          <RemoteWrapper>
            <Remote2App />
          </RemoteWrapper>
        </div>
        <div className="remote">
          <h2>Remote 2</h2>
          <RemoteWrapper>
            <Remote1App />
          </RemoteWrapper>
        </div>
      </div>
    </div>
  );
};
export default App;

import React from "react";

const Loading = ({ children, loading, error }) => {
  return (
    <div>
      {loading
        ? "loading please wait"
        : error
        ? "Error from the server"
        : children}
    </div>
  );
};

export default Loading;

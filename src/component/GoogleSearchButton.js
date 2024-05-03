import React from "react";

const GoogleSearchButton = ({ keyword }) => {
  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${keyword}`, "_blank");
  };

  return <button onClick={handleSearch}>search</button>;
};

export default GoogleSearchButton;

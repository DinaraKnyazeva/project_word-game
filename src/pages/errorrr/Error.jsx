import React from "react";
import "./error.scss";
import error404 from "../../assets/img/error404.png";

export default function Error() {
  return (
    <div className="error-container">
      <div className="error-image">
        <img src={error404} alt="Error Image" />
      </div>
      <div className="error-title">Error 404</div>
      <div className="error-message">
        The page you are looking for does not exist.
      </div>
      <div className="error-link">
        <a href="/">Go back to the homepage</a>
      </div>
    </div>
  );
}

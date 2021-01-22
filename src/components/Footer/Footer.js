import "./Footer.scss";
import React from "react";
function Footer() {
  return (
    <div id="footer">
      <button onClick={() => console.log("Clicked contact")} className="primary">Contact us</button>
    </div>
  );
}

export default Footer;

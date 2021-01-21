import "./Footer.scss";

function Footer() {
  return (
    <div id="footer">
      <button onClick={() => console.log("Clicked contact")} className="primary">Contact us</button>
    </div>
  );
}

export default Footer;

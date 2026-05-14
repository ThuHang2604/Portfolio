import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <h3>ThuHang</h3>
          <p>Frontend Developer Portfolio</p>
        </div>

        <div className="footer-right">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:yourmail@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
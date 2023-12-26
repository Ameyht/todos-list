import React from "react";
import "./Css/Footer.css";

export default function Footer({ setScrollBehavior }) {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: amey311.ht@gmail.com</p>
            <p>Phone: 9356477948</p>
          </div>

          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="/">Attractions</a>
              </li>
              <li>
                <a href="/forts">Ch.Shivaji Maharaj Forts</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2023 Travelio. All rights reserved.</p>
        </div>
      </footer>
      <div ref={setScrollBehavior}></div>
    </div>
  );
}

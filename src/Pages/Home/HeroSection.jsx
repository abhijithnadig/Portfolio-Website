import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'; // Import Link from react-scroll
export default function HeroSection() {
  const navigate = useNavigate(); // Use useNavigate inside HeroSection

  // Handle button click to navigate to ContactMe page
  const handleGetInTouchClick = () => {
    navigate('/contact'); // This will redirect to the ContactMe page
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Abhijith and I am a ...</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            A Creative software developer focused on crafting efficient and scalable solutions, turning ideas into reality through code.
            <br />
          </p>
        </div>
        <Link
          to="Contact" // The id of the target section
          smooth={true} // Enable smooth scrolling
          offset={-70} // Offset for fixed header (if any)
          duration={500} // Duration of the scroll in milliseconds
          className="btn btn-primary"
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/home-page.png" alt="Hero Section" />
      </div>
    </section>
  );
}

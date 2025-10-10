import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container grid">
        {/* ฝั่งข้อความ */}
        <div className="hero-left">
          <h3>Hi, its' me</h3>
          <h1>
            <span style={{ color: "#3b82f6", fontWeight: 700 }}>Lui</span>
          </h1>

          {/* ✅ typing animation แบบที่คุณต้องการ */}
          <p>
            <span style={{ marginRight: 10 }}>I'm a</span>
            <TypeAnimation
              sequence={[
                "Web Developer", 2000,
                "Backend Developer", 2000,
              ]}
              speed={50}         // ความเร็วพิมพ์
              deletionSpeed={40} // ความเร็วลบ
              repeat={Infinity}  // วนซ้ำ
              wrapper="span"
              cursor={true}      // ให้มีเคอร์เซอร์กระพริบ
            />
          </p>

          <div className="social">
            <a href="https://www.instagram.com/ktpd_lui/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/kittipod.khunatsakul.lui" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://github.com/Kittipod2004" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* รูปภาพพร้อม tilt */}
        <Tilt
          className="photo-wrap"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          transitionSpeed={2500}
          perspective={1000}
          scale={1.05}
        >
          <img
            className="photo"
            src="https://images.unsplash.com/photo-1756205073620-02f2fd841881?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
        </Tilt>
      </div>
    </section>
  );
}

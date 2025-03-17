* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

body {
  background-color: #1a1a1a;
  color: white;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  animation: bodyPulse 8s infinite alternate;
  perspective: 1000px;
  transform-style: preserve-3d;
}

/* Interactive background that responds to mouse movement */
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                rgba(66, 198, 255, 0.1) 0%, 
                rgba(26, 26, 26, 0) 50%);
  z-index: -1;
  pointer-events: none;
  transition: opacity 0.3s;
}

@keyframes bodyPulse {
  0% { background-color: #1a1a1a; }
  50% { background-color: #141414; }
  100% { background-color: #0a0a0a; }
}

/* Enhanced responsiveness instead of cursor */
html {
  cursor: default;
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  max-width: 100vw;
}

/* Add GPU acceleration for animations */
.gallery-item, .float-image, .explore-btn, .technique-btn, .section-title, 
.main-title, .subtitle, .hero-description p, .particle, .gradient-orb, 
.geo-shape, .home-hero, .photo-container {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* Dynamic background */
.dynamic-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  background: linear-gradient(45deg, #0a0a0a, #1a1a1a, #0a0a0a);
  filter: contrast(1.2);
}

/* Animated grid background */
.grid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(66, 198, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(66, 198, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: -1;
  opacity: 0.3;
  animation: gridMove 60s linear infinite;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(60deg);
}

@keyframes gridMove {
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(66, 198, 255, 0.4) 0%, rgba(255, 66, 227, 0.2) 50%, rgba(26, 26, 26, 0) 70%);
  mix-blend-mode: screen;
  filter: blur(50px);
  animation: orbFloat 20s infinite alternate;
  opacity: 0.5;
  transform-origin: center;
}

@keyframes orbFloat {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    filter: blur(50px) hue-rotate(0deg);
  }
  20% {
    transform: translate(-15%, 15%) scale(1.5) rotate(180deg);
    filter: blur(70px) hue-rotate(90deg);
  }
  40% {
    transform: translate(20%, -10%) scale(0.7) rotate(360deg);
    filter: blur(30px) hue-rotate(180deg);
  }
  60% {
    transform: translate(-25%, -25%) scale(1.8) rotate(540deg);
    filter: blur(90px) hue-rotate(270deg);
  }
  80% {
    transform: translate(15%, 20%) scale(0.6) rotate(720deg);
    filter: blur(40px) hue-rotate(320deg);
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(1080deg);
    filter: blur(50px) hue-rotate(360deg);
  }
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 25px 55px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.3);
  backdrop-filter: blur(15px);
  z-index: 1000;
  box-shadow: 
    0 2px 10px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(66, 198, 255, 0.1);
  border-bottom: 1px solid rgba(66, 198, 255, 0.2);
  animation: navGlow 5s infinite alternate;
  transform: translateZ(0);
}

@keyframes navGlow {
  0% { box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 30px rgba(66, 198, 255, 0.1); }
  100% { box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 66, 227, 0.2); }
}

.logo {
  color: #42c6ff;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 
    0 0 10px rgba(66, 198, 255, 0.5),
    0 0 20px rgba(66, 198, 255, 0.3),
    0 0 30px rgba(66, 198, 255, 0.2);
  animation: logoGlow 3s ease-in-out infinite, logoFloat 5s ease-in-out infinite;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  padding: 10px 20px;
  position: relative;
  z-index: 5;
}

.logo::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    var(--gradient-angle),
    rgba(66, 198, 255, 0.3),
    rgba(255, 66, 227, 0.3),
    rgba(66, 255, 189, 0.3),
    rgba(66, 198, 255, 0.3)
  );
  border-radius: 8px;
  filter: blur(10px);
  opacity: 0.7;
  z-index: -1;
  animation: rotate-gradient 10s linear infinite;
}

@keyframes rotate-gradient {
  0% { --gradient-angle: 0deg; }
  100% { --gradient-angle: 360deg; }
}

@keyframes logoGlow {
  0%, 100% { 
    text-shadow: 
      0 0 10px rgba(66, 198, 255, 0.5),
      0 0 20px rgba(66, 198, 255, 0.3); 
    filter: brightness(1);
  }
  25% { 
    text-shadow: 
      0 0 30px rgba(66, 198, 255, 0.9), 
      0 0 60px rgba(66, 198, 255, 0.4), 
      0 0 100px rgba(66, 198, 255, 0.2); 
    filter: brightness(1.5);
  }
  50% { 
    text-shadow: 
      0 0 20px rgba(66, 255, 189, 0.8), 
      0 0 40px rgba(66, 255, 189, 0.4),
      0 0 80px rgba(66, 255, 189, 0.2); 
    filter: brightness(1.3);
  }
  75% { 
    text-shadow: 
      0 0 30px rgba(255, 66, 227, 0.9), 
      0 0 60px rgba(255, 66, 227, 0.4),
      0 0 90px rgba(255, 66, 227, 0.2); 
    filter: brightness(1.4);
  }
}

@keyframes logoFloat {
  0% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
  25% { transform: translateY(-5px) rotateX(10deg) rotateY(5deg); }
  50% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
  75% { transform: translateY(5px) rotateX(-10deg) rotateY(-5deg); }
  100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
}

.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 30px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding-bottom: 5px;
  transform-origin: center;
}

.nav-links a:hover {
  transform: scale(1.1);
  text-shadow: 0 0 15px rgba(66, 198, 255, 0.8);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #42c6ff;
  transition: width 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.active {
  color: #42c6ff;
}

.nav-links a.active::after {
  width: 100%;
}

.nav-links a:hover {
  color: #42c6ff;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 80px 20px;
  overflow-y: auto;
}

.home-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80vh;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.main-title {
  font-size: 72px;
  color: #42c6ff;
  text-shadow: 0 0 20px rgba(66, 198, 255, 0.5);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards, glow 3s ease-in-out infinite 1s, glitch 5s ease-in-out infinite 2s, vibrate 0.3s linear infinite 4s, rotateText 6s ease-in-out infinite 2s, scaleText 4s ease-in-out infinite 3s;
  margin-bottom: 20px;
  letter-spacing: 2px;
  position: relative;
  z-index: 5;
  transform-style: preserve-3d;
  perspective: 1000px;
  filter: drop-shadow(0 0 15px rgba(66, 198, 255, 0.8));
}

.main-title.glitch-effect {
  animation: majorGlitch 0.2s steps(2) infinite;
}

@keyframes majorGlitch {
  0% {
    text-shadow: 
      3px 0 0 rgba(255, 0, 0, 0.7),
      -3px 0 0 rgba(0, 255, 255, 0.7);
    transform: translate3d(3px, 0, 0) scale(1.03);
  }
  25% {
    text-shadow: 
      -3px 0 0 rgba(255, 0, 0, 0.7),
      3px 0 0 rgba(0, 255, 255, 0.7);
    transform: translate3d(-3px, 0, 0) scale(0.97);
  }
  50% {
    text-shadow: 
      2px 0 0 rgba(255, 0, 255, 0.7),
      -2px 0 0 rgba(0, 255, 0, 0.7);
    transform: translate3d(0, 3px, 0) skewX(5deg);
  }
  75% {
    text-shadow: 
      -2px 0 0 rgba(255, 0, 255, 0.7),
      2px 0 0 rgba(0, 255, 0, 0.7);
    transform: translate3d(0, -3px, 0) skewX(-5deg);
  }
  100% {
    text-shadow: 
      3px 0 0 rgba(255, 0, 0, 0.7),
      -3px 0 0 rgba(0, 255, 255, 0.7);
    transform: translate3d(3px, 0, 0) scale(1.03);
  }
}

@keyframes rotateText {
  0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
  25% { transform: rotateY(15deg) rotateX(5deg); }
  50% { transform: rotateY(0deg) rotateX(0deg); }
  75% { transform: rotateY(-15deg) rotateX(-5deg); }
}

@keyframes scaleText {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.main-title::before,
.main-title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  z-index: -1;
}

.main-title::before {
  animation: glitch-effect 3s infinite, hueRotate 5s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.04em, -0.02em) translateZ(10px);
  opacity: 0.8;
  color: #ff00ea;
  filter: blur(0.5px);
}

.main-title::after {
  animation: glitch-effect 2s infinite, hueRotate 5s infinite reverse;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.02em) translateZ(-10px);
  opacity: 0.8;
  color: #00ffff;
  filter: blur(0.5px);
}

@keyframes vibrate {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(2px, 2px); }
  100% { transform: translate(0); }
}

@keyframes hueRotate {
  0% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(180deg); }
  100% { filter: hue-rotate(360deg); }
}

@keyframes glitch-effect {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-3px, 3px);
  }
  40% {
    transform: translate(-3px, -3px);
  }
  60% {
    transform: translate(3px, 3px);
  }
  80% {
    transform: translate(3px, -3px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes glitch {
  0%, 100% {
    transform: translateX(0);
    opacity: 1;
  }
  7% {
    transform: translateX(-2px);
    opacity: 0.75;
  }
  10% {
    transform: translateX(2px);
    opacity: 1;
  }
  20% {
    transform: translateX(-2px);
    opacity: 1;
  }
  30% {
    transform: translateX(0);
    opacity: 1;
  }
}

.subtitle {
  font-size: 28px;
  margin: 10px 0 30px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s 0.5s forwards;
  color: #ffffff;
  font-weight: 300;
  letter-spacing: 1px;
}

.hero-description {
  max-width: 600px;
  margin: 0 auto 40px;
}

.hero-description p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
  opacity: 0;
  transform: translateY(20px);
  color: #e0e0e0;
}

.hero-description p:nth-child(1) {
  animation: fadeInUp 1s 0.8s forwards;
}

.hero-description p:nth-child(2) {
  animation: fadeInUp 1s 1.1s forwards;
}

.explore-btn {
  background: linear-gradient(45deg, rgba(66, 198, 255, 0.7), rgba(42, 123, 255, 0.7));
  color: white;
  border: none;
  padding: 18px 50px;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s 1.4s forwards, pulse 2s ease-in-out infinite 2.5s, hoverglow 3s infinite 3s, float 4s ease-in-out infinite 2s, rotate 6s linear infinite 3s;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 
    0 5px 15px rgba(66, 198, 255, 0.3), 
    0 0 30px rgba(66, 198, 255, 0.3), 
    inset 0 0 15px rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation-play-state: running !important;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
}

.explore-btn::after {
  content: '';
  position: absolute;
  inset: -2px;
  z-index: -1;
  border-radius: 31px;
  background: linear-gradient(
    var(--gradient-angle),
    #42c6ff,
    #ff42e3,
    #42ff9e,
    #42c6ff
  );
  opacity: 0;
  transition: opacity 0.3s;
  animation: rotate-gradient 3s linear infinite;
}

.explore-btn:hover::after {
  opacity: 1;
}

@keyframes rotate {
  0% { transform: rotate(0deg) translateY(-5px); }
  25% { transform: rotate(2deg) translateY(-15px); }
  50% { transform: rotate(0deg) translateY(-5px); }
  75% { transform: rotate(-2deg) translateY(-15px); }
  100% { transform: rotate(0deg) translateY(-5px); }
}

@keyframes hoverglow {
  0%, 100% {
    text-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px #42c6ff;
    box-shadow: 0 5px 15px rgba(66, 198, 255, 0.3), 0 0 30px rgba(66, 198, 255, 0.3), 
                inset 0 0 15px rgba(255, 255, 255, 0.3), 0 0 20px rgba(66, 198, 255, 0.3), 
                0 0 40px rgba(66, 198, 255, 0.2);
  }
  50% {
    text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px #42c6ff, 0 0 50px #42c6ff;
    box-shadow: 0 5px 25px rgba(66, 198, 255, 0.7), 0 0 50px rgba(66, 198, 255, 0.5), 
                inset 0 0 25px rgba(255, 255, 255, 0.5), 0 0 40px rgba(66, 198, 255, 0.5), 
                0 0 70px rgba(66, 198, 255, 0.4);
  }
}

.explore-btn:hover {
  transform: translateY(-10px) scale(1.1);
  box-shadow: 0 15px 30px rgba(66, 198, 255, 0.6), 0 0 60px rgba(66, 198, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.5);
  background: linear-gradient(45deg, #42ffee, #4287ff);
  animation: none;
  letter-spacing: 3px;
}

.explore-btn:hover {
  transform: translateY(-25px) scale(1.4) rotate(8deg) perspective(800px) rotateX(15deg) rotateY(-15deg);
  box-shadow: 0 30px 60px rgba(66, 198, 255, 0.9), 0 0 120px rgba(66, 198, 255, 0.7), 0 0 180px rgba(66, 198, 255, 0.5), 0 0 250px rgba(66, 198, 255, 0.3);
  letter-spacing: 15px;
  text-shadow: 0 0 15px #fff, 0 0 30px #fff, 0 0 45px #42c6ff, 0 0 60px #42c6ff, 0 0 90px #42c6ff;
  background: linear-gradient(45deg, #42ffee, #4287ff, #ff42e3, #42ff9e, #fffc42, #ff4242, #42fff0);
  background-size: 400% 400%;
  animation: gradientShift 2s ease infinite !important, wobble 0.5s ease-in-out infinite alternate !important, pulse3D 3s ease-in-out infinite !important;
  border-radius: 50px;
  backdrop-filter: blur(20px);
  z-index: 1000;
}

@keyframes wobble {
  0% {
    transform: translateY(-25px) scale(1.4) rotate(5deg) perspective(800px) rotateX(15deg) rotateY(-15deg);
  }
  100% {
    transform: translateY(-25px) scale(1.4) rotate(-5deg) perspective(800px) rotateX(-15deg) rotateY(15deg);
  }
}

@keyframes pulse3D {
  0%, 100% {
    text-shadow: 0 0 15px #fff, 0 0 30px #fff, 0 0 45px #42c6ff, 0 0 60px #42c6ff, 0 0 90px #42c6ff;
    box-shadow: 0 30px 60px rgba(66, 198, 255, 0.9), 0 0 120px rgba(66, 198, 255, 0.7), 0 0 180px rgba(66, 198, 255, 0.5), 0 0 250px rgba(66, 198, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 25px #fff, 0 0 50px #ff42e3, 0 0 75px #ff42e3, 0 0 90px #ff42e3, 0 0 120px #ff42e3;
    box-shadow: 0 30px 60px rgba(255, 66, 227, 0.9), 0 0 120px rgba(255, 66, 227, 0.7), 0 0 180px rgba(255, 66, 227, 0.5), 0 0 250px rgba(255, 66, 227, 0.3);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.explore-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
  z-index: 1;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.explore-btn:hover::before {
  animation: shimmer 1.5s forwards;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(100%) rotate(45deg);
    opacity: 0;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(66, 198, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(66, 198, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(66, 198, 255, 0);
  }
}

.floating-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.float-image {
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  opacity: 0.8;
  animation: floatAnimation 6s ease-in-out infinite;
}

.float-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img1 {
  width: 200px;
  height: 300px;
  top: 15%;
  left10%;
  animation-delay: 1.8s, 2.5s;
  animation-duration: 1s, 7s;
}

.img2 {
  width: 250px;
  height: 180px;
  bottom: 20%;
  left: 15%;
  animation-delay: 2.2s, 2.8s;
  animation-duration: 1s, 8s;
}

.img3 {
  width: 180px;
  height: 250px;
  top: 25%;
  right: 10%;
  animation-delay: 2.4s, 3s;
  animation-duration: 1s, 9s;
}

.img4 {
  width: 220px;
  height: 160px;
  bottom: 25%;
  right: 15%;
  animation-delay: 2.6s, 3.2s;
  animation-duration: 1s, 7.5s;
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.8);
  }
  to {
    opacity: 0.8;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.strategy-section {
  margin: 50px 0;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s forwards;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.strategy-section:nth-child(odd) {
  animation: fadeInLeft 0.8s forwards;
}

.strategy-section:nth-child(even) {
  animation: fadeInRight 0.8s forwards;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.strategy-section h2 {
  color: #42c6ff;
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
}

.gallery-section {
  padding: 40px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-section.active-section {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 48px;
  color: #42c6ff;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 0 0 15px rgba(66, 198, 255, 0.3);
  position: relative;
  animation: rainbowText 3s linear infinite;
}

.section-title::before {
  content: '';
  position: absolute;
  inset: -10px -30px;
  background: linear-gradient(90deg, 
    transparent, rgba(66, 198, 255, 0.3), rgba(255, 66, 227, 0.3), 
    rgba(66, 255, 189, 0.3), rgba(255, 255, 66, 0.3), transparent);
  z-index: -1;
  filter: blur(10px);
  border-radius: 30px;
  animation: rainbowWave 3s ease-in-out infinite alternate, 
             rotate3D 5s linear infinite, liquidMorph 8s linear infinite;
  opacity: 0.7;
  transform-style: preserve-3d;
  clip-path: polygon(
    0% 0%, 
    100% 0%, 
    100% 75%, 
    75% 75%, 
    75% 100%, 
    50% 75%, 
    0% 75%
  );
}

@keyframes liquidMorph {
  0% {
    clip-path: polygon(
      0% 0%, 
      100% 0%, 
      100% 75%, 
      75% 75%, 
      75% 100%, 
      50% 75%, 
      0% 75%
    );
  }
  25% {
    clip-path: polygon(
      0% 15%, 
      15% 15%, 
      15% 0%, 
      85% 0%, 
      85% 15%, 
      100% 15%, 
      100% 85%, 
      85% 85%, 
      85% 100%, 
      15% 100%, 
      15% 85%, 
      0% 85%
    );
  }
  50% {
    clip-path: polygon(
      50% 0%, 
      100% 50%, 
      50% 100%, 
      0% 50%
    );
  }
  75% {
    clip-path: polygon(
      20% 0%, 
      80% 0%, 
      100% 20%, 
      100% 80%, 
      80% 100%, 
      20% 100%, 
      0% 80%, 
      0% 20%
    );
  }
  100% {
    clip-path: polygon(
      0% 0%, 
      100% 0%, 
      100% 75%, 
      75% 75%, 
      75% 100%, 
      50% 75%, 
      0% 75%
    );
  }
}

@keyframes rainbowText {
  0% { color: #42c6ff; text-shadow: 0 0 15px rgba(66, 198, 255, 0.5); }
  25% { color: #ff42e3; text-shadow: 0 0 15px rgba(255, 66, 227, 0.5); }
  50% { color: #42ff9e; text-shadow: 0 0 15px rgba(66, 255, 158, 0.5); }
  75% { color: #fffc42; text-shadow: 0 0 15px rgba(255, 252, 66, 0.5); }
  100% { color: #42c6ff; text-shadow: 0 0 15px rgba(66, 198, 255, 0.5); }
}

@keyframes rainbowWave {
  0% { 
    width: 80%; 
    height: 50px;
    transform: translateX(-20%) translateY(0);
  }
  50% {
    width: 120%;
    height: 70px;
    transform: translateX(0%) translateY(-10px);
  }
  100% { 
    width: 80%; 
    height: 50px;
    transform: translateX(20%) translateY(0);
  }
}

@keyframes rotate3D {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(5deg) rotateY(10deg); }
  50% { transform: rotateX(0deg) rotateY(0deg); }
  75% { transform: rotateX(-5deg) rotateY(-10deg); }
  100% { transform: rotateX(0deg) rotateY(0deg); }
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.gallery-item {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  perspective: 1000px;
  opacity: 0;
  transform: translateY(50px);
  animation: itemPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  z-index: 1;
}

.gallery-item:hover {
  transform: scale(1.2);
  z-index: 100;
  animation: crazySuperPulse 1.5s infinite alternate-reverse;
}

@keyframes crazySuperPulse {
  0% {
    box-shadow: 
      0 20px 100px rgba(255, 0, 255, 0.9),
      0 0 150px rgba(255, 0, 255, 0.7),
      inset 0 0 40px rgba(255, 0, 255, 0.7);
    border: 3px solid rgba(255, 0, 255, 0.9);
    filter: hue-rotate(0deg) brightness(1.5) contrast(1.8);
  }
  25% {
    box-shadow: 
      0 -20px 100px rgba(0, 255, 255, 0.9),
      0 0 150px rgba(0, 255, 255, 0.7),
      inset 0 0 40px rgba(0, 255, 255, 0.7);
    border: 3px solid rgba(0, 255, 255, 0.9);
    filter: hue-rotate(90deg) brightness(1.7) contrast(2.2) saturate(2.5);
    transform: scale(1.25) rotate(5deg);
  }
  50% {
    box-shadow: 
      0 20px 100px rgba(255, 255, 0, 0.9),
      0 0 150px rgba(255, 255, 0, 0.7),
      inset 0 0 40px rgba(255, 255, 0, 0.7);
    border: 3px solid rgba(255, 255, 0, 0.9);
    filter: hue-rotate(180deg) brightness(1.9) contrast(1.5);
    transform: scale(1.3) rotate(-5deg);
  }
  75% {
    box-shadow: 
      0 -20px 100px rgba(0, 255, 0, 0.9),
      0 0 150px rgba(0, 255, 0, 0.7),
      inset 0 0 40px rgba(0, 255, 0, 0.7);
    border: 3px solid rgba(0, 255, 0, 0.9);
    filter: hue-rotate(270deg) brightness(1.8) contrast(2) saturate(2);
    transform: scale(1.25) rotate(5deg);
  }
  100% {
    box-shadow: 
      0 20px 100px rgba(255, 0, 255, 0.9),
      0 0 150px rgba(255, 0, 255, 0.7),
      inset 0 0 40px rgba(255, 0, 255, 0.7);
    border: 3px solid rgba(255, 0, 255, 0.9);
    filter: hue-rotate(360deg) brightness(1.5) contrast(1.8);
    transform: scale(1.2) rotate(0deg);
  }
}

.gallery-item:hover ~ .gallery-item {
  filter: blur(8px) brightness(0.4) contrast(0.8);
  opacity: 0.3;
  transform: scale(0.9) translateY(10px) translateZ(-50px);
  transition: all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.2);
}

.gallery-section:has(.gallery-item:hover) .gallery-item:not(:hover) {
  filter: blur(8px) brightness(0.4) contrast(0.8);
  opacity: 0.3;
  transform: scale(0.9) translateY(10px) translateZ(-50px);
  transition: all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.2);
}

.gallery-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(66, 198, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1;
}

.gallery-item:hover::before {
  opacity: 1;
}

.gallery-item::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 20px;
  transition: all 0.3s;
}

.gallery-item:hover::after {
  inset: -4px;
  border-color: #42c6ff;
  box-shadow: 0 0 20px rgba(66, 198, 255, 0.4);
}

.gallery-item.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes floatAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.gallery-item:hover {
  transform: scale(1.2);
  box-shadow: 0 30px 80px rgba(66, 198, 255, 0.9), 0 0 40px rgba(66, 198, 255, 0.8);
  transition: all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.2);
  z-index: 1000;
  outline: 6px solid rgba(66, 198, 255, 0.6);
  outline-offset: 10px;
  backdrop-filter: blur(3px);
  will-change: transform, box-shadow;
}

@keyframes megaExplosiveGlow {
  0%, 100% {
    box-shadow: 0 60px 150px rgba(255, 0, 255, 0.9), 0 0 300px rgba(255, 0, 255, 0.8), 0 0 500px rgba(255, 0, 255, 0.5);
    outline-color: rgba(255, 0, 255, 0.9);
  }
  20% {
    box-shadow: 0 -60px 150px rgba(0, 255, 255, 0.9), 0 0 300px rgba(0, 255, 255, 0.8), 0 0 500px rgba(0, 255, 255, 0.5);
    outline-color: rgba(0, 255, 255, 0.9);
  }
  40% {
    box-shadow: 0 60px 150px rgba(255, 255, 0, 0.9), 0 0 300px rgba(255, 255, 0, 0.8), 0 0 500px rgba(255, 255, 0, 0.5);
    outline-color: rgba(255, 255, 0, 0.9);
  }
  60% {
    box-shadow: 0 -60px 150px rgba(0, 255, 0, 0.9), 0 0 300px rgba(0, 255, 0, 0.8), 0 0 500px rgba(0, 255, 0, 0.5);
    outline-color: rgba(0, 255, 0, 0.9);
  }
  80% {
    box-shadow: 0 60px 150px rgba(255, 0, 0, 0.9), 0 0 300px rgba(255, 0, 0, 0.8), 0 0 500px rgba(255, 0, 0, 0.5);
    outline-color: rgba(255, 0, 0, 0.9);
  }
}

@keyframes whirlSpin {
  0% {
    transform: scale(1.8) rotate(0deg) translateY(0);
  }
  25% {
    transform: scale(1.9) rotate(5deg) translateY(-10px);
  }
  50% {
    transform: scale(2) rotate(-5deg) translateY(10px);
  }
  75% {
    transform: scale(1.9) rotate(5deg) translateY(-10px);
  }
  100% {
    transform: scale(1.8) rotate(0deg) translateY(0);
  }
}

@keyframes discoFilter {
  0%, 100% {
    filter: hue-rotate(0deg) saturate(3) contrast(1.8) brightness(1.6);
  }
  20% {
    filter: hue-rotate(72deg) saturate(4) contrast(2) brightness(1.8);
  }
  40% {
    filter: hue-rotate(144deg) saturate(5) contrast(1.5) brightness(2);
  }
  60% {
    filter: hue-rotate(216deg) saturate(4) contrast(2.2) brightness(1.9);
  }
  80% {
    filter: hue-rotate(288deg) saturate(3.5) contrast(1.9) brightness(1.7);
  }
}

/* Extra crazy animations */
.gallery-item:hover::before {
  content: '';
  position: absolute;
  inset: -20px;
  background: conic-gradient(
    from var(--angle),
    #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #ff2400
  );
  z-index: -2;
  border-radius: 20px;
  animation: rotateGradient 2s linear 1;
  opacity: 0.7;
  filter: blur(15px);
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotateGradient {
  from { --angle: 0deg; }
  to { --angle: 360deg; }
}

/* Exit animation for gallery items */
.gallery-item:not(:hover) {
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mega Crazy Intense Animations */
.gallery-item:hover::before {
  animation: crazyPulse 0.5s infinite alternate;
}

@keyframes crazyPulse {
  0% {
    opacity: 0.2;
    background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
                rgba(255, 0, 255, 0.8) 0%, 
                rgba(0, 255, 255, 0.4) 20%, 
                transparent 60%);
  }
  50% {
    opacity: 0.6;
    background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
                rgba(0, 255, 255, 0.8) 0%, 
                rgba(255, 255, 0, 0.4) 20%, 
                transparent 60%);
  }
  100% {
    opacity: 0.4;
    background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
                rgba(255, 255, 0, 0.8) 0%, 
                rgba(255, 0, 255, 0.4) 20%, 
                transparent 60%);
  }
}

/* Super neon border effect */
.gallery-item:hover::after {
  animation: neonBorderPulse 0.5s infinite alternate;
}

@keyframes neonBorderPulse {
  0% {
    border-color: #42c6ff;
    box-shadow: 0 0 20px #42c6ff, 0 0 40px #42c6ff, 0 0 60px #42c6ff;
  }
  33% {
    border-color: #ff42e3;
    box-shadow: 0 0 20px #ff42e3, 0 0 40px #ff42e3, 0 0 60px #ff42e3;
  }
  66% {
    border-color: #42ff75;
    box-shadow: 0 0 20px #42ff75, 0 0 40px #42ff75, 0 0 60px #42ff75;
  }
  100% {
    border-color: #ffff42;
    box-shadow: 0 0 20px #ffff42, 0 0 40px #ffff42, 0 0 60px #ffff42;
  }
}

.gallery-item:hover img {
  transform: scale(1.1);
  filter: brightness(1.2);
  transition: all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.2);
}

@keyframes ultraShakenGlow {
  0% {
    box-shadow: 0 0 50px #42c6ff, 0 0 100px #42c6ff, 0 0 200px #42c6ff;
    transform: translateY(-55px) rotateX(30deg) rotateY(20deg) scale(1.5) perspective(1200px) translateZ(100px);
    outline-color: rgba(66, 198, 255, 0.9);
  }
  25% {
    box-shadow: 0 0 80px #ff42e3, 0 0 160px #ff42e3, 0 0 250px #ff42e3;
    transform: translateY(-60px) rotateX(35deg) rotateY(15deg) scale(1.53) perspective(1200px) translateZ(120px);
    outline-color: rgba(255, 66, 227, 0.9);
  }
  50% {
    box-shadow: 0 0 100px #42ffbd, 0 0 200px #42ffbd, 0 0 300px #42ffbd;
    transform: translateY(-50px) rotateX(25deg) rotateY(25deg) scale(1.48) perspective(1200px) translateZ(80px);
    outline-color: rgba(66, 255, 189, 0.9);
  }
  75% {
    box-shadow: 0 0 70px #ff9142, 0 0 140px #ff9142, 0 0 230px #ff9142;
    transform: translateY(-52px) rotateX(28deg) rotateY(22deg) scale(1.49) perspective(1200px) translateZ(90px);
    outline-color: rgba(255, 145, 66, 0.9);
  }
  100% {
    box-shadow: 0 0 50px #42c6ff, 0 0 100px #42c6ff, 0 0 200px #42c6ff;
    transform: translateY(-55px) rotateX(30deg) rotateY(20deg) scale(1.5) perspective(1200px) translateZ(100px);
    outline-color: rgba(66, 198, 255, 0.9);
  }
}

@keyframes pulseScale {
  0% {
    transform: translateY(-55px) rotateX(30deg) rotateY(20deg) scale(1.5) perspective(1200px) translateZ(100px);
  }
  50% {
    transform: translateY(-55px) rotateX(30deg) rotateY(20deg) scale(1.6) perspective(1200px) translateZ(150px);
  }
  100% {
    transform: translateY(-55px) rotateX(30deg) rotateY(20deg) scale(1.5) perspective(1200px) translateZ(100px);
  }
}

.gallery-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
                rgba(255, 255, 255, 0.8) 0%, 
                rgba(66, 198, 255, 0.4) 20%, 
                transparent 60%);
  opacity: 0;
  z-index: 3;
  mix-blend-mode: overlay;
  pointer-events: none;
  transition: opacity 0.5s;
}

.gallery-item:hover::before {
  opacity: 1;
}


.gallery-item img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.9);
}

.gallery-item:hover img {
  transform: scale(1.08);
  filter: brightness(1.1);
}

.item-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  transform: translateY(100%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gallery-item:hover .item-content {
  transform: translateY(0);
}

.item-content h3 {
  color: #42c6ff;
  margin-bottom: 10px;
  font-size: 24px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}

.item-content p {
  color: white;
  font-size: 16px;
  line-height: 1.6;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.gallery-item:hover .item-content h3,
.gallery-item:hover .item-content p {
  transform: translateY(0);
  opacity: 1;
}

.photo-container {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  transition: all 0.5s ease-out;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  margin: 20px;
  padding-bottom: 60px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
}

.photo-container:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 25px rgba(66, 198, 255, 0.3);
}

.photo-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(66, 198, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.photo-container:hover::after {
  opacity: 1;
}

.photo-container img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease-out;
}

.photo-container:hover img {
  transform: scale(1.1);
}

.photo-container h3 {
  margin-top: 20px;
  color: #42c6ff;
  font-size: 22px;
  text-align: center;
  opacity: 1;
  padding: 0 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.photo-container p {
  margin-top: 10px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  opacity: 1;
  padding: 0 20px;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.photo-container:hover h3,
.photo-container:hover p {
  opacity: 1;
  transform: translateY(0);
}

.strategy-section {
  margin: 120px 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 40px;
  background: rgba(26, 26, 26, 0.6);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.strategy-section h2 {
  position: relative;
  display: inline-block;
}

.strategy-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 0;
  height: 3px;
  background: #42c6ff;
  transition: width 0.8s ease-out;
}

.strategy-section.active h2::after {
  width: 100%;
}

section {
  display: none;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

#home {
  display: none;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  display: none;
}

.blank-section {
  min-height: 100vh;
  background: #111111;
  display: block;
  width: 100%;
}

section.active-section {
  display: block;
  animation: sectionFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes sectionFadeIn {
  0% {
    opacity: 0;
    transform: translateY(150px) scale(0.5) rotateX(40deg) rotateY(30deg) skewX(20deg);
    filter: blur(30px) brightness(3) contrast(2) saturate(3);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    box-shadow: 0 0 100px 50px rgba(66, 198, 255, 0.8);
  }
  15% {
    opacity: 0.2;
    transform: translateY(-100px) scale(1.5) rotateX(-30deg) rotateY(-25deg) skewY(-15deg);
    filter: blur(20px) brightness(2.5) hue-rotate(90deg) contrast(3);
    clip-path: polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%);
    box-shadow: 0 0 150px 80px rgba(255, 66, 255, 0.8);
  }
  30% {
    opacity: 0.5;
    transform: translateY(50px) scale(0.7) rotateX(45deg) rotateY(15deg) skewX(-25deg);
    filter: blur(10px) brightness(2) hue-rotate(180deg) saturate(4);
    clip-path: circle(50%);
    box-shadow: 0 0 200px 100px rgba(66, 255, 182, 0.8);
  }
  45% {
    opacity: 0.7;
    transform: translateY(-70px) scale(1.3) rotateX(-15deg) rotateY(-35deg) skewY(20deg);
    filter: blur(5px) brightness(1.8) hue-rotate(270deg) contrast(2.5);
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    box-shadow: 0 0 180px 90px rgba(255, 187, 66, 0.8);
  }
  60% {
    opacity: 0.8;
    transform: translateY(30px) scale(0.9) rotateX(25deg) rotateY(20deg) skewX(15deg);
    filter: blur(15px) brightness(1.5) hue-rotate(320deg) saturate(3);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    box-shadow: 0 0 150px 75px rgba(66, 255, 82, 0.8);
  }
  75% {
    opacity: 0.9;
    transform: translateY(-20px) scale(1.1) rotateX(-5deg) rotateY(-10deg) skewY(-10deg);
    filter: blur(8px) brightness(1.3) hue-rotate(360deg) contrast(1.8);
    clip-path: inset(10%);
    box-shadow: 0 0 120px 60px rgba(255, 66, 129, 0.8);
  }
  90% {
    opacity: 0.95;
    transform: translateY(10px) scale(0.95) rotateX(10deg) rotateY(5deg) skewX(-5deg);
    filter: blur(3px) brightness(1.1) saturate(2);
    clip-path: inset(5% 10% 5% 10%);
    box-shadow: 0 0 80px 40px rgba(66, 135, 255, 0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0) rotateY(0) skew(0);
    filter: blur(0) brightness(1) hue-rotate(0) saturate(1);
    clip-path: inset(0);
    box-shadow: 0 0 50px 25px rgba(66, 198, 255, 0.3);
  }
}

.item-revealed {
  animation: revealPop 0.8s cubic-bezier(0.2, 1.1, 0.4, 1.3) forwards !important;
}

@keyframes revealPop {
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(50px);
    filter: blur(10px) brightness(2);
  }
  50% {
    opacity: 1;
    transform: scale(1.1) translateY(-10px);
    filter: blur(0) brightness(1.3);
  }
  70% {
    transform: scale(0.95) translateY(5px);
    filter: brightness(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: brightness(1);
  }
}

.technique-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 40px;
}

.technique-btn {
  background: rgba(26, 26, 26, 0.6);
  border: 2px solid rgba(66, 198, 255, 0.3);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.technique-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(66, 198, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.4s;
}

.technique-btn:hover::before {
  transform: translateX(0);
}

.technique-btn:hover {
  transform: translateY(-3px) rotateY(10deg) rotateX(5deg);
  border-color: rgba(66, 198, 255, 0.8);
  box-shadow: 0 5px 15px rgba(66, 198, 255, 0.3);
  background: conic-gradient(
    from var(--angle),
    rgba(66, 198, 255, 0.8),
    rgba(255, 66, 227, 0.8),
    rgba(255, 255, 66, 0.8),
    rgba(66, 255, 158, 0.8),
    rgba(66, 198, 255, 0.8)
  );
  animation: liquidButton 1s linear 1, rotateGradient 3s linear 1;
  color: black;
  font-weight: bold;
  text-shadow: 0 0 5px white;
}

@keyframes liquidButton {
  0% {
    border-radius: 25px;
  }
  25% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  50% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
  75% {
    border-radius: 30% 70% 70% 30% / 70% 30% 70% 30%;
  }
  100% {
    border-radius: 25px;
  }
}

.technique-btn.active {
  background: linear-gradient(45deg, #42c6ff, #2a7bff);
  color: white;
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(66, 198, 255, 0.5);
}

.technique-panel {
  display: none;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.technique-panel.active {
  display: block;
  animation: panelFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes panelFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@keyframes itemPop {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(100px) rotate(-10deg);
    filter: blur(20px);
  }
  60% {
    opacity: 1;
    transform: scale(1.2) translateY(-20px) rotate(5deg);
    filter: blur(0);
  }
  80% {
    transform: scale(0.95) translateY(5px) rotate(-2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotate(0);
  }
}

@keyframes shockwave {
  0% {
    box-shadow: 0 0 0 0 rgba(66, 198, 255, 0.8);
    transform: scale(1);
  }
  70% {
    box-shadow: 0 0 0 50px rgba(66, 198, 255, 0);
    transform: scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(66, 198, 255, 0);
    transform: scale(1);
  }
}

.gallery-grid {
  opacity: 0;
  animation: gridFadeIn 1s ease forwards;
}

@keyframes gridFadeIn {
  to {
    opacity: 1;
  }
}

.nav-links a.active {
  color: #42c6ff;
  text-shadow: 0 0 10px rgba(66, 198, 255, 0.5);
  position: relative;
}

.nav-links a.active::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #42c6ff;
  box-shadow: 0 0 10px rgba(66, 198, 255, 0.5);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatAnimation {
  0% {
    transform: translateY(0) rotate(-2deg) translateX(0);
    filter: brightness(1) contrast(1);
  }
  25% {
    transform: translateY(-20px) rotate(1deg) translateX(5px);
    filter: brightness(1.1) contrast(1.05);
  }
  50% {
    transform: translateY(-10px) rotate(2deg) translateX(-5px);
    filter: brightness(1.2) contrast(1.1);
  }
  75% {
    transform: translateY(-25px) rotate(-1deg) translateX(5px);
    filter: brightness(1.1) contrast(1.05);
  }
  100% {
    transform: translateY(0) rotate(-2deg) translateX(0);
    filter: brightness(1) contrast(1);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.gallery-item:nth-child(odd) {
  animation-duration: 6s;
}

.gallery-item:nth-child(even) {
  animation-duration: 7s;
}

@media (max-width: 1200px) {
  .floating-images {
    display: none;
  }

  .home-hero {
    padding: 0 20px;
  }

  .gallery-item:hover {
    transform: scale(1.1) translateY(-15px) rotateY(10deg);
    animation: megaGlowMedia 1s 1;
  }

  @keyframes megaGlowMedia {
    0% {
      box-shadow: 0 0 10px rgba(66, 198, 255, 0.5);
      filter: brightness(1);
    }
    50% {
      box-shadow: 0 0 50px rgba(255, 66, 227, 0.9), 0 0 100px rgba(66, 198, 255, 0.7);
      filter: brightness(1.5) contrast(1.3) saturate(1.5);
    }
    100% {
      box-shadow: 0 0 20px rgba(66, 198, 255, 0.7);
      filter: brightness(1.1);
    }
  }

  .technique-btn:hover {
    transform: translateX(5px) translateY(-5px);
    letter-spacing: 3px;
    animation: mediaButtonGlitch 0.5s 1;
  }

  @keyframes mediaButtonGlitch {
    0% {
      clip-path: inset(0 0 0 0);
      transform: translateX(5px) translateY(-5px);
    }
    10% {
      clip-path: inset(10% 0 0 10%);
      transform: translateX(-5px) translateY(5px);
    }
    20% {
      clip-path: inset(0 10% 10% 0);
      transform: translateX(5px) translateY(5px);
    }
    30% {
      clip-path: inset(10% 10% 0 0);
      transform: translateX(-5px) translateY(-5px);
    }
    40% {
      clip-path: inset(0 0 10% 10%);
      transform: translateX(0) translateY(0);
    }
    100% {
      clip-path: inset(0 0 0 0);
      transform: translateX(5px) translateY(-5px);
    }
  }
}

@media (max-width: 768px) {
  .photo-pair {
    flex-direction: column;
    align-items: center;
  }

  .photo-container {
    width: 100%;
  }

  nav {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }

  .nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(5px);
    z-index: -1;
  }

  .nav-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .nav-links a {
    margin: 0;
  }

  .main-title {
    font-size: 42px;
  }

  .subtitle {
    font-size: 20px;
  }

  .hero-description p {
    font-size: 16px;
  }

  .technique-nav {
    flex-direction: column;
    align-items: center;
  }

  .technique-btn {
    width: 80%;
  }
}

/* Extreme Particle effects */
.particle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  perspective: 1000px;
}

.particle {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #42c6ff;
  border-radius: 50%;
  animation: particleFloat 10s infinite linear, particlePulse 3s infinite alternate;
  opacity: 0.6;
  box-shadow: 0 0 10px #42c6ff, 0 0 20px #42c6ff, 0 0 40px #42c6ff;
  filter: blur(1px);
  transform-style: preserve-3d;
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) translateX(-50px) translateZ(-100px) scale(0) rotate(0deg) rotateX(0deg) rotateY(0deg);
    opacity: 0;
    filter: hue-rotate(0deg) brightness(1);
  }
  10% {
    opacity: 0.9;
    transform: translateY(80vh) translateX(50px) translateZ(50px) scale(0.8) rotate(180deg) rotateX(180deg) rotateY(90deg);
  }
  30% {
    transform: translateY(50vh) translateX(-80px) translateZ(-50px) scale(1.5) rotate(360deg) rotateX(90deg) rotateY(180deg);
    box-shadow: 0 0 40px #42fff1, 0 0 80px #42fff1, 0 0 120px #42fff1;
    filter: hue-rotate(90deg) brightness(1.5);
  }
  50% {
    transform: translateY(30vh) translateX(100px) translateZ(100px) scale(0.5) rotate(540deg) rotateX(270deg) rotateY(270deg);
    box-shadow: 0 0 50px #ff42e3, 0 0 100px #ff42e3, 0 0 150px #ff42e3;
    filter: hue-rotate(180deg) brightness(2);
  }
  70% {
    transform: translateY(10vh) translateX(-120px) translateZ(-70px) scale(1.2) rotate(720deg) rotateX(360deg) rotateY(360deg);
    box-shadow: 0 0 60px #42ff66, 0 0 120px #42ff66, 0 0 180px #42ff66;
    filter: hue-rotate(270deg) brightness(1.7);
  }
  90% {
    opacity: 0.8;
    transform: translateY(-50px) translateX(70px) translateZ(150px) scale(1.8) rotate(900deg) rotateX(450deg) rotateY(450deg);
    filter: hue-rotate(330deg) brightness(1.3);
  }
  100% {
    transform: translateY(-100px) translateX(-30px) translateZ(-120px) scale(2) rotate(1080deg) rotateX(540deg) rotateY(540deg);
    opacity: 0;
    box-shadow: 0 0 30px #42c6ff, 0 0 60px #42c6ff, 0 0 90px #42c6ff;
    filter: hue-rotate(360deg) brightness(1);
  }
}

@keyframes particlePulse {
  0% {
    width: 5px;
    height: 5px;
    filter: blur(1px);
  }
  50% {
    width: 8px;
    height: 8px;
    filter: blur(2px);
  }
  100% {
    width: 3px;
    height: 3px;
    filter: blur(0.5px);
  }
}

/* Add floating geometric shapes */
.geo-shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -2;
  perspective: 1000px;
}

.geo-shape {
  position: absolute;
  opacity: 0.15;
  filter: blur(2px);
  animation: geoFloat 15s infinite ease-in-out;
  box-shadow: 0 0 50px currentColor;
  transform-style: preserve-3d;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 150px solid cyan;
}

.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(45deg, magenta, blue);
}

.square {
  width: 120px;
  height: 120px;
  background: linear-gradient(to right, yellow, lime);
  transform: rotate(45deg);
}

@keyframes geoFloat {
  0% {
    transform: translateY(0) translateX(0) translateZ(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    opacity: 0.1;
  }
  25% {
    transform: translateY(-100px) translateX(50px) translateZ(100px) rotateX(180deg) rotateY(90deg) rotateZ(45deg);
    opacity: 0.2;
  }
  50% {
    transform: translateY(50px) translateX(-80px) translateZ(-50px) rotateX(360deg) rotateY(180deg) rotateZ(90deg);
    opacity: 0.15;
  }
  75% {
    transform: translateY(-30px) translateX(100px) translateZ(80px) rotateX(540deg) rotateY(270deg) rotateZ(180deg);
    opacity: 0.25;
  }
  100% {
    transform: translateY(0) translateX(0) translateZ(0) rotateX(720deg) rotateY(360deg) rotateZ(360deg);
    opacity: 0.1;
  }
}

/* Energy beam effect for section transitions */
@keyframes energyBeam {
  0% {
    opacity: 0;
    height: 0;
    background-position: 0% 0%;
  }
  50% {
    opacity: 1;
    height: 100%;
    background-position: 100% 100%;
  }
  100% {
    opacity: 0;
    height: 0;
    background-position: 200% 200%;
  }
}

/* Electricity effect for buttons */
@keyframes electricity {
  0%, 100% {
    box-shadow: 
      0 0 5px #42c6ff,
      0 0 10px #42c6ff,
      0 0 15px #42c6ff,
      0 0 20px #42c6ff;
  }
  25% {
    box-shadow: 
      0 0 5px #f542ff,
      0 0 10px #f542ff,
      0 0 15px #f542ff,
      0 0 20px #f542ff;
  }
  50% {
    box-shadow: 
      0 0 10px #42e3ff,
      0 0 20px #42e3ff,
      0 0 30px #42e3ff,
      0 0 40px #42e3ff,
      0 0 70px #42e3ff;
  }
  75% {
    box-shadow: 
      0 0 5px #42ff9e,
      0 0 10px #42ff9e,
      0 0 15px #42ff9e,
      0 0 20px #42ff9e;
  }
}

/* Cursor trail effect has been removed */

/* Button click effect */
.btn-click {
  animation: ultraMegaShockwave 1.5s cubic-bezier(0.1, 0.9, 0.2, 1.5) forwards !important;
  position: relative;
  z-index: 9999;
}

@keyframes ultraMegaShockwave {
  0% {
    transform: scale(1) rotate(0deg) translateZ(0);
    filter: brightness(1) hue-rotate(0deg) saturate(1);
    text-shadow: 0 0 0 transparent;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    border-radius: 30px;
  }
  10% {
    transform: scale(1.8) rotate(-15deg) translateZ(100px) translateY(-50px);
    filter: brightness(3) hue-rotate(90deg) saturate(5) contrast(2);
    text-shadow: 0 0 20px #fff, 0 0 40px #fff, 0 0 60px #fff;
    box-shadow: 0 0 100px 50px rgba(255, 0, 255, 0.9), 0 0 200px 100px rgba(0, 255, 255, 0.7);
    border-radius: 50%;
  }
  20% {
    transform: scale(0.5) rotate(25deg) translateZ(-50px) skewX(15deg) skewY(-15deg);
    filter: brightness(0.5) hue-rotate(180deg) saturate(8) contrast(3) blur(5px);
    box-shadow: 0 0 150px 80px rgba(255, 255, 0, 0.9), 0 0 300px 150px rgba(0, 255, 0, 0.8);
    border-radius: 10px;
  }
  30% {
    transform: scale(2.2) rotate(-35deg) translateZ(150px) translateY(30px) rotateX(45deg) rotateY(-30deg);
    filter: brightness(4) hue-rotate(270deg) saturate(3) contrast(4) blur(0);
    text-shadow: 0 0 30px #fff, 0 0 60px #fff, 0 0 90px #42c6ff;
    box-shadow: 0 0 200px 120px rgba(255, 0, 0, 0.9), 0 0 400px 200px rgba(255, 0, 255, 0.7);
    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  }
  40% {
    transform: scale(0.3) rotate(45deg) translateZ(-100px) skewX(-25deg) skewY(25deg) rotateX(-60deg) rotateY(60deg);
    filter: brightness(0.3) hue-rotate(360deg) saturate(10) contrast(5) blur(8px);
    box-shadow: 0 0 250px 150px rgba(0, 255, 255, 0.9), 0 0 500px 250px rgba(255, 255, 0, 0.8);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  50% {
    transform: scale(2.5) rotate(-55deg) translateZ(200px) translateY(-100px) rotateX(75deg) rotateY(-45deg);
    filter: brightness(5) hue-rotate(90deg) saturate(2) contrast(3) blur(0);
    text-shadow: 0 0 40px #fff, 0 0 80px #fff, 0 0 120px #ff42e3;
    box-shadow: 0 0 300px 180px rgba(0, 255, 0, 0.9), 0 0 600px 300px rgba(0, 0, 255, 0.7);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  60% {
    transform: scale(0.2) rotate(65deg) translateZ(-150px) skewX(35deg) skewY(-35deg) rotateX(90deg) rotateY(-90deg);
    filter: brightness(0.1) hue-rotate(180deg) saturate(12) contrast(6) blur(10px);
    box-shadow: 0 0 350px 200px rgba(255, 0, 255, 0.9), 0 0 700px 350px rgba(255, 0, 0, 0.8);
    border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
  }
  70% {
    transform: scale(2) rotate(-75deg) translateZ(250px) translateY(150px) rotateX(-120deg) rotateY(60deg);
    filter: brightness(6) hue-rotate(270deg) saturate(1) contrast(2) blur(0);
    text-shadow: 0 0 50px #fff, 0 0 100px #fff, 0 0 150px #42ffbd;
    box-shadow: 0 0 400px 220px rgba(255, 255, 0, 0.9), 0 0 800px 400px rgba(0, 255, 0, 0.7);
    border-radius: 80% 20% 50% 50% / 50% 40% 60% 50%;
  }
  80% {
    transform: scale(0.4) rotate(85deg) translateZ(-200px) skewX(-45deg) skewY(45deg) rotateX(-150deg) rotateY(150deg);
    filter: brightness(0.2) hue-rotate(360deg) saturate(15) contrast(7) blur(12px);
    box-shadow: 0 0 450px 250px rgba(0, 0, 255, 0.9), 0 0 900px 450px rgba(0, 255, 255, 0.8);
    border-radius: 30% 70% 20% 80% / 50% 50% 70% 30%;
  }
  90% {
    transform: scale(1.5) rotate(-95deg) translateZ(100px) translateY(-75px) rotateX(180deg) rotateY(-75deg);
    filter: brightness(3) hue-rotate(90deg) saturate(2) contrast(1.5) blur(2px);
    text-shadow: 0 0 25px #fff, 0 0 50px #fff, 0 0 75px #fffc42;
    box-shadow: 0 0 250px 125px rgba(255, 0, 0, 0.8), 0 0 500px 250px rgba(255, 0, 255, 0.6);
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
  }
  100% {
    transform: scale(1) rotate(0deg) translateZ(0);
    filter: brightness(1) hue-rotate(0deg) saturate(1) contrast(1) blur(0);
    text-shadow: 0 0 0 transparent;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    border-radius: 30px;
  }
}

/* 3D flip effect for gallery items */
@keyframes flipIn {
  0% {
    transform: perspective(1000px) rotateY(90deg);
    opacity: 0;
  }
  25% {
    transform: perspective(1000px) rotateY(-15deg);
    opacity: 1;
  }
  50% {
    transform: perspective(1000px) rotateY(10deg);
  }
  75% {
    transform: perspective(1000px) rotateY(-5deg);
  }
  100% {
    transform: perspective(1000px) rotateY(0);
  }
}

/* Page transitions */
body {
  animation: pageFadeIn 1.5s ease-out;
}

@keyframes pageFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
}

/* Responsive design with INSANELY CRAZY animations */
@media (max-width: 480px) {
  .main-title {
    font-size: 36px;
  }

  .subtitle {
    font-size: 18px;
  }

  .explore-btn {
    padding: 15px 30px;
    font-size: 16px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  /* Ultra insane mobile animations */
  .gallery-item {
    animation: ultraCrazyMobileAnimation 3s infinite both !important;
  }
  
  @keyframes ultraCrazyMobileAnimation {
    0% {
      transform: scale(1) translateY(0) rotate(0deg) perspective(500px) rotateX(0deg);
      box-shadow: 0 5px 15px rgba(255, 0, 255, 0.8);
      filter: hue-rotate(0deg) brightness(1.3) contrast(1.2);
      border-radius: 20px;
    }
    15% {
      transform: scale(1.1) translateY(-15px) rotate(5deg) perspective(500px) rotateX(10deg);
      box-shadow: 0 25px 40px rgba(0, 255, 255, 0.8);
      filter: hue-rotate(60deg) brightness(1.7) contrast(1.3) saturate(1.5);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    30% {
      transform: scale(0.95) translateY(5px) rotate(-5deg) perspective(500px) rotateX(-15deg);
      box-shadow: 0 15px 30px rgba(255, 255, 0, 0.8);
      filter: hue-rotate(120deg) brightness(1.5) contrast(1.4) saturate(1.8);
      border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
    }
    45% {
      transform: scale(1.05) translateY(-10px) rotate(3deg) perspective(500px) rotateX(20deg);
      box-shadow: 0 20px 35px rgba(0, 255, 0, 0.8);
      filter: hue-rotate(180deg) brightness(1.6) contrast(1.5) saturate(1.6);
      border-radius: 30% 70% 70% 30% / 70% 30% 70% 30%;
    }
    60% {
      transform: scale(0.98) translateY(8px) rotate(-3deg) perspective(500px) rotateX(-10deg);
      box-shadow: 0 15px 30px rgba(255, 0, 0, 0.8);
      filter: hue-rotate(240deg) brightness(1.4) contrast(1.6) saturate(1.4);
      border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
    }
    75% {
      transform: scale(1.03) translateY(-5px) rotate(2deg) perspective(500px) rotateX(5deg);
      box-shadow: 0 20px 35px rgba(255, 0, 255, 0.8);
      filter: hue-rotate(300deg) brightness(1.5) contrast(1.5) saturate(1.7);
      border-radius: 80% 20% 50% 50% / 50% 40% 60% 50%;
    }
    90% {
      transform: scale(0.97) translateY(3px) rotate(-1deg) perspective(500px) rotateX(-5deg);
      box-shadow: 0 10px 25px rgba(0, 255, 255, 0.8);
      filter: hue-rotate(330deg) brightness(1.4) contrast(1.3) saturate(1.5);
      border-radius: 30% 70% 20% 80% / 50% 50% 70% 30%;
    }
    100% {
      transform: scale(1) translateY(0) rotate(0deg) perspective(500px) rotateX(0deg);
      box-shadow: 0 5px 15px rgba(255, 0, 255, 0.8);
      filter: hue-rotate(360deg) brightness(1.3) contrast(1.2);
      border-radius: 20px;
    }
  }
  
  /* Super crazy mobile hover effects */
  .gallery-item:hover {
    animation: ultraCrazyMobileHover 1.2s infinite alternate !important;
    transform: scale(1.2);
  }
  
  @keyframes ultraCrazyMobileHover {
    0% {
      box-shadow: 0 20px 40px rgba(255, 0, 255, 0.9), 0 0 60px rgba(255, 0, 255, 0.6);
      filter: hue-rotate(0deg) brightness(1.7) contrast(1.6) saturate(1.8);
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      transform: scale(1.2) rotate(5deg) perspective(500px) rotateY(15deg) rotateX(10deg);
    }
    33% {
      box-shadow: 0 25px 50px rgba(0, 255, 255, 0.9), 0 0 80px rgba(0, 255, 255, 0.6);
      filter: hue-rotate(120deg) brightness(1.9) contrast(1.8) saturate(2);
      border-radius: 40% 60% 70% 30% / 40% 40% 60% 60%; 
      transform: scale(1.25) rotate(-5deg) perspective(500px) rotateY(-15deg) rotateX(-10deg);
    }
    66% {
      box-shadow: 0 30px 60px rgba(255, 255, 0, 0.9), 0 0 90px rgba(255, 255, 0, 0.6);
      filter: hue-rotate(240deg) brightness(2) contrast(2) saturate(2.2);
      border-radius: 30% 70% 80% 20% / 50% 60% 40% 50%;
      transform: scale(1.3) rotate(8deg) perspective(500px) rotateY(20deg) rotateX(15deg);
    }
    100% {
      box-shadow: 0 20px 40px rgba(255, 0, 0, 0.9), 0 0 60px rgba(255, 0, 0, 0.6);
      filter: hue-rotate(360deg) brightness(1.7) contrast(1.6) saturate(1.8);
      border-radius: 50% 50% 30% 70% / 30% 70% 50% 50%;
      transform: scale(1.2) rotate(-8deg) perspective(500px) rotateY(-20deg) rotateX(-15deg);
    }
  }

  /* Extra responsive button click effects */
  .btn-click {
    animation: ultraMegaShockwaveMobile 1.2s cubic-bezier(0.1, 0.9, 0.2, 1.5) forwards !important;
  }
  
  @keyframes ultraMegaShockwaveMobile {
    0% {
      transform: scale(1) rotate(0deg) translateZ(0);
      filter: brightness(1) hue-rotate(0deg) saturate(1);
    }
    15% {
      transform: scale(1.4) rotate(-10deg) translateZ(50px) translateY(-30px);
      filter: brightness(2.5) hue-rotate(90deg) saturate(4) contrast(1.8);
    }
    30% {
      transform: scale(0.7) rotate(15deg) translateZ(-30px) skewX(10deg) skewY(-10deg);
      filter: brightness(0.7) hue-rotate(180deg) saturate(6) contrast(2.5) blur(3px);
    }
    45% {
      transform: scale(1.5) rotate(-20deg) translateZ(60px) translateY(20px) rotateX(30deg) rotateY(-20deg);
      filter: brightness(3) hue-rotate(270deg) saturate(3) contrast(3) blur(0);
    }
    60% {
      transform: scale(0.6) rotate(25deg) translateZ(-40px) skewX(-15deg) skewY(15deg) rotateX(-40deg) rotateY(40deg);
      filter: brightness(0.5) hue-rotate(360deg) saturate(8) contrast(4) blur(5px);
    }
    75% {
      transform: scale(1.3) rotate(-15deg) translateZ(70px) translateY(-40px) rotateX(50deg) rotateY(-30deg);
      filter: brightness(3.5) hue-rotate(90deg) saturate(2) contrast(2.5) blur(0);
    }
    90% {
      transform: scale(0.9) rotate(10deg) translateZ(-20px) skewX(5deg) skewY(-5deg) rotateX(-20deg) rotateY(20deg);
      filter: brightness(0.8) hue-rotate(180deg) saturate(5) contrast(2) blur(2px);
    }
    100% {
      transform: scale(1) rotate(0deg) translateZ(0);
      filter: brightness(1) hue-rotate(0deg) saturate(1) contrast(1) blur(0);
    }
  }

  /* Remove cursor on mobile */
  .custom-cursor, .cursor-dot, .cursor-trail {
    display: none;
  }

  /* Optimize background effects */
  .gradient-orb {
    opacity: 0.3;
  }

  /* Enhance mobile nav */
  nav {
    padding: 15px;
    background: rgba(0, 0, 0, 0.8);
  }

  .logo {
    font-size: 20px;
  }
}

/* Tablet specific insane animations */
@media (min-width: 481px) and (max-width: 1024px) {
  /* Add extra extreme tablet animations */
  .btn-click {
    animation: tabletUltraShockwave 1.3s cubic-bezier(0.1, 0.9, 0.2, 1.5) forwards !important;
  }
  
  @keyframes tabletUltraShockwave {
    0% {
      transform: scale(1) rotate(0deg) translateZ(0);
      filter: brightness(1) hue-rotate(0deg) saturate(1);
    }
    20% {
      transform: scale(1.6) rotate(-12deg) translateZ(80px) translateY(-40px);
      filter: brightness(2.8) hue-rotate(90deg) saturate(5) contrast(2);
    }
    40% {
      transform: scale(0.6) rotate(20deg) translateZ(-60px) skewX(12deg) skewY(-12deg);
      filter: brightness(0.6) hue-rotate(180deg) saturate(7) contrast(3) blur(4px);
    }
    60% {
      transform: scale(1.8) rotate(-25deg) translateZ(100px) translateY(50px) rotateX(35deg) rotateY(-25deg);
      filter: brightness(3.2) hue-rotate(270deg) saturate(3.5) contrast(3.5) blur(0);
    }
    80% {
      transform: scale(0.5) rotate(30deg) translateZ(-70px) skewX(-18deg) skewY(18deg) rotateX(-45deg) rotateY(45deg);
      filter: brightness(0.4) hue-rotate(360deg) saturate(9) contrast(4.5) blur(6px);
    }
    100% {
      transform: scale(1) rotate(0deg) translateZ(0);
      filter: brightness(1) hue-rotate(0deg) saturate(1) contrast(1) blur(0);
    }
  }

  /* Insane gallery item animations for tablets */
  .gallery-item {
    animation: tabletCrazyFloat 5s ease-in-out infinite alternate;
  }

  @keyframes tabletCrazyFloat {
    0% {
      transform: translateY(0) rotate(0deg) scale(1) perspective(800px) rotateX(0deg) rotateY(0deg);
      filter: brightness(1) hue-rotate(0deg) saturate(1);
      box-shadow: 0 15px 30px rgba(255, 0, 255, 0.4);
      border-radius: 20px;
    }
    25% {
      transform: translateY(-15px) rotate(3deg) scale(1.05) perspective(800px) rotateX(10deg) rotateY(5deg);
      filter: brightness(1.2) hue-rotate(90deg) saturate(1.3);
      box-shadow: 0 25px 40px rgba(0, 255, 255, 0.5);
      border-radius: 30% 70% 50% 50% / 40% 40% 60% 60%;
    }
    50% {
      transform: translateY(8px) rotate(-2deg) scale(1.08) perspective(800px) rotateX(-5deg) rotateY(-8deg);
      filter: brightness(1.3) hue-rotate(180deg) saturate(1.5);
      box-shadow: 0 20px 35px rgba(255, 255, 0, 0.5);
      border-radius: 60% 40% 40% 60% / 60% 60% 40% 40%;
    }
    75% {
      transform: translateY(-10px) rotate(1deg) scale(1.03) perspective(800px) rotateX(8deg) rotateY(10deg);
      filter: brightness(1.2) hue-rotate(270deg) saturate(1.4);
      box-shadow: 0 25px 40px rgba(0, 255, 0, 0.5);
      border-radius: 40% 60% 70% 30% / 50% 30% 70% 50%;
    }
    100% {
      transform: translateY(5px) rotate(-1deg) scale(1) perspective(800px) rotateX(-3deg) rotateY(-5deg);
      filter: brightness(1.1) hue-rotate(360deg) saturate(1.2);
      box-shadow: 0 15px 30px rgba(255, 0, 0, 0.4);
      border-radius: 20px;
    }
  }

  .gallery-item:hover {
    animation: none !important;
    transform: scale(1.4) translateY(-20px) perspective(800px) rotateX(15deg) rotateY(-10deg);
    box-shadow: 0 30px 60px rgba(255, 0, 255, 0.8), 0 0 100px rgba(255, 0, 255, 0.5);
    filter: brightness(1.5) contrast(1.3) saturate(1.7);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transition: all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.5);
  }
}

/* Desktop specific ultra effects */
@media (min-width: 1025px) {
  .btn-click {
    animation: desktopMegaCrazyShockwave 1.5s cubic-bezier(0.1, 0.9, 0.2, 1.5) forwards !important;
  }
  
  @keyframes desktopMegaCrazyShockwave {
    0% {
      transform: scale(1) rotate(0deg) translateZ(0);
      filter: brightness(1) hue-rotate(0deg) saturate(1);
      text-shadow: 0 0 0 transparent;
      box-shadow: 0 0 0 rgba(255, 255, 255, 0);
      border-radius: 30px;
    }
    10% {
      transform: scale(2) rotate(-20deg) translateZ(120px) translateY(-80px) perspective(1000px) rotateX(30deg) rotateY(-20deg);
      filter: brightness(3.5) hue-rotate(90deg) saturate(6) contrast(2.5);
      text-shadow: 0 0 25px #fff, 0 0 50px #fff, 0 0 75px #fff;
      box-shadow: 0 0 150px 75px rgba(255, 0, 255, 0.9), 0 0 300px 150px rgba(0, 255, 255, 0.7);
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    20% {
      transform: scale(0.4) rotate(35deg) translateZ(-80px) skewX(20deg) skewY(-20deg) perspective(1000px) rotateX(-45deg) rotateY(60deg);
      filter: brightness(0.3) hue-rotate(180deg) saturate(10) contrast(4) blur(8px);
      box-shadow: 0 0 200px 100px rgba(255, 255, 0, 0.9), 0 0 400px 200px rgba(0, 255, 0, 0.8);
      border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
    }
    30% {
      transform: scale(2.5) rotate(-40deg) translateZ(200px) translateY(100px) perspective(1000px) rotateX(60deg) rotateY(-45deg);
      filter: brightness(4) hue-rotate(270deg) saturate(4) contrast(5) blur(0);
      text-shadow: 0 0 35px #fff, 0 0 70px #fff, 0 0 105px #42c6ff;
      box-shadow: 0 0 250px 125px rgba(255, 0, 0, 0.9), 0 0 500px 250px rgba(255, 0, 255, 0.7);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    40% {
      transform: scale(0.2) rotate(60deg) translateZ(-150px) skewX(-30deg) skewY(30deg) perspective(1000px) rotateX(-90deg) rotateY(75deg);
      filter: brightness(0.2) hue-rotate(360deg) saturate(12) contrast(6) blur(10px);
      box-shadow: 0 0 300px 150px rgba(0, 255, 255, 0.9), 0 0 600px 300px rgba(255, 255, 0, 0.8);
      border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
    }
    50% {
      transform: scale(2.8) rotate(-65deg) translateZ(250px) translateY(-120px) perspective(1000px) rotateX(75deg) rotateY(-60deg);
      filter: brightness(5) hue-rotate(90deg) saturate(3) contrast(4) blur(0);
      text-shadow: 0 0 45px #fff, 0 0 90px #fff, 0 0 135px #ff42e3;
      box-shadow: 0 0 350px 175px rgba(0, 255, 0, 0.9), 0 0 700px 350px rgba(0, 0, 255, 0.7);
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    60% {
      transform: scale(0.15) rotate(85deg) translateZ(-200px) skewX(40deg) skewY(-40deg) perspective(1000px) rotateX(-120deg) rotateY(90deg);
      filter: brightness(0.1) hue-rotate(180deg) saturate(15) contrast(7) blur(12px);
      box-shadow: 0 0 400px 200px rgba(255, 255, 0, 0.9), 0 0 800px 400px rgba(255, 0, 0, 0.8);
      border-radius: 80% 20% 50% 50% / 50% 40% 60% 50%;
    }
    70% {
      transform: scale(2.2) rotate(-75deg) translateZ(300px) translateY(150px) perspective(1000px) rotateX(90deg) rotateY(-75deg);
      filter: brightness(6) hue-rotate(270deg) saturate(2) contrast(3) blur(0);
      text-shadow: 0 0 55px #fff, 0 0 110px #fff, 0 0 165px #42ffbd;
      box-shadow: 0 0 450px 225px rgba(0, 0, 255, 0.9), 0 0 900px 450px rgba(0, 255, 255, 0.7);
      border-radius: 30% 70% 20% 80% / 50% 50% 70% 30%;
    }
    80% {
      transform: scale(0.3) rotate(70deg) translateZ(-250px) skewX(-45deg) skewY(45deg) perspective(1000px) rotateX(-150deg) rotateY(120deg);
      filter: brightness(0.2) hue-rotate(360deg) saturate(18) contrast(8) blur(15px);
      box-shadow: 0 0 500px 250px rgba(255, 0, 0, 0.9), 0 0 1000px 500px rgba(255, 0, 255, 0.8);
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    }
    90% {
      transform: scale(1.8) rotate(-45deg) translateZ(150px) translateY(-50px) perspective(1000px) rotateX(60deg) rotateY(-60deg);
      filter: brightness(3) hue-rotate(90deg) saturate(2) contrast(2) blur(3px);
      text-shadow: 0 0 30px #fff, 0 0 60px #fff, 0 0 90px #fffc42;
      box-shadow: 0 0 300px 150px rgba(0, 255, 0, 0.8), 0 0 600px 300px rgba(0, 0, 255, 0.6);
      border-radius: 40% 60% 70% 30% / 40% 40% 60% 60%;
    }
    100% {
      transform: scale(1) rotate(0deg) translateZ(0) perspective(1000px) rotateX(0deg) rotateY(0deg);
      filter: brightness(1) hue-rotate(0deg) saturate(1) contrast(1) blur(0);
      text-shadow: 0 0 0 transparent;
      box-shadow: 0 0 0 rgba(255, 255, 255, 0);
      border-radius: 30px;
    }
  }
}

/* Add tablet-specific animations */
@media (min-width: 481px) and (max-width: 1024px) {
  .gallery-item {
    animation: tabletFloat 4s ease-in-out infinite;
  }

  @keyframes tabletFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .gallery-item:hover {
    animation: none;
    transform: scale(1.05) translateY(-10px);
  }

  .technique-btn:hover {
    transform: translateY(-3px);
  }
}

/* Add dark mode support */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0a0a0a;
  }

  .dynamic-background {
    opacity: 0.7;
  }

  .gradient-orb {
    opacity: 0.7;
  }
}

/* Add extra animations for high-end devices */
@media (min-width: 1200px) {
  .gallery-item {
    transition: transform 0.6s cubic-bezier(0.3, 1.5, 0.7, 1);
  }

  .technique-btn:hover {
    transform: translateY(-5px) scale(1.1);
    animation: btnHighlight 1s infinite alternate;
  }

  @keyframes btnHighlight {
    0% {
      box-shadow: 0 5px 15px rgba(66, 198, 255, 0.4);
    }
    100% {
      box-shadow: 0 10px 30px rgba(66, 198, 255, 0.7);
    }
  }
}
/* Super crazy floating elements animation */
.float-animation {
  animation: superFloating 5s infinite ease-in-out;
}

@keyframes superFloating {
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
    filter: hue-rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(3deg) scale(1.05);
    filter: hue-rotate(90deg);
  }
  50% {
    transform: translateY(0) rotate(-3deg) scale(1.1);
    filter: hue-rotate(180deg);
  }
  75% {
    transform: translateY(15px) rotate(3deg) scale(1.05);
    filter: hue-rotate(270deg);
  }
}

/* Add bounce effect to all elements for more aliveness */
.section-title, .strategy-section h2, .technique-btn, .nav-links a, .logo {
  animation: alivenessBounce 3s infinite alternate ease-in-out;
}

@keyframes alivenessBounce {
  0%, 100% {
    transform: translateY(0) scale(1);
    filter: brightness(1);
  }
  50% {
    transform: translateY(-10px) scale(1.05);
    filter: brightness(1.3);
  }
}

/* Make page elements react to scroll */
.gallery-item, .photo-container, .float-image {
  transition: transform 0.3s, filter 0.3s;
}

.gallery-item:nth-child(odd), .photo-container:nth-child(odd), .float-image:nth-child(odd) {
  animation: scrollReactionOdd 3s infinite alternate ease-in-out;
}

.gallery-item:nth-child(even), .photo-container:nth-child(even), .float-image:nth-child(even) {
  animation: scrollReactionEven 3s infinite alternate-reverse ease-in-out;
}

@keyframes scrollReactionOdd {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
    filter: brightness(1);
  }
  100% {
    transform: translateY(-15px) rotate(2deg) scale(1.05);
    filter: brightness(1.2) hue-rotate(15deg);
  }
}

@keyframes scrollReactionEven {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
    filter: brightness(1);
  }
  100% {
    transform: translateY(15px) rotate(-2deg) scale(1.05);
    filter: brightness(1.2) hue-rotate(-15deg);
  }
}

/* Extra crazy continuous color-shifting effects on all gallery items */
.gallery-item {
  animation: crazyColorShift 5s infinite alternate;
}

@keyframes crazyColorShift {
  0% {
    box-shadow: 0 5px 15px rgba(255, 0, 255, 0.5);
    border-color: rgba(255, 0, 255, 0.3);
  }
  25% {
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.5);
    border-color: rgba(0, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 5px 15px rgba(255, 255, 0, 0.5);
    border-color: rgba(255, 255, 0, 0.3);
  }
  75% {
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.5);
    border-color: rgba(0, 255, 0, 0.3);
  }
  100% {
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.5);
    border-color: rgba(255, 0, 0, 0.3);
  }
}

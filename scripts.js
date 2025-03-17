document.addEventListener('DOMContentLoaded', () => {
  // Removed custom cursor for better performance

  // Create dynamic background
  const dynamicBackground = document.createElement('div');
  dynamicBackground.className = 'dynamic-background';
  document.body.prepend(dynamicBackground);

  // Add animated grid background
  const gridBackground = document.createElement('div');
  gridBackground.className = 'grid-background';
  document.body.prepend(gridBackground);

  // Add glitch effect randomly to title
  function addRandomGlitch() {
    const title = document.querySelector('.main-title');
    if (title) {
      title.classList.add('glitch-effect');
      setTimeout(() => {
        title.classList.remove('glitch-effect');
      }, 200);
    }

    // Schedule next glitch
    setTimeout(addRandomGlitch, 3000 + Math.random() * 5000);
  }

  // Start random glitches
  setTimeout(addRandomGlitch, 3000);

  // Add more orbs that float around
  for (let i = 0; i < 10; i++) {
    const orb = document.createElement('div');
    orb.className = 'gradient-orb';
    orb.style.width = `${200 + Math.random() * 400}px`;
    orb.style.height = orb.style.width;
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;
    orb.style.animationDelay = `${Math.random() * 5}s`;
    orb.style.animationDuration = `${15 + Math.random() * 15}s`;
    orb.style.mixBlendMode = ['screen', 'overlay', 'color-dodge'][Math.floor(Math.random() * 3)];
    orb.style.filter = `blur(${50 + Math.random() * 50}px) hue-rotate(${Math.random() * 360}deg)`;
    dynamicBackground.appendChild(orb);
  }

  // Add geometric floating shapes
  const geoShapes = document.createElement('div');
  geoShapes.className = 'geo-shapes';
  document.body.appendChild(geoShapes);

  // Create various geometric shapes
  const shapes = ['triangle', 'circle', 'square'];
  const colors = ['#42c6ff', '#ff42e3', '#fffc42', '#42ffbd', '#ff6b42'];

  for (let i = 0; i < 15; i++) {
    const shape = document.createElement('div');
    const shapeClass = shapes[Math.floor(Math.random() * shapes.length)];
    shape.className = `geo-shape ${shapeClass}`;

    if (shapeClass === 'triangle') {
      shape.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)];
    } else {
      shape.style.background = `linear-gradient(${Math.random() * 360}deg, ${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]})`;
    }

    const size = 50 + Math.floor(Math.random() * 150);
    if (shapeClass === 'circle' || shapeClass === 'square') {
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
    } else if (shapeClass === 'triangle') {
      shape.style.borderLeftWidth = `${size/2}px`;
      shape.style.borderRightWidth = `${size/2}px`;
      shape.style.borderBottomWidth = `${size}px`;
    }

    shape.style.left = `${Math.random() * 100}%`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.animationDelay = `${Math.random() * 8}s`;
    shape.style.animationDuration = `${20 + Math.random() * 20}s`;
    shape.style.opacity = 0.1 + Math.random() * 0.2;

    geoShapes.appendChild(shape);
  }

  // Cursor trail animation has been removed

  // Add shock wave effect on mouse click
  document.addEventListener('click', (e) => {
    const shockWave = document.createElement('div');
    shockWave.style.position = 'fixed';
    shockWave.style.top = `${e.clientY}px`;
    shockWave.style.left = `${e.clientX}px`;
    shockWave.style.transform = 'translate(-50%, -50%)';
    shockWave.style.width = '10px';
    shockWave.style.height = '10px';
    shockWave.style.borderRadius = '50%';
    shockWave.style.background = 'transparent';
    shockWave.style.border = '2px solid rgba(66, 198, 255, 0.8)';
    shockWave.style.zIndex = '9998';
    shockWave.style.pointerEvents = 'none';

    document.body.appendChild(shockWave);

    // Animate the shockwave
    let size = 0;
    let opacity = 1;

    const shockwaveAnimation = setInterval(() => {
      size += 10;
      opacity -= 0.02;

      shockWave.style.width = `${size}px`;
      shockWave.style.height = `${size}px`;
      shockWave.style.opacity = opacity;
      shockWave.style.borderWidth = `${Math.max(1, 5 - size/50)}px`;

      if (opacity <= 0) {
        clearInterval(shockwaveAnimation);
        document.body.removeChild(shockWave);
      }
    }, 10);
  });

  // Add super crazy color-changing effect on gallery items hover
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    // Add permanent super crazy animation effects
    let isAnimating = false;

    item.addEventListener('mouseenter', (e) => {
      if (isAnimating) return;
      isAnimating = true;

      // Apply simple scale effect without tilting or color changes
      item.style.transition = 'all 0.4s cubic-bezier(0.3, 0.9, 0.4, 1.1)';

      requestAnimationFrame(() => {
        // Just add the class for basic effects
        item.classList.add('super-animated');

        // Create explosive particle effect (keeping only the stars/sparkles)
        createExplosiveParticles(item);

        // After a moment, return to original state
        setTimeout(() => {
          // Add smooth transition back to original state
          item.style.transition = 'all 0.8s cubic-bezier(0.2, 0.9, 0.3, 1.2)';
          item.style.transform = 'scale(1)';
          item.style.boxShadow = '';
          item.classList.remove('super-animated');
          isAnimating = false;
        }, 1000);
      });
    });

    // Reset effects when mouse leaves
    item.addEventListener('mouseleave', () => {
      // Reset text animations
      const heading = item.querySelector('h3');
      const paragraph = item.querySelector('p');

      if (heading) {
        heading.style.animation = '';
        heading.style.textShadow = '';
      }

      if (paragraph) {
        paragraph.style.animation = '';
        paragraph.style.textShadow = '';
      }
    });

    // Add subtle blue pulses occasionally
    setInterval(() => {
      if (Math.random() > 0.8 && !item.matches(':hover')) {
        // Create a gentle glow pulse
        const pulse = document.createElement('div');
        pulse.style.position = 'absolute';
        pulse.style.inset = '0';
        pulse.style.borderRadius = 'inherit';
        pulse.style.zIndex = '1';
        pulse.style.pointerEvents = 'none';

        // Use consistent blue theme
        pulse.style.boxShadow = `0 0 30px 10px rgba(66, 198, 255, 0.6)`;
        pulse.style.opacity = '0';

        item.appendChild(pulse);

        // Animate pulse
        requestAnimationFrame(() => {
          pulse.style.transition = 'all 0.5s ease-out';
          pulse.style.opacity = '1';

          setTimeout(() => {
            pulse.style.opacity = '0';
            setTimeout(() => {
              if (pulse.parentNode === item) {
                item.removeChild(pulse);
              }
            }, 500);
          }, 200);
        });
      }
    }, 2000);
  });

  // Add keyframes for text glitch
  const glitchStyle = document.createElement('style');
  glitchStyle.textContent = `
    @keyframes textGlitch {
      0% {
        opacity: 1;
        transform: translate(0);
        filter: hue-rotate(0deg);
      }
      20% {
        opacity: 0.9;
        transform: translate(-3px, 2px);
        filter: hue-rotate(70deg);
      }
      40% {
        opacity: 1;
        transform: translate(3px, -2px);
        filter: hue-rotate(140deg);
      }
      60% {
        opacity: 0.8;
        transform: translate(-2px, -2px);
        filter: hue-rotate(210deg);
      }
      80% {
        opacity: 1;
        transform: translate(2px, 2px);
        filter: hue-rotate(280deg);
      }
      100% {
        opacity: 0.9;
        transform: translate(0);
        filter: hue-rotate(350deg);
      }
    }
  `;
  document.head.appendChild(glitchStyle);

  // Create lightning bolt effect
  function createLightningEffect(element, x, y) {
    const lightning = document.createElement('div');
    lightning.style.position = 'absolute';
    lightning.style.top = `${y}px`;
    lightning.style.left = `${x}px`;
    lightning.style.width = '2px';
    lightning.style.height = '0';
    lightning.style.background = 'white';
    lightning.style.zIndex = '1000';
    lightning.style.transformOrigin = 'top';
    lightning.style.boxShadow = '0 0 10px white, 0 0 20px #42c6ff, 0 0 30px #42c6ff';

    element.appendChild(lightning);

    // Animate the lightning
    const height = element.offsetHeight - y;
    const segments = 5 + Math.floor(Math.random() * 5);
    const segmentHeight = height / segments;

    let path = '';
    for (let i = 0; i < segments; i++) {
      const xOffset = (Math.random() - 0.5) * 30;
      path += `${xOffset}px ${segmentHeight * (i+1)}px, `;
    }

    lightning.style.clipPath = `polygon(0 0, 100% 0, ${path} 0% 100%)`;

    // Grow animation
    lightning.style.transition = 'height 0.2s ease-out';
    requestAnimationFrame(() => {
      lightning.style.height = `${height}px`;
    });

    // Flash animation
    let opacity = 1;
    const flash = setInterval(() => {
      opacity = opacity === 1 ? 0.5 : 1;
      lightning.style.opacity = opacity;
    }, 50);

    // Remove after animation
    setTimeout(() => {
      clearInterval(flash);
      element.removeChild(lightning);
    }, 300);
  }

  // Create explosive particle effect
  function createExplosiveParticles(element) {
    const particleCount = 30;
    const colors = ['#42c6ff', '#ff42e3', '#42ffbd', '#fffc42', '#ff6b42'];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '5px';
      particle.style.height = '5px';
      particle.style.borderRadius = '50%';
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      particle.style.boxShadow = `0 0 10px ${color}`;
      particle.style.opacity = '0';
      particle.style.transition = 'all 0.5s ease-out';
      particle.style.zIndex = '1001';

      // Random position within the item
      const x = Math.random() * element.offsetWidth;
      const y = Math.random() * element.offsetHeight;
      particle.style.top = `${y}px`;
      particle.style.left = `${x}px`;

      element.appendChild(particle);

      requestAnimationFrame(() => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 50;
        particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.5)`;
        particle.style.opacity = '1';
      });

      setTimeout(() => {
        particle.style.opacity = '0';
        setTimeout(() => {
          if (particle.parentNode === element) {
            element.removeChild(particle);
          }
        }, 500);
      }, 500);
    }
  }

  // Add ULTRA MEGA CRAZY shockwave effect when clicking on buttons
  document.querySelectorAll('.explore-btn, .technique-btn, .gallery-item, .nav-links a').forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Prevent multiple animations
      if (this.classList.contains('animating')) return;
      this.classList.add('animating');

      // Add main animation class
      this.classList.add('btn-click');

      // Create space-time rupture effect
      const rupture = document.createElement('div');
      rupture.className = 'space-time-rupture';
      rupture.style.position = 'fixed';
      rupture.style.top = '50%';
      rupture.style.left = '50%';
      rupture.style.transform = 'translate(-50%, -50%)';
      rupture.style.width = '5vw';
      rupture.style.height = '5vw';
      rupture.style.background = 'transparent';
      rupture.style.border = '3px solid white';
      rupture.style.borderRadius = '50%';
      rupture.style.boxShadow = '0 0 100px 50px rgba(255, 255, 255, 0.8), 0 0 200px 100px rgba(66, 198, 255, 0.8)';
      rupture.style.zIndex = '9998';
      rupture.style.filter = 'blur(5px)';
      rupture.style.opacity = '0.9';
      rupture.style.pointerEvents = 'none';

      document.body.appendChild(rupture);

      // Create vortex behind rupture for extra depth
      const vortex = document.createElement('div');
      vortex.className = 'dimensional-vortex';
      vortex.style.position = 'fixed';
      vortex.style.top = '50%';
      vortex.style.left = '50%';
      vortex.style.transform = 'translate(-50%, -50%) rotate(0deg)';
      vortex.style.width = '20vw';
      vortex.style.height = '20vw';
      vortex.style.borderRadius = '50%';
      vortex.style.background = 'conic-gradient(from 0deg, #ff00ff, #00ffff, #ffff00, #00ff00, #ff0000, #ff00ff)';
      vortex.style.zIndex = '9997';
      vortex.style.opacity = '0';
      vortex.style.pointerEvents = 'none';
      vortex.style.filter = 'blur(8px)';
      vortex.style.mixBlendMode = 'difference';

      document.body.appendChild(vortex);

      // Create time freeze flash
      const flash = document.createElement('div');
      flash.style.position = 'fixed';
      flash.style.inset = '0';
      flash.style.background = 'white';
      flash.style.zIndex = '9996';
      flash.style.opacity = '0';
      flash.style.pointerEvents = 'none';

      document.body.appendChild(flash);

      // Blast flash
      setTimeout(() => {
        flash.style.transition = 'opacity 0.1s';
        flash.style.opacity = '1';

        setTimeout(() => {
          flash.style.transition = 'opacity 0.5s';
          flash.style.opacity = '0';
        }, 100);
      }, 10);

      // Animate the rupture and vortex
      // First phase - expansion
      setTimeout(() => {
        rupture.style.transition = 'all 0.8s cubic-bezier(0.1, 0.9, 0.2, 1.5)';
        vortex.style.transition = 'all 0.8s cubic-bezier(0.1, 0.9, 0.2, 1.5)';

        rupture.style.width = '150vw';
        rupture.style.height = '150vw';
        rupture.style.borderWidth = '20px';
        rupture.style.borderColor = 'rgba(255, 255, 255, 0.8)';
        rupture.style.borderStyle = 'dashed';
        rupture.style.opacity = '0.7';

        vortex.style.opacity = '0.9';
        vortex.style.width = '200vw';
        vortex.style.height = '200vw';

        // Add rotation animation to vortex
        let angle = 0;
        const vortexSpin = setInterval(() => {
          angle += 10;
          vortex.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }, 20);

        // Generate TONS of crazy particles
        const particleCount = window.innerWidth < 768 ? 80 : 200;

        for (let i = 0; i < particleCount; i++) {
          createCrazyParticle();
        }

        // Generate energy beams from center
        const beamCount = window.innerWidth < 768 ? 12 : 24;

        for (let i = 0; i < beamCount; i++) {
          createEnergyBeam(i * (360 / beamCount));
        }

        // Second phase - collapse
        setTimeout(() => {
          rupture.style.transition = 'all 0.5s cubic-bezier(0.7, 0.1, 0.8, 0.2)';
          vortex.style.transition = 'all 0.5s cubic-bezier(0.7, 0.1, 0.8, 0.2)';

          rupture.style.width = '0';
          rupture.style.height = '0';
          rupture.style.borderWidth = '0';
          rupture.style.opacity = '0';

          vortex.style.width = '0';
          vortex.style.height = '0';
          vortex.style.opacity = '0';

          // Cleanup phase
          setTimeout(() => {
            clearInterval(vortexSpin);
            document.body.removeChild(rupture);
            document.body.removeChild(vortex);
            document.body.removeChild(flash);

            // Allow new animations
            this.classList.remove('animating');
            this.classList.remove('btn-click');
          }, 500);
        }, 800);
      }, 200);

      // Create super insane screen distortion
      const distortion = document.createElement('div');
      distortion.className = 'screen-distortion';
      distortion.style.position = 'fixed';
      distortion.style.inset = '0';
      distortion.style.backdropFilter = 'blur(0px) hue-rotate(0deg)';
      distortion.style.zIndex = '9995';
      distortion.style.pointerEvents = 'none';
      distortion.style.mixBlendMode = 'difference';
      distortion.style.transition = 'backdrop-filter 0.3s';

      document.body.appendChild(distortion);

      setTimeout(() => {
        distortion.style.backdropFilter = 'blur(20px) hue-rotate(90deg)';

        setTimeout(() => {
          distortion.style.backdropFilter = 'blur(5px) hue-rotate(180deg)';

          setTimeout(() => {
            distortion.style.backdropFilter = 'blur(25px) hue-rotate(270deg)';

            setTimeout(() => {
              distortion.style.backdropFilter = 'blur(0px) hue-rotate(360deg)';

              setTimeout(() => {
                document.body.removeChild(distortion);
              }, 300);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      // Add super intense screen shake effect
      let shakeCount = 0;
      const maxShakes = 20;
      const baseSI = window.innerWidth < 768 ? 10 : 30; // Base shake intensity

      const shakeAnimation = setInterval(() => {
        const progress = shakeCount / maxShakes; // 0 to 1

        // Shake intensity starts high and gradually reduces
        const shakeIntensity = baseSI * (1 - progress);

        // Create more complex shake pattern with rotation and scaling
        const xShift = Math.random() * shakeIntensity - shakeIntensity/2;
        const yShift = Math.random() * shakeIntensity - shakeIntensity/2;
        const rotateDeg = (Math.random() * shakeIntensity/10) - shakeIntensity/20;
        const scale = 1 + ((Math.random() * 0.1) - 0.05) * (1 - progress);

        document.body.style.transition = 'none';
        document.body.style.transform = `translate(${xShift}px, ${yShift}px) rotate(${rotateDeg}deg) scale(${scale})`;

        shakeCount++;
        if (shakeCount >= maxShakes) {
          clearInterval(shakeAnimation);

          // Smooth return to normal
          document.body.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
          document.body.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
        }
      }, 50);

      // Create an insane dimensional rift at cursor position
      const rift = document.createElement('div');
      rift.style.position = 'fixed';
      rift.style.top = `${e.clientY}px`;
      rift.style.left = `${e.clientX}px`;
      rift.style.width = '5px';
      rift.style.height = '5px';
      rift.style.borderRadius = '50%';
      rift.style.background = 'white';
      rift.style.boxShadow = '0 0 50px 25px white';
      rift.style.zIndex = '9999';
      rift.style.transform = 'translate(-50%, -50%)';
      rift.style.pointerEvents = 'none';

      document.body.appendChild(rift);

      // Animate the dimensional rift
      setTimeout(() => {
        rift.style.transition = 'all 0.5s cubic-bezier(0.1, 0.9, 0.2, 1.5)';
        rift.style.width = '300px';
        rift.style.height = '300px';
        rift.style.background = 'radial-gradient(circle, white, rgba(66, 198, 255, 0.8), transparent)';
        rift.style.boxShadow = '0 0 100px 50px white, 0 0 200px 100px rgba(66, 198, 255, 0.8)';
        rift.style.filter = 'blur(10px)';

        setTimeout(() => {
          rift.style.transition = 'all 0.3s cubic-bezier(0.7, 0.1, 0.8, 0.2)';
          rift.style.width = '0';
          rift.style.height = '0';
          rift.style.opacity = '0';

          setTimeout(() => {
            document.body.removeChild(rift);
          }, 300);
        }, 500);
      }, 10);

      // Function to create super crazy particles
      function createCrazyParticle() {
        const particle = document.createElement('div');
        particle.className = 'dimension-particle';
        particle.style.position = 'fixed';
        particle.style.top = '50%';
        particle.style.left = '50%';
        particle.style.transform = 'translate(-50%, -50%)';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.zIndex = '9998';
        particle.style.pointerEvents = 'none';

        // Randomize particle shape for extra craziness
        const shapes = ['50%', '0', '50% 0 50% 50%', '50% 50% 0 50%', '50% 0 0 50%'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        particle.style.borderRadius = randomShape;

        // Create super bright colors
        const hue = Math.floor(Math.random() * 360);
        const sat = 80 + Math.floor(Math.random() * 20); // 80-100%
        const light = 50 + Math.floor(Math.random() * 50); // 50-100%

        particle.style.backgroundColor = `hsl(${hue}, ${sat}%, ${light}%)`;
        particle.style.boxShadow = `0 0 20px 10px hsla(${hue}, ${sat}%, ${light}%, 0.8)`;
        particle.style.filter = 'blur(2px)';

        document.body.appendChild(particle);

        // Animate particle - more complex trajectory with cubic bezier 
        setTimeout(() => {
          // Create a unique animation for each particle
          const angle = Math.random() * Math.PI * 2; // 0 to 2π
          const distance = 50 + Math.random() * (window.innerWidth < 768 ? 300 : 700);

          const endX = Math.cos(angle) * distance;
          const endY = Math.sin(angle) * distance;

          // Random size change
          const endScale = 0.2 + Math.random() * 2.5;

          // Randomized motion curve
          const ctrlPtDist = Math.random() * 300;
          const ctrlPtAngle1 = angle + (Math.random() * Math.PI - Math.PI/2);
          const ctrlPtAngle2 = angle + (Math.random() * Math.PI - Math.PI/2);

          const ctrlPt1X = Math.cos(ctrlPtAngle1) * ctrlPtDist;
          const ctrlPt1Y = Math.sin(ctrlPtAngle1) * ctrlPtDist;
          const ctrlPt2X = Math.cos(ctrlPtAngle2) * ctrlPtDist;
          const ctrlPt2Y = Math.sin(ctrlPtAngle2) * ctrlPtDist;

          // Generate unique animation and add to head
          const styleId = `particle-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
          const style = document.createElement('style');
          style.innerHTML = `
            @keyframes ${styleId} {
              0% {
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
                opacity: 1;
                filter: blur(2px) brightness(1.5);
              }
              20% {
                transform: translate(calc(-50% + ${ctrlPt1X * 0.3}px), calc(-50% + ${ctrlPt1Y * 0.3}px)) scale(${1 + Math.random()}) rotate(${Math.random() * 360}deg);
                opacity: 0.9;
                filter: blur(5px) brightness(2);
              }
              60% {
                transform: translate(calc(-50% + ${ctrlPt2X * 0.7}px), calc(-50% + ${ctrlPt2Y * 0.7}px)) scale(${0.5 + Math.random() * 2}) rotate(${Math.random() * 720}deg);
                opacity: ${0.5 + Math.random() * 0.5};
                filter: blur(${Math.random() * 10}px) brightness(${1 + Math.random() * 3}) hue-rotate(${Math.random() * 360}deg);
              }
              100% {
                transform: translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(${endScale}) rotate(${Math.random() * 1080}deg);
                opacity: 0;
                filter: blur(20px) brightness(0);
              }
            }
          `;
          document.head.appendChild(style);

          // Apply the animation
          particle.style.animation = `${styleId} ${1 + Math.random() * 1.5}s cubic-bezier(0.1, 0.9, 0.2, 1) forwards`;

          // Remove particle and style when animation completes
          setTimeout(() => {
            if (document.body.contains(particle)) {
              document.body.removeChild(particle);
            }
            if (document.head.contains(style)) {
              document.head.removeChild(style);
            }
          }, 2500);
        }, 10);
      }

      // Function to create energy beams
      function createEnergyBeam(angle) {
        const beam = document.createElement('div');
        beam.className = 'energy-beam';
        beam.style.position = 'fixed';
        beam.style.top = '50%';
        beam.style.left = '50%';
        beam.style.width = '4px';
        beam.style.height = '0';
        beam.style.background = `linear-gradient(to top, transparent, hsl(${Math.random() * 360}, 100%, 70%))`;
        beam.style.boxShadow = `0 0 20px 10px hsla(${Math.random() * 360}, 100%, 70%, 0.5)`;
        beam.style.transformOrigin = 'bottom center';
        beam.style.transform = `translate(-50%, 0) rotate(${angle}deg)`;
        beam.style.zIndex = '9997';
        beam.style.pointerEvents = 'none';
        beam.style.opacity = '0.8';
        beam.style.filter = 'blur(3px)';

        document.body.appendChild(beam);

        // Animate beam extension
        setTimeout(() => {
          beam.style.transition = 'height 0.5s cubic-bezier(0.1, 0.9, 0.2, 1.5)';
          const screenDiagonal = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight);
          beam.style.height = `${screenDiagonal}px`;

          // Beam fluctuation animation
          let width = 4;
          let growing = true;
          const fluctuate = setInterval(() => {
            if (growing) {
              width += 2;
              if (width >= 12) growing = false;
            } else {
              width -= 2;
              if (width <= 4) growing = true;
            }
            beam.style.width = `${width}px`;
          }, 50);

          // Remove beam
          setTimeout(() => {
            clearInterval(fluctuate);
            beam.style.transition = 'all 0.3s cubic-bezier(0.7, 0.1, 0.8, 0.2)';
            beam.style.height = '0';
            beam.style.opacity = '0';

            setTimeout(() => {
              if (document.body.contains(beam)) {
                document.body.removeChild(beam);
              }
            }, 300);
          }, 800);
        }, 10);
      }
    });
  });

  // Add SUPER DUPER CRAZY particle effects for main title
  const mainTitle = document.querySelector('.main-title');
  if (mainTitle) {
    mainTitle.setAttribute('data-text', mainTitle.textContent);

    // Create particles with stylesheet for better performance
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    mainTitle.parentNode.insertBefore(particleContainer, mainTitle.nextSibling);

    const particleStyles = document.createElement('style');
    let particleStyleContent = '';
    const colors = ['#42c6ff', '#42fff6', '#ff42f6', '#42ff75', '#ffff42', '#ff4242', '#f700ff', '#00ffff'];

    // LOTS of particles for extreme effect
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = `particle particle-${i}`;
      particleContainer.appendChild(particle);

      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 3 + Math.random() * 7;

      // Add different particle shapes
      const shapeType = Math.floor(Math.random() * 3);
      let shapeStyle = '';

      if (shapeType === 0) {
        // Circle
        const size = 2 + Math.random() * 8;
        shapeStyle = `
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
        `;
      } else if (shapeType === 1) {
        // Star
        const size = 8 + Math.random() * 12;
        shapeStyle = `
          width: ${size}px;
          height: ${size}px;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        `;
      } else {
        // Square with rotation
        const size = 4 + Math.random() * 8;
        const rotation = Math.random() * 360;
        shapeStyle = `
          width: ${size}px;
          height: ${size}px;
          transform: rotate(${rotation}deg);
        `;
      }

      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      particleStyleContent += `
        .particle-${i} {
          left: ${left}%;
          ${shapeStyle}
          background: ${randomColor};
          box-shadow: 0 0 15px ${randomColor}, 0 0 30px ${randomColor};
          animation: crazyParticleFloat${i % 5} ${duration}s infinite linear, particlePulse ${1 + Math.random()}s infinite alternate;
          animation-delay: ${delay}s;
          z-index: ${Math.floor(Math.random() * 10)};
          filter: blur(${Math.random() * 2}px);
        }
      `;
    }

    // Add multiple crazy animation patterns
    particleStyleContent += `
      @keyframes crazyParticleFloat0 {
        0% {
          transform: translateY(100vh) translateX(-50px) translateZ(-100px) scale(0) rotate(0deg);
          opacity: 0;
          filter: hue-rotate(0deg) brightness(1);
        }
        20% {
          opacity: 0.9;
          transform: translateY(70vh) translateX(80px) translateZ(50px) scale(1.2) rotate(180deg);
        }
        40% {
          transform: translateY(40vh) translateX(-50px) translateZ(-80px) scale(2) rotate(360deg);
          filter: hue-rotate(90deg) brightness(1.5);
        }
        60% {
          transform: translateY(20vh) translateX(100px) translateZ(120px) scale(0.8) rotate(540deg);
          filter: hue-rotate(180deg) brightness(2);
        }
        80% {
          transform: translateY(-30vh) translateX(-70px) translateZ(-50px) scale(1.5) rotate(720deg);
          filter: hue-rotate(270deg) brightness(1.7);
        }
        100% {
          transform: translateY(-100vh) translateX(50px) translateZ(80px) scale(0) rotate(1080deg);
          opacity: 0;
          filter: hue-rotate(360deg) brightness(1);
        }
      }

      @keyframes crazyParticleFloat1 {
        0% {
          transform: translateX(-100vw) translateY(50px) scale(0) rotate(0deg);
          opacity: 0;
        }
        30% {
          opacity: 0.8;
          transform: translateX(-50vw) translateY(-80px) scale(1.8) rotate(360deg);
        }
        70% {
          transform: translateX(50vw) translateY(60px) scale(0.5) rotate(720deg);
        }
        100% {
          transform: translateX(100vw) translateY(-50px) scale(0) rotate(1080deg);
          opacity: 0;
        }
      }

      @keyframes crazyParticleFloat2 {
        0% {
          transform: rotate(0deg) translateX(-100px) translateY(0) scale(0);
          opacity: 0;
        }
        20% {
          opacity: 1;
          transform: rotate(180deg) translateX(50px) translateY(-50px) scale(1.5);
        }
        40% {
          transform: rotate(360deg) translateX(-30px) translateY(80px) scale(0.8);
        }
        60% {
          transform: rotate(540deg) translateX(80px) translateY(-30px) scale(1.2);
        }
        80% {
          transform: rotate(720deg) translateX(-60px) translateY(-70px) scale(0.6);
        }
        100% {
          transform: rotate(1080deg) translateX(100px) translateY(0) scale(0);
          opacity: 0;
        }
      }

      @keyframes crazyParticleFloat3 {
        0% {
          transform: scale(0) rotate(0deg) translateY(0);
          opacity: 0;
          filter: blur(5px);
        }
        10% {
          opacity: 1;
          transform: scale(2) rotate(45deg) translateY(-30px);
          filter: blur(0);
        }
        30% {
          transform: scale(0.5) rotate(180deg) translateY(50px);
          filter: blur(3px) hue-rotate(90deg);
        }
        50% {
          transform: scale(1.8) rotate(360deg) translateY(-80px);
          filter: blur(0) hue-rotate(180deg);
        }
        70% {
          transform: scale(0.7) rotate(540deg) translateY(40px);
          filter: blur(2px) hue-rotate(270deg);
        }
        90% {
          transform: scale(1.5) rotate(720deg) translateY(-60px);
          filter: blur(0) hue-rotate(320deg);
        }
        100% {
          transform: scale(0) rotate(900deg) translateY(0);
          opacity: 0;
          filter: blur(5px) hue-rotate(360deg);
        }
      }

      @keyframes crazyParticleFloat4 {
        0% {
          transform: translateX(0) translateY(0) scale(0) skew(0deg, 0deg);
          opacity: 0;
        }
        25% {
          opacity: 1;
          transform: translateX(100px) translateY(-50px) scale(1.5) skew(20deg, 10deg);
        }
        50% {
          transform: translateX(-80px) translateY(100px) scale(0.8) skew(-15deg, 5deg);
        }
        75% {
          transform: translateX(60px) translateY(-60px) scale(1.2) skew(10deg, -15deg);
        }
        100% {
          transform: translateX(0) translateY(0) scale(0) skew(0deg, 0deg);
          opacity: 0;
        }
      }

      @keyframes particlePulse {
        0% {
          filter: brightness(1) blur(0px);
          box-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
        }
        50% {
          filter: brightness(1.5) blur(1px);
          box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
        }
        100% {
          filter: brightness(1) blur(0px);
          box-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
        }
      }
    `;

    particleStyles.textContent = particleStyleContent;
    document.head.appendChild(particleStyles);

    // Add special effects on document click
    document.addEventListener('click', function(e) {
      // Create an explosion of particles at the click location
      const explosion = document.createElement('div');
      explosion.style.position = 'fixed';
      explosion.style.top = e.clientY + 'px';
      explosion.style.left = e.clientX + 'px';
      explosion.style.zIndex = '10000';
      explosion.style.pointerEvents = 'none';
      document.body.appendChild(explosion);

      // Create 30 explosion particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = (3 + Math.random() * 8) + 'px';
        particle.style.height = particle.style.width;
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;

        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const speed = 5 + Math.random() * 15;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        // Set initial position
        particle.style.top = '0';
        particle.style.left = '0';

        // Add to the container
        explosion.appendChild(particle);

        // Animate
        let posX = 0;
        let posY = 0;
        let opacity = 1;
        let scale = 1;
        let frame = 0;

        const animate = function() {
          if (frame > 60 || opacity <= 0) { // Stop after 60 frames or when faded out
            if (particle.parentNode === explosion) {
              explosion.removeChild(particle);
            }

            if (explosion.children.length === 0) {
              document.body.removeChild(explosion);
            }
            return;
          }

          // Update position with gravity effect
          posX += vx;
          posY += vy + frame * 0.2; // accelerate downward
          opacity -= 0.02;
          scale -= 0.01;

          particle.style.transform = `translate(${posX}px, ${posY}px) scale(${scale > 0 ? scale : 0})`;
          particle.style.opacity = opacity;

          frame++;
          requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }
    });
  }
  // Add sparkle animation keyframes
  const sparkleStyle = document.createElement('style');
  sparkleStyle.textContent = `
    @keyframes sparkleOut {
      0% {
        transform: translate(-50%, -50%);
        opacity: 1;
      }
      100% {
        transform: translate(var(--sparkle-x), var(--sparkle-y));
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(sparkleStyle);

  // Initialize optimized intersection observer for wild animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Add explosion-like effect on gallery items when they come into view
        if (entry.target.classList.contains('gallery-item')) {
          // Avoid recalculating styles for already animated items
          if (entry.target.dataset.animated) return;
          entry.target.dataset.animated = 'true';

          entry.target.style.animation = 'none';

          // Use a more efficient approach with requestAnimationFrame
          requestAnimationFrame(() => {
            entry.target.style.transform = 'scale(0.1) rotate(180deg)';
            entry.target.style.opacity = '0';
            entry.target.style.transition = 'none';

            // Force reflow
            entry.target.offsetHeight;

            // Apply the animation
            entry.target.style.transition = 'all 0.8s cubic-bezier(0.2, 0.9, 0.3, 1.5)';
            entry.target.style.transform = 'scale(1) rotate(0deg)';
            entry.target.style.opacity = '1';

            // Add sparkles around the item - optimized version
            const sparkleContainer = document.createElement('div');
            sparkleContainer.className = 'sparkle-container';
            sparkleContainer.style.position = 'absolute';
            sparkleContainer.style.top = '0';
            sparkleContainer.style.left = '0';
            sparkleContainer.style.width = '100%';
            sparkleContainer.style.height = '100%';
            sparkleContainer.style.pointerEvents = 'none';
            sparkleContainer.style.zIndex = '100';

            entry.target.appendChild(sparkleContainer);

            // Reduced number of sparkles for better performance
            const sparkleCount = 12;

            // Create all sparkles at once
            const fragment = document.createDocumentFragment();

            for (let i = 0; i < sparkleCount; i++) {
              const sparkle = document.createElement('div');
              sparkle.className = 'sparkle';
              sparkle.style.position = 'absolute';
              sparkle.style.width = '5px';
              sparkle.style.height = '5px';
              sparkle.style.borderRadius = '50%';

              // More efficient color calculation
              const hue = Math.floor(Math.random() * 360);
              sparkle.style.backgroundColor = `hsl(${hue}, 100%, 75%)`;
              sparkle.style.boxShadow = `0 0 10px hsl(${hue}, 100%, 75%)`;

              sparkle.style.top = '50%';
              sparkle.style.left = '50%';

              // Calculate sparkle trajectory
              const angle = Math.random() * Math.PI * 2;
              const distance = 100 + Math.random() * 100; // Slightly reduced range
              const duration = 0.5 + Math.random() * 0.5; // Reduced max duration

              sparkle.style.setProperty('--sparkle-x', `calc(-50% + ${Math.cos(angle) * distance}px)`);
              sparkle.style.setProperty('--sparkle-y', `calc(-50% + ${Math.sin(angle) * distance}px)`);
              sparkle.style.animation = `sparkleOut ${duration}s forwards`;

              fragment.appendChild(sparkle);
            }

            sparkleContainer.appendChild(fragment);

            // Remove sparkle container after all animations complete
            setTimeout(() => {
              if (sparkleContainer.parentNode === entry.target) {
                entry.target.removeChild(sparkleContainer);
              }
            }, 1500); // Safe timeout for all sparkles to finish
          });
        }
      }
    });
  }, { 
    threshold: 0.2,
    rootMargin: '0px 0px 100px 0px' // Start loading a bit earlier
  });

  // Observe all gallery items and sections
  document.querySelectorAll('.gallery-item, .strategy-section, .photo-container').forEach(item => {
    observer.observe(item);
  });

  // Handle explore button click with extreme transitions
  const exploreBtn = document.querySelector('.explore-btn');

  // Make sure the explore button always stays visible during hover
  exploreBtn.addEventListener('mouseenter', () => {
    exploreBtn.style.opacity = '1';
    exploreBtn.style.visibility = 'visible';
    exploreBtn.style.display = 'block';
  });

  exploreBtn.addEventListener('mouseleave', () => {
    exploreBtn.style.opacity = '1';
    exploreBtn.style.visibility = 'visible';
    exploreBtn.style.display = 'block';
  });

  exploreBtn.addEventListener('click', () => {
    const compositionalSection = document.getElementById('compositional-strategies');

    // Create an optimized transition effect
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'transition-overlay';
    transitionOverlay.style.position = 'fixed';
    transitionOverlay.style.top = '0';
    transitionOverlay.style.left = '0';
    transitionOverlay.style.width = '100%';
    transitionOverlay.style.height = '100%';
    transitionOverlay.style.background = 'radial-gradient(circle at center, rgba(66, 198, 255, 0.9) 0%, rgba(26, 26, 26, 0.9) 70%)';
    transitionOverlay.style.zIndex = '9999';
    transitionOverlay.style.opacity = '0';
    transitionOverlay.style.transition = 'opacity 0.5s';
    transitionOverlay.style.pointerEvents = 'none';

    document.body.appendChild(transitionOverlay);

    // Flash the screen with optimized animations
    requestAnimationFrame(() => {
      transitionOverlay.style.opacity = '1';

      // Create energy beams with a single container for better performance
      const beamContainer = document.createElement('div');
      beamContainer.className = 'beam-container';
      beamContainer.style.position = 'absolute';
      beamContainer.style.top = '50%';
      beamContainer.style.left = '50%';
      beamContainer.style.width = '100%';
      beamContainer.style.height = '100%';
      beamContainer.style.transform = 'translate(-50%, -50%)';
      beamContainer.style.zIndex = '10000';

      transitionOverlay.appendChild(beamContainer);

      // Pre-create beams with CSS classes
      const beamStyle = document.createElement('style');
      let beamStyleContent = `
        .energy-beam {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 0;
          transform-origin: bottom center;
          opacity: 0.8;
          box-shadow: 0 0 20px currentColor;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1.5);
        }
      `;

      const beamColors = ['#42c6ff', '#ff42e3', '#42ffbd', '#fffc42'];
      const beamCount = 8; // Reduced number of beams

      for (let i = 0; i < beamCount; i++) {
        const beam = document.createElement('div');
        beam.className = `energy-beam beam-${i}`;
        beam.style.transform = `translate(-50%, -50%) rotate(${i * (360/beamCount)}deg)`;
        beam.style.background = `linear-gradient(to top, transparent, ${beamColors[i % beamColors.length]})`;

        beamContainer.appendChild(beam);

        beamStyleContent += `
          .beam-${i} {
            animation: beamGrow 0.5s forwards ${i * 0.05}s;
          }
        `;
      }

      beamStyleContent += `
        @keyframes beamGrow {
          to { height: 100vh; }
        }

        @keyframes particleBurst {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(var(--scale));
            opacity: 0;
          }
        }
      `;

      beamStyle.textContent = beamStyleContent;
      document.head.appendChild(beamStyle);

      // Create optimized particle explosion with CSS
      const particleContainer = document.createElement('div');
      particleContainer.className = 'particle-explosion';
      particleContainer.style.position = 'absolute';
      particleContainer.style.top = '0';
      particleContainer.style.left = '0';
      particleContainer.style.width = '100%';
      particleContainer.style.height = '100%';
      particleContainer.style.zIndex = '10001';

      transitionOverlay.appendChild(particleContainer);

      // Reduced number of particles for better performance
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        particle.style.position = 'absolute';
        particle.style.top = '50%';
        particle.style.left = '50%';

        const size = 2 + Math.random() * 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';

        // More efficient color calculation
        const hue = Math.floor(Math.random() * 360);
        particle.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
        particle.style.boxShadow = `0 0 10px hsl(${hue}, 100%, 70%)`;

        // Use CSS variables for animation
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 500; // Reduced range
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const scale = 1 + Math.random();
        const duration = 0.5 + Math.random() * 1;

        particle.style.setProperty('--tx', `calc(-50% + ${tx}px)`);
        particle.style.setProperty('--ty', `calc(-50% + ${ty}px)`);
        particle.style.setProperty('--scale', scale);
        particle.style.animation = `particleBurst ${duration}s forwards`;

        particleContainer.appendChild(particle);
      }

      // First hide home section
      const homeSection = document.getElementById('home');
      homeSection.classList.remove('active-section');

      // Then show compositional strategies section with a delay
      setTimeout(() => {
        transitionOverlay.style.opacity = '0';

        setTimeout(() => {
          document.body.removeChild(transitionOverlay);
          compositionalSection.classList.add('active-section');

          // Update active nav link
          document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === 'compositional-strategies') {
              link.classList.add('active');
            }
          });

          compositionalSection.scrollIntoView({ behavior: 'smooth' });

          // Animate section elements
          animateSectionElements(compositionalSection);
        }, 500);
      }, 800);
    });
  });

  // Handle technique buttons
  const techniqueBtns = document.querySelectorAll('.technique-btn');
  techniqueBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      techniqueBtns.forEach(b => b.classList.remove('active'));

      // Add active class to clicked button
      btn.classList.add('active');

      // Hide all panels
      const panels = document.querySelectorAll('.technique-panel');
      panels.forEach(panel => panel.classList.remove('active'));

      // Show corresponding panel
      const techniqueId = btn.getAttribute('data-technique');
      const panelId = techniqueId === 'basic' ? 'basic-panel' : `${techniqueId}-panel`;
      const panel = document.getElementById(panelId);

      setTimeout(() => {
        panel.classList.add('active');

        // Animate panel elements with delay
        const items = panel.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(30px)';

          setTimeout(() => {
            item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, index * 150);
        });
      }, 300);
    });
  });

  // Function to animate section elements
  function animateSectionElements(section) {
    const elements = section.querySelectorAll('.gallery-item, h1, p, .technique-btn');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';

      setTimeout(() => {
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + index * 100);
    });
  }

  // Navigation functionality
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Only prevent default for section navigation links
      if (link.getAttribute('data-section')) {
        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');

        // Hide current active section
        const currentSection = document.querySelector('section.active-section');
        if (currentSection) {
          currentSection.classList.remove('active-section');
        }

        // Show selected section
        const sectionId = link.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        
        if (targetSection) {
          setTimeout(() => {
            targetSection.classList.add('active-section');
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // If it's the compositional strategies section, make first tab active
            if (sectionId === 'compositional-strategies') {
              const firstTechniqueBtn = document.querySelector('.technique-btn');
              if (firstTechniqueBtn) {
                firstTechniqueBtn.click();
              }
            }

            // Animate section elements
            if (typeof animateSectionElements === 'function') {
              animateSectionElements(targetSection);
            }
          }, 400);
        }
      }
      // For external links (no data-section), let the default behavior happen
    });
  });

  // Set Home as active by default
  const homeSection = document.querySelector('section#home');
  if (homeSection) {
    homeSection.classList.add('active-section');
  }
  
  const firstNavLink = navLinks[0];
  if (firstNavLink) {
    firstNavLink.classList.add('active');
  }

  // Add SUPER CRAZY particle explosion on gallery item click
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();

      // Create explosion container
      const explosion = document.createElement('div');
      explosion.className = 'mega-explosion';
      explosion.style.position = 'fixed';
      explosion.style.top = `${e.clientY}px`;
      explosion.style.left = `${e.clientX}px`;
      explosion.style.zIndex = '10000';
      explosion.style.pointerEvents = 'none';
      document.body.appendChild(explosion);

      // Create TONS of particles
      const particleCount = 100;
      const colors = ['#42c6ff', '#ff42e3', '#42ff75', '#ffff42', '#ff4242', '#42ffee'];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');

        // Random particle shape: circle, square, or triangle
        const shapeType = Math.floor(Math.random() * 3);

        particle.style.position = 'absolute';
        particle.style.top = '0';
        particle.style.left = '0';

        // Randomize size for more chaos
        const size = 5 + Math.random() * 15;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Apply different shapes
        if (shapeType === 0) { // Circle
          particle.style.borderRadius = '50%';
        } else if (shapeType === 1) { // Square with rotation
          particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        } else { // Triangle
          particle.style.width = '0';
          particle.style.height = '0';
          particle.style.borderLeft = `${size/2}px solid transparent`;
          particle.style.borderRight = `${size/2}px solid transparent`;
          particle.style.borderBottom = `${size}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
          particle.style.background = 'transparent';
        }

        // Give non-triangle shapes background color
        if (shapeType !== 2) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          particle.style.backgroundColor = color;
          particle.style.boxShadow = `0 0 ${size}px ${color}`;
        }

        // Create insane animation
        const angle = Math.random() * Math.PI * 2;
        const velocity = 10 + Math.random() * 30;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        const duration = 0.5 + Math.random() * 1.5;

        particle.style.transition = `transform ${duration}s cubic-bezier(0.1, 0.8, 0.2, 1), opacity ${duration}s ease-out`;

        explosion.appendChild(particle);

        // Trigger animation on next frame
        requestAnimationFrame(() => {
          particle.style.transform = `translate(${vx * 20}px, ${vy * 20}px) scale(${Math.random() > 0.5 ? 0 : 2}) rotate(${Math.random() * 720}deg)`;
          particle.style.opacity = '0';
        });
      }

      // Remove explosion container after animation completes
      setTimeout(() => {
        document.body.removeChild(explosion);
      }, 2000);

      // Add screen flash effect
      const flash = document.createElement('div');
      flash.style.position = 'fixed';
      flash.style.top = '0';
      flash.style.left = '0';
      flash.style.width = '100%';
      flash.style.height = '100%';
      flash.style.backgroundColor = 'white';
      flash.style.opacity = '0.8';
      flash.style.zIndex = '9999';
      flash.style.pointerEvents = 'none';
      document.body.appendChild(flash);

      // Fade out flash
      flash.style.transition = 'opacity 0.3s ease-out';
      requestAnimationFrame(() => {
        flash.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(flash);
        }, 300);
      });

      // Add screen shake
      let shakeCount = 0;
      const shakeInterval = setInterval(() => {
        const xShift = (Math.random() - 0.5) * 20;
        const yShift = (Math.random() - 0.5) * 20;
        document.body.style.transform = `translate(${xShift}px, ${yShift}px)`;

        shakeCount++;
        if (shakeCount > 10) {
          clearInterval(shakeInterval);
          document.body.style.transform = '';
        }
      }, 50);
    });
  });

  // Add tracking for mouse position to create responsive background
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${(e.clientX / window.innerWidth) * 100}%`);
    document.documentElement.style.setProperty('--mouse-y', `${(e.clientY / window.innerHeight) * 100}%`);
  });

  // Make floating images visible by default
  document.querySelectorAll('.float-image').forEach((img) => {
    img.style.opacity = '0.8';
    img.style.transform = 'translateY(0) scale(1)';
  });

  // Add parallax scroll effect
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Parallax for floating images
    document.querySelectorAll('.float-image').forEach((img, index) => {
      const speed = (index % 2 === 0) ? 0.1 : 0.05;
      img.style.transform = `translateY(${scrollPosition * speed}px) rotate(${scrollPosition * 0.01}deg)`;
    });

    // Scale effect for the hero section
    const homeHero = document.querySelector('.home-hero');
    if (homeHero && scrollPosition < window.innerHeight) {
      const scale = 1 - (scrollPosition * 0.0005);
      const opacity = 1 - (scrollPosition * 0.002);
      homeHero.style.transform = `scale(${Math.max(scale, 0.8)})`;
      homeHero.style.opacity = Math.max(opacity, 0);
    }

    // Super intense reveal for gallery items on scroll
    document.querySelectorAll('.gallery-item').forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.8;

      if (itemPosition < screenPosition) {
        item.classList.add('item-revealed');
      }
    });
  });

  // Add magnetic hover effect to buttons
  document.querySelectorAll('.explore-btn, .technique-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const bounds = btn.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      // Scale down the effect for better usability
      const magneticPull = 0.2;

      btn.style.transform = `translate(${x * magneticPull}px, ${y * magneticPull}px) scale(1.05)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0) scale(1)';
    });
  });

  // Animation for main title with letter-by-letter reveal
  const title = document.querySelector('.main-title');
  const titleText = title.textContent;
  title.textContent = '';

  for (let i = 0; i < titleText.length; i++) {
    const span = document.createElement('span');
    span.textContent = titleText[i];
    span.style.opacity = '0';
    span.style.display = 'inline-block';
    span.style.transform = 'translateY(20px)';
    span.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    title.appendChild(span);

    setTimeout(() => {
      span.style.opacity = '1';
      span.style.transform = 'translateY(0)';
    }, 100 + i * 50);
  }
});

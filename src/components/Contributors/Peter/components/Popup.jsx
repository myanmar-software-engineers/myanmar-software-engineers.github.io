"use-client";
import React, { useEffect } from "react";

function CanvasAnimation() {
  useEffect(() => {
    const canvas = document.getElementById("canvas-2");
    const ctx = canvas.getContext("2d");

    const colors = [
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(255, 77, 90)",
    ];
    const numParticles = window.innerWidth > 1080 ? 500 : 150;
    const particleSettings = {
      minRadius: 1.5,
      maxRadius: 3,
      minSpeed: -0.5,
      maxSpeed: 0.5,
    };

    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = "rgb(81, 162, 233)";

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx =
          particleSettings.minSpeed + Math.random() * particleSettings.maxSpeed;
        this.vy =
          particleSettings.minSpeed + Math.random() * particleSettings.maxSpeed;
        this.radius =
          particleSettings.minRadius +
          Math.random() * particleSettings.maxRadius;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      create() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        const distance = Math.sqrt(
          Math.pow(this.x - mouse.x, 2) + Math.pow(this.y - mouse.y, 2)
        );
        const alpha = 1 - distance / (window.innerWidth / 1.7);
        ctx.fillStyle = this.color.slice(0, -1) + `,${alpha})`;
        ctx.fill();
      }

      // Inside the Particle class
      animate() {
        for (let i = 0; i < numParticles; i++) {
          const p = particles[i];
          // Your existing animation logic here
          if (p.y < 0 || p.y > canvas.height) {
            p.vy = -p.vy;
          } else if (p.x < 0 || p.x > canvas.width) {
            p.vx = -p.vx;
          }
          p.x += p.vx;
          p.y += p.vy;

          // Add fade in and out animation based on distance from the mouse
          const distance = Math.sqrt(
            Math.pow(p.x - mouse.x, 2) + Math.pow(p.y - mouse.y, 2)
          );
          const alpha = 1 - distance / (window.innerWidth / 1.7);
          p.color = `rgba(81, 162, 233, ${alpha})`;
        }
      }
    }

    const particles = Array.from(
      { length: numParticles },
      () => new Particle()
    );

    const handleMouseMove = (e) => {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
      try {
        particles[0].x = e.pageX;
        particles[0].y = e.pageY;
      } catch (error) {}
    };

    window.addEventListener("mousemove", handleMouseMove);

    function drawLines() {
      for (let i = 0; i < numParticles; i++) {
        for (let j = 0; j < numParticles; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          if (
            p1.x - p2.x < 70 &&
            p1.y - p2.y < 70 &&
            p1.x - p2.x > -70 &&
            p1.y - p2.y > -70
          ) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            let distance = Math.sqrt(
              Math.pow(p1.x - mouse.x, 2) + Math.pow(p1.y - mouse.y, 2)
            );
            distance = distance / (window.innerWidth / 1.7);
            distance -= 0.3;
            if (distance < 0) distance = 0;
            ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distance})`;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    const animate = () => {
      // Place your animation logic here
      // For example, you can update the particle positions or colors here
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];

        // Add your animation logic for each particle
        // For example, you can update particle positions based on their velocities
        p.x += p.vx;
        p.y += p.vy;

        // Ensure particles stay within the canvas bounds
        if (p.x < 0 || p.x > canvas.width) {
          p.vx = -p.vx;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy = -p.vy;
        }
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];

        // Calculate the distance between the particle and the mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Define a maximum follow distance
        const maxFollowDistance = 80;

        if (distance < maxFollowDistance) {
          // The particle is within the follow range
          // Update the particle's position to move toward the mouse
          p.x -= dx * 0.001; // Move in the opposite direction
          p.y -= dy * 0.001; // Move in the opposite direction
        } else {
          // The particle is outside the follow range
          // Keep the particle in place
        }

        p.create();
      }

      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    const animateCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.create();
      }
      particles[0].radius = 1.5;
      particles[0].color = "#51a2e9";
      drawLines(); // You should define the drawLines function.
      animate(); // You can add your own animation logic here.
      requestAnimationFrame(animateCanvas);
    };

    initializeCanvas(); // Call this if you need to initialize the canvas.

    animateCanvas(); // Start the animation loop.

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const initializeCanvas = () => {
    // Your canvas initialization code, if needed
  };

  return (
    <canvas id="canvas-2" className="container mx-auto canvas-animation" />
  );
}

export default CanvasAnimation;

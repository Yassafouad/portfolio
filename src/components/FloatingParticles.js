import React, { useEffect, useRef } from 'react';

const FloatingParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1.2 - 0.6;
        this.speedY = Math.random() * 1.2 - 0.6;
        this.opacity = Math.random() * 0.8 + 0.3;
        this.type = Math.random() > 0.6 ? 'star' : 'circle';
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.color = Math.random() > 0.5 ? '#8a49a8' : '#c770f0';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        this.pulse += this.pulseSpeed;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY *= -1;
        }

        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity * (0.7 + 0.3 * Math.sin(this.pulse));
        
        if (this.type === 'star') {
          this.drawStar();
        } else {
          this.drawCircle();
        }
        
        ctx.restore();
      }

      drawCircle() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `${this.color}cc`);
        gradient.addColorStop(0.7, `${this.color}66`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      drawStar() {
        ctx.fillStyle = `${this.color}dd`;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          ctx.lineTo(Math.cos((i * 2 * Math.PI) / 5) * this.size, 
                     Math.sin((i * 2 * Math.PI) / 5) * this.size);
          ctx.lineTo(Math.cos(((i * 2 + 1) * Math.PI) / 5) * (this.size * 0.5), 
                     Math.sin(((i * 2 + 1) * Math.PI) / 5) * (this.size * 0.5));
        }
        ctx.closePath();
        ctx.fill();
        
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      setTimeout(() => {
        isMouseMoving = false;
      }, 150);
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.speedX += dx * force * 0.0002;
            particle.speedY += dy * force * 0.0002;
          }
        }
        
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.6,
      }}
    />
  );
};

export default FloatingParticles; 
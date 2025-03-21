
import { useEffect, useRef } from "react";

const AnimatedGradient = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resizeCanvas);
    
    // Configuration
    const circleCount = 3;
    const circles = Array.from({ length: circleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 200 + 100,
      xSpeed: (Math.random() - 0.5) * 0.7,
      ySpeed: (Math.random() - 0.5) * 0.7,
      hue: Math.random() * 60 + 200, // Blue to purple hues
    }));
    
    const animate = () => {
      // Create gradient background
      ctx.clearRect(0, 0, width, height);
      
      // Draw circles with gradient
      circles.forEach(circle => {
        // Update position
        circle.x += circle.xSpeed;
        circle.y += circle.ySpeed;
        
        // Bounce off walls
        if (circle.x + circle.radius > width || circle.x - circle.radius < 0) {
          circle.xSpeed = -circle.xSpeed;
        }
        if (circle.y + circle.radius > height || circle.y - circle.radius < 0) {
          circle.ySpeed = -circle.ySpeed;
        }
        
        // Draw gradient circle
        const gradient = ctx.createRadialGradient(
          circle.x, 
          circle.y, 
          0, 
          circle.x, 
          circle.y, 
          circle.radius
        );
        
        gradient.addColorStop(0, `hsla(${circle.hue}, 80%, 60%, 0.2)`);
        gradient.addColorStop(1, `hsla(${circle.hue}, 80%, 60%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className || ""}`} 
    />
  );
};

export default AnimatedGradient;

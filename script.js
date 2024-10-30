// GSAP animations
document.addEventListener("DOMContentLoaded", () => {
    // Intro animation
    gsap.from(".intro h1", { duration: 1.5, y: -100, opacity: 0, ease: "power2.out" });
  
    // Scroll-triggered animations for each message
    gsap.utils.toArray(".message").forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          duration: 1.2,
          ease: "power2.out",
        }
      );
    });
  });
  
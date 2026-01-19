import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-visible");
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

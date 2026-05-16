import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateOnScroll(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top center',
        end: 'center center',
        scrub: 1,
        ...options.scrollTrigger,
      },
      opacity: options.opacity ?? 1,
      y: options.y ?? 0,
      rotation: options.rotation ?? 0,
      ...options,
    });
  });
}

export function parallaxEffect(selector, speed = 0.5) {
  gsap.to(selector, {
    y: () => window.innerHeight * speed,
    scrollTrigger: {
      trigger: selector,
      scrub: 1,
    },
  });
}
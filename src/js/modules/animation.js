import { gsap } from "gsap";

// variables
const loadingTextParams = {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: "expo.inOut"
};

const animations = (function() {
    let tl = gsap
        .timeline({
            yoyo: false
        })
        .from(".x-loading-text", {
            ...loadingTextParams
        })
        .to(".x-loading-indicators-indicator", {
            scaleY: 0,
            transformOrigin: "50% bottom",
            stagger: 0.1,
            ease: "expo.inOut",
            duration: 1.8,
            onStart() {
                gsap.to(".x-loading-text", {
                    ...loadingTextParams,
                    delay: 0.5
                });
            }
        });

    console.log(tl);
})();

export default animations;

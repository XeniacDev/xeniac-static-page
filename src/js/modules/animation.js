import { gsap } from "gsap";

const animations = (function() {
    // variables
    const loadingTextParams = {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "expo.inOut"
    };

    let lodingLayout = gsap
        .timeline({
            yoyo: false,
            onComplete: heroSectionAnimation
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

    function heroSectionAnimation() {
        console.log("hello wolrd");
    }
})();

export default animations;

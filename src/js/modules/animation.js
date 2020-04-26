import { gsap } from "gsap";

const animations = (function() {
    // variables
    const loadingTextParams = {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.inOut"
    };

    let lodingLayout = gsap
        .timeline({
            yoyo: false
        })
        .to(".x-loading-text", {
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
                    opacity: 0,
                    y: 100,
                    ease: "expo.inOut",
                    duration: 2,
                });
                heroSectionAnimation(0.4);
            }
        });

    function heroSectionAnimation(delay = 0) {
        gsap.timeline({
            yoyo: false,
            delay: delay
        })
            .from(".x-hero-title", {
                opacity: 0,
                y: 100,
                duration: 2,
                ease: "expo.inOut"
            })
            .from(
                ".x-hero-description",
                {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "expo.inOut"
                },
                "-=1.2"
            );
    }
})();

export default animations;

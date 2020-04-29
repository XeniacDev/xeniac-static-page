import { gsap } from "gsap";

const textAnimations = (function() {
    // default params for title animations
    const titleAnimationParams = {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.inOut"
    };

    const descriptionAnimationParams = {
        opacity: 0,
        y: 40,
        duration: 1.6,
        ease: "expo"
    };

    // about animations
    let aboutText = document.querySelectorAll(".x-about-title > span");

    let aboutTL = function() {
        return gsap
            .timeline()
            .to(aboutText, {
                ...titleAnimationParams
            })
            .from(
                ".x-about-description",
                {
                    ...descriptionAnimationParams
                },
                "-=1.3"
            );
    };

    // skills animations
    let skillsText = document.querySelectorAll(
        ".x-skills-title-wrapper > span"
    );
    let xpList = document.querySelectorAll(".x-skills-xp > .x-xp");
    let skillsTL = function() {
        return gsap
            .timeline()
            .to(skillsText, {
                ...titleAnimationParams
            })
            .from(
                ".x-skills-skill-list",
                {
                    ...descriptionAnimationParams
                },
                "-=1.3"
            )
            .from(
                xpList,
                {
                    opacity: 0,
                    x: -50,
                    duration: 1,
                    stagger: 0.4,
                    ease: "expo"
                },
                "-=1.4"
            );
    };

    // social animations
    const socialText = document.querySelectorAll(".x-social-title > span");
    let socialTL = function() {
        return gsap.timeline().to(socialText, {
            ...titleAnimationParams
        });
    };

    return {
        f: { aboutTL, skillsTL, socialTL }
    };
})();

export default textAnimations;

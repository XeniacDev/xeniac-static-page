import { gsap } from "gsap";

const textAnimations = (function() {
    // default params for title animations
    const titleAnimationParams = {
        opacity: 0,
        y: 150,
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
    let aboutTL = gsap
        .timeline()
        .from(aboutText, {
            ...titleAnimationParams
        })
        .from(
            ".x-about-description",
            {
                ...descriptionAnimationParams
            },
            "-=1.3"
        );

    // skills animations
    let skillsText = document.querySelectorAll(
        ".x-skills-title-wrapper > span"
    );
    let xpList = document.querySelectorAll(".x-skills-xp > .x-xp");
    let skillsTL = gsap
        .timeline()
        .from(skillsText, {
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

    // social animations
    const socialText = document.querySelectorAll(".x-social-title > span");
    let socialTL = gsap.timeline().from(socialText, {
        ...titleAnimationParams
    });
})();

export default textAnimations;

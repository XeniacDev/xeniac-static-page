import textAnimations from "./textAnimations";

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

let scene = (function() {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#about"
    })
        .setTween(textAnimations.f.aboutTL())
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#skills"
    })
        .setTween(textAnimations.f.skillsTL())
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#social"
    })
        .setTween(textAnimations.f.socialTL())
        .addTo(controller);
})();

export default scene;

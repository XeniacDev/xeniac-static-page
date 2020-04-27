import rellax from "rellax"


let parallax = (function() {
    const parallaxOptions = {
        speed: 4,
        round: true
    };
    let numberOne = new rellax(".large-number-one", {
        ...parallaxOptions
    });

    let numberTwo = new rellax(".large-number-two", {
        ...parallaxOptions
    });

    let numberThree = new rellax(".large-number-three", {
        ...parallaxOptions
    });
})();


export default parallax;
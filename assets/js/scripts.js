function gravityAnimate() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#main1",
            // markers: true,
            start: "50% 50%",
            end: "150% 50%",
            scrub: 2,
            pin: true,

        }
    })


    tl.to("#main1 #top", {
        top: "-50%",
    }, "h")


    tl.to("#main1 #bottom", {
        bottom: "-50%",
    }, "h")

    tl.to("#top #top-h", {
        y: 90,
    }, "h")

    tl.to("#bottom #bottom-h", {
        y: -90,
    }, "h")
}


gravityAnimate()
var typingEffect = new Typed(".multiText", {
    strings: ["student", "developer", "football fan", "keyboard enthusiast"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1800,
    startDelay: 2400
})


const allcontainer = gsap.utils.toArray(".container-item");
const venueImageWrap = document.querySelector(".container-img-wrap");
const venueImage = document.querySelector(".container-img");

function initcontainer() {
    allcontainer.forEach((link) => {
        link.addEventListener("mouseenter", venueHover);
        link.addEventListener("mouseleave", venueHover);
        link.addEventListener("mousemove", moveVenueImage);
    });
}

function moveVenueImage(e) {
    let xpos = e.clientX;
    let ypos = e.clientY;
    const tl = gsap.timeline();
    tl.to(venueImageWrap, {
        x: xpos,
        y: ypos,
    });
}

function venueHover(e) {
    if (e.type === "mouseenter") {
        const targetImage = e.target.dataset.img;

        const tl = gsap.timeline();
        tl.set(venueImage, {
            backgroundImage: `url(${targetImage})`,
        }).to(venueImageWrap, {
            duration: 0.5,
            autoAlpha: 1,
        });
    } else if (e.type === "mouseleave") {
        const tl = gsap.timeline();
        tl.to(venueImageWrap, {
            duration: 0.5,
            autoAlpha: 0,
        });
    }
}

function init() {
    initcontainer();
}

window.addEventListener("load", function () {
    init();
});

tl = new TimelineMax();

tl.from(
    ".firstGreet",
    1.6,
    {
        opacity: 0,
        y: 120,
        ease: Expo.easeInOut
    },
    0.2
);

tl.from(".navbar > div",
    1,
    {
        opacity: 0,
        y: 60,
        ease: Expo.easeInOut,
    },
    2
);

tl.from(
    ".site-logo",
    1,
    {
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut,
    },
    "-=0.8"
);

tl.staggerFrom(
    ".site-menu > div",
    1,
    {
        opacity: 0,
        y: 60,
        ease: Power2.easeOut,
    },
    0.2
);

tl.staggerFrom(
    ".header > div",
    1,
    {
        opacity: 0,
        y: 60,
        ease: Power2.easeOut,
        delay: -1.4,
    },
    0.2
);

tl.staggerFrom(
    ".nav > a",
    1,
    {
        opacity: 0,
        y: 60,
        ease: Expo.easeInOut,
        delay: -1.6
    },
    0.2
)

tl.from(
    ".secondGreet",
    1.2,
    {
        opacity: 0,
        y: 0,
        ease: Expo.easeInOut
    }
);

tl.from(
    ".football",
    1.2,
    {
        opacity: 0,
        y: 0,
        ease: Expo.easeInOut
    }
)

tl.from(
    ".keyboard",
    1.2,
    {
        opacity: 0,
        y: 0,
        ease: Expo.easeInOut
    }
)

tl.from(
    ".container-items",
    1.2,
    {
        opacity: 0,
        y: 0,
        ease: Expo.easeInOut
    }
)
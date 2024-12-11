import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './OurCourse.css'; // Import the CSS file

gsap.registerPlugin(ScrollTrigger);

const OurCourse = () => {
    const wrapperRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;
        const header = headerRef.current;

        const animation = gsap.timeline();

        cards.forEach((card, index) => {
            if (index > 0) {
                gsap.set(card, { y: index * 200 });
                animation.to(card, { y: 0, duration: index * 0.5, ease: "none" }, 0);
            }
        });

        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            pin: true,
            end: `+=${cards.length * 200 + header.offsetHeight}`,
            scrub: true,
            animation: animation,
            markers: true,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div>
            <div ref={headerRef} className="header">
            </div>
            <div ref={wrapperRef} className="wrapper">
                <div className="cards pt-44">
                    {["stacking", "cards", "for", "you", "to", "explore", "and", "use"].map((text, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="card space-y-3"
                        >
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurCourse;

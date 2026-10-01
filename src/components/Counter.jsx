import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);
    // Ref guard so the observer callback never triggers more than once
    const startedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !startedRef.current) {
                startedRef.current = true;
                setHasStarted(true);
                observer.disconnect(); // stop observing after first trigger
            }
        }, { threshold: 0.1 });

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []); // empty deps — observer is created once

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        let rafId;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function: easeOutQuart
            const easedPercentage = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(easedPercentage * target));

            if (progress < duration) {
                rafId = requestAnimationFrame(animate);
            } else {
                setCount(target); // Ensure it lands exactly on target
            }
        };

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [hasStarted, target, duration]);

    return <span ref={countRef} className={count === 0 && !hasStarted ? 'hidden-stat' : ''}>{count}{suffix}</span>;
};

export default Counter;

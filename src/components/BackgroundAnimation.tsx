import { motion } from "framer-motion";

/**
 * Floating particles / orbs that drift across the entire portfolio background.
 * Pure CSS + Framer Motion — no canvas overhead.
 */
const particles = [
    { size: 4, x: "10%", y: "20%", duration: 18, delay: 0, color: "rgba(145, 94, 255, 0.35)" },
    { size: 6, x: "85%", y: "15%", duration: 22, delay: 2, color: "rgba(0, 206, 168, 0.25)" },
    { size: 3, x: "70%", y: "45%", duration: 20, delay: 4, color: "rgba(145, 94, 255, 0.3)" },
    { size: 5, x: "25%", y: "65%", duration: 25, delay: 1, color: "rgba(191, 97, 255, 0.2)" },
    { size: 7, x: "50%", y: "30%", duration: 28, delay: 3, color: "rgba(0, 206, 168, 0.2)" },
    { size: 3, x: "90%", y: "70%", duration: 16, delay: 5, color: "rgba(145, 94, 255, 0.25)" },
    { size: 5, x: "15%", y: "85%", duration: 24, delay: 2, color: "rgba(0, 206, 168, 0.3)" },
    { size: 4, x: "60%", y: "80%", duration: 19, delay: 6, color: "rgba(191, 97, 255, 0.25)" },
    { size: 6, x: "40%", y: "10%", duration: 21, delay: 1, color: "rgba(145, 94, 255, 0.2)" },
    { size: 3, x: "75%", y: "55%", duration: 23, delay: 4, color: "rgba(0, 206, 168, 0.15)" },
    { size: 8, x: "30%", y: "40%", duration: 30, delay: 0, color: "rgba(145, 94, 255, 0.12)" },
    { size: 4, x: "95%", y: "35%", duration: 17, delay: 7, color: "rgba(191, 97, 255, 0.2)" },
];

const BackgroundAnimation = () => {
    return (
        <div className="background-animation-container">
            {/* Floating orbs */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="floating-particle"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.x,
                        top: p.y,
                        background: p.color,
                        boxShadow: `0 0 ${p.size * 4}px ${p.color}, 0 0 ${p.size * 8}px ${p.color}`,
                    }}
                    animate={{
                        y: [0, -40, 20, -60, 0],
                        x: [0, 30, -20, 40, 0],
                        scale: [1, 1.3, 0.8, 1.2, 1],
                        opacity: [0.6, 1, 0.4, 0.9, 0.6],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Gradient mesh blobs */}
            <div className="gradient-blob blob-1" />
            <div className="gradient-blob blob-2" />
            <div className="gradient-blob blob-3" />

            {/* Scan line overlay for sci-fi feel */}
            <div className="scan-lines" />
        </div>
    );
};

export default BackgroundAnimation;

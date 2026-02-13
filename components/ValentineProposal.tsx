"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function ValentineProposal() {
    const [isAccepted, setIsAccepted] = useState(false);
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
    const [noCount, setNoCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    // Personalized names
    const yourName = "Chicken Rice";
    const recipientName = "Mine";

    const handleYes = () => {
        setIsAccepted(true);
        
        // Multi-stage confetti celebration
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ["#ff1744", "#ff69b4", "#ffffff", "#ffb3d9"],
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ["#ff1744", "#ff69b4", "#ffffff", "#ffb3d9"],
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();

        // Show special message after delay
        setTimeout(() => {
            setShowMessage(true);
        }, 1000);
    };

    const handleNoHover = () => {
        const isMobile = window.innerWidth < 640;
        const range = isMobile ? 60 : 100;
        const newX = (Math.random() - 0.5) * range * 2;
        const newY = (Math.random() - 0.5) * range * 2;
        setNoButtonPos({ x: newX, y: newY });
        setNoCount(prev => prev + 1);
    };

    const noPhrases = [
        "No",
        "Are you sure?",
        "Really?",
        "Think again!",
        "Last chance!",
        "Pretty please? 🥺",
        "Reconsider?",
        "You're breaking my heart!",
        "Change your mind?",
        "Don't do this to me!",
        "I'm gonna cry 😢",
        "Please please please!",
        "One more chance?",
        "I love you! 💕",
        "You're my world! 🌍",
    ];

    // Floating hearts animation
    const FloatingHeart = ({ delay = 0 }) => (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
                opacity: [0, 1, 1, 0],
                y: [-20, -100],
                x: [0, Math.random() * 40 - 20],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                delay,
                ease: "easeOut"
            }}
            className="absolute text-2xl pointer-events-none"
            style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
            }}
        >
            ❤️
        </motion.div>
    );

    return (
        <div className="relative min-h-screen min-h-[100dvh] w-full flex items-center justify-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-pink-50 via-red-50 to-pink-100 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-10 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-10 right-10 w-40 h-40 bg-red-200/20 rounded-full blur-3xl"
                />
            </div>

            <AnimatePresence mode="wait">
                {!isAccepted ? (
                    <motion.div
                        key="proposal"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative w-full max-w-[95vw] sm:max-w-md z-10"
                    >
                        {/* Floating hearts appear after some "No" clicks */}
                        {noCount > 3 && (
                            <>
                                <FloatingHeart delay={0} />
                                <FloatingHeart delay={0.5} />
                                <FloatingHeart delay={1} />
                            </>
                        )}

                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 border border-pink-100">
                            {/* Animated Heart Icon */}
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                className="flex justify-center mb-4 sm:mb-6"
                            >
                                <motion.div
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        rotate: [0, -5, 5, -5, 0]
                                    }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="text-5xl sm:text-6xl md:text-7xl filter drop-shadow-lg"
                                >
                                    💕
                                </motion.div>
                            </motion.div>

                            {/* Profile Image with Pulse Effect */}
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 relative"
                            >
                                <motion.div 
                                    animate={{ 
                                        scale: [1, 1.1, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-gradient-to-br from-pink-300 to-red-300 rounded-full blur-2xl"
                                />
                                <img
                                    src="/Logo-2.jpeg"
                                    alt="Profile"
                                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl ring-4 ring-pink-100"
                                />
                            </motion.div>

                            {/* Text Content with Gradient */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-center mb-6 sm:mb-8 px-2"
                            >
                                <motion.p 
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-gray-600 text-sm sm:text-base mb-2"
                                >
                                    Hey <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">{recipientName}</span>! 💌
                                </motion.p>
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight px-1">
                                    Will you be my Valentine?
                                </h1>
                                <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                                    You make every day special ✨
                                </p>
                                
                                {/* Encouragement message after multiple "No" clicks */}
                                {noCount > 5 && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs sm:text-sm mt-2 font-medium"
                                    >
                                        Come on, you know you want to say yes! 😊
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Buttons with Dynamic Sizing */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center relative min-h-[120px] sm:min-h-[70px]"
                            >
                                {/* Yes Button - Fixed Normal Size */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleYes}
                                    className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-base sm:text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 touch-manipulation overflow-hidden group"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                    <span className="relative flex items-center justify-center gap-2">
                                        Yes! 💕
                                    </span>
                                </motion.button>

                                {/* No Button - Moves away on hover and shrinks */}
                                <motion.button
                                    animate={{ 
                                        x: noButtonPos.x, 
                                        y: noButtonPos.y,
                                        scale: Math.max(0.7, 1 - noCount * 0.05) // Shrinks with each hover
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    onMouseEnter={handleNoHover}
                                    onTouchStart={(e) => {
                                        e.preventDefault();
                                        handleNoHover();
                                    }}
                                    whileHover={{ scale: Math.max(0.65, 0.95 - noCount * 0.05) }}
                                    className="w-full sm:w-auto px-5 sm:px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 text-sm sm:text-base font-semibold rounded-full hover:from-gray-300 hover:to-gray-400 transition-all touch-manipulation select-none shadow-md"
                                >
                                    <span className="truncate block">
                                        {noPhrases[Math.min(noCount, noPhrases.length - 1)]}
                                    </span>
                                </motion.button>
                            </motion.div>

                            {/* Attempt Counter (appears after 3 attempts) */}
                            {noCount > 2 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mt-4 text-center"
                                >
                                    <p className="text-xs text-gray-400">
                                        Attempts to say no: <span className="font-bold text-red-400">{noCount}</span>
                                    </p>
                                </motion.div>
                            )}

                            {/* Footer */}
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-center text-xs sm:text-sm text-gray-400 mt-5 sm:mt-6"
                            >
                                From {yourName} with love ❤️
                            </motion.p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="accepted"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-full max-w-[95vw] sm:max-w-md z-10"
                    >
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 text-center border border-pink-100">
                            {/* Success Image with Celebration Ring */}
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 relative"
                            >
                                <motion.div 
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 360],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{ 
                                        duration: 3, 
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute inset-0 bg-gradient-to-br from-pink-300 via-red-300 to-pink-300 rounded-full blur-2xl"
                                />
                                <img
                                    src="/Logo-1.jpeg"
                                    alt="Success"
                                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl ring-4 ring-pink-200"
                                />
                                {/* Celebration particles */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 pointer-events-none"
                                >
                                    {[...Array(8)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            className="absolute text-xl"
                                            style={{
                                                top: '50%',
                                                left: '50%',
                                                transform: `rotate(${i * 45}deg) translateY(-60px)`,
                                            }}
                                            animate={{ scale: [1, 1.3, 1] }}
                                            transition={{ 
                                                duration: 1.5, 
                                                repeat: Infinity,
                                                delay: i * 0.1
                                            }}
                                        >
                                            {['💖', '💕', '💝', '❤️', '💗', '💓', '💘', '💞'][i]}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Success Message with Animations */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="px-2"
                            >
                                <motion.h1 
                                    animate={{ 
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-500 mb-3 sm:mb-4"
                                >
                                    Yay! 🎉
                                </motion.h1>
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-2">
                                    I knew you'd say yes!
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
                                    {yourName} loves you so much! 💕
                                </p>
                                
                                {/* Quote Box with Enhanced Design */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="relative bg-gradient-to-br from-pink-50 via-white to-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-pink-200 shadow-inner"
                                >
                                    <div className="absolute top-2 left-2 text-pink-300 text-3xl opacity-50">"</div>
                                    <div className="absolute bottom-2 right-2 text-pink-300 text-3xl opacity-50">"</div>
                                    <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed font-medium">
                                        You are my today and all of my tomorrows
                                    </p>
                                </motion.div>

                                {/* Additional Love Message */}
                                <AnimatePresence>
                                    {showMessage && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            className="mt-5 sm:mt-6 p-4 bg-red-50 rounded-xl border border-red-200"
                                        >
                                            <p className="text-sm text-gray-700">
                                                Thank you for making me the happiest person! 
                                                <br/>
                                                <span className="text-red-500 font-semibold">Happy Valentine's Day! 💝</span>
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Animated Hearts Row */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center gap-2 sm:gap-3 text-2xl sm:text-3xl mt-5 sm:mt-6"
                                >
                                    {['💖', '💕', '💝', '❤️', '💗'].map((heart, i) => (
                                        <motion.span
                                            key={i}
                                            animate={{ 
                                                scale: [1, 1.3, 1],
                                                rotate: [0, 10, -10, 0]
                                            }}
                                            transition={{ 
                                                duration: 1.5, 
                                                repeat: Infinity,
                                                delay: i * 0.15
                                            }}
                                        >
                                            {heart}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
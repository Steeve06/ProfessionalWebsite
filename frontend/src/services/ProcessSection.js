import React from 'react';
import { FaSearch, FaCogs, FaChartLine, FaCode } from 'react-icons/fa';

export const PROCESS_STEPS = [
    {
        id: 1,
        title: "Discovery",
        text: "We analyze your business needs, challenges, and goals to create a tailored strategy..",
        icon: <FaSearch />,
        color: "#1e3a8a"
    },
    {
        id: 2,
        title: "Strategy",
        text: "We design a comprehensive solution roadmap aligned with your objectives.",
        icon: <FaCogs />,
        color: "#581c87"
    },
    {
        id: 3,
        title: "Implementation",
        text: "We execute the planned solution with precision, ensuring quality at every step of development.",
        icon: <FaCode />,
        color: "#831843"
    },
    {
        id: 4,
        title: "Optimization",
        text: "Continuous monitoring and improvement to maximize performance and ROI.",
        icon: <FaChartLine />,
        color: "#765964"
    }
];
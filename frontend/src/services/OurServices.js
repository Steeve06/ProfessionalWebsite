// services are used to store data or information that can be used across the app
import { FaCloud, FaCode, FaChartLine, FaDatabase } from "react-icons/fa";
import { FaMicrochip, FaShield } from "react-icons/fa6";
import cpu from "../assets/AI-Automation.jpg";
import dev from "../assets/Dev.jpg";
import cybersecurity from "../assets/CyberSecurity.jpg";
import data_analytics from "../assets/DataAnalysis.jpg";
import infrastructure from "../assets/Infrastructure.jpg";
import cloudSolutions from "../assets/cloudSolutions.jpg";

export const OUR_SERVICES = [
    {
        id: 1,
        title: "AI & Automation",
        description: "Leverage artificial intelligence and intelligent automation to streamline operations and drive innovation.",
        features: [
            " Machine Learning  Solutions",
            " Process Automation",
            " AI strategy and Consulting",
        ],
        icon: <FaMicrochip />,
        imageUrl: cpu,
        color: "#4A90E2",
    },

    {
        id: 2,
        title: "Cloud Solutions",
        description: "Transform your infrastructure with scalable, secure cloud solutions tailored to your business needs.",
        features: [
            " Cloud Migration Services",
            " AWS, Azure, and Google Cloud Management",
            " Cloud Security and Compliance",
        ],
        icon: <FaCloud />,
        imageUrl: cloudSolutions,
        color: "#b043a4",
    },

    {
        id: 3,
        title: "Cybersecurity Solutions",
        description: "Robust cybersecurity solutions to protect your digital assets and ensure business continuity.",
        features: [
            " Threat Detection and Response",
            " Security Assessment and Auditing",
            " Compliance Management",
        ],
        icon: <FaShield />,
        imageUrl:cybersecurity,
        color: "#d24b3a",
    },

    {
        id: 4,
        title: "Data Analytics",
        description: "Unlock insights from your data with advanced analytics, BI tools, and data visualization solutions.",
        features: [
            " Data Warehousing",
            " Predictive Analytics",
            " Real-time Data Processing",
        ],
        icon: <FaChartLine />,
        imageUrl: data_analytics,
        color: "#27ae60",
        },

    {
        id: 5,
        title: "Custom Software Development",
        description: "Expert IT consulting and strategy services to help you align technology with your business goals.",
        features: [
            " Web & Mobile Application Development",
            " API Development and Integration",
            " Maintenance and Support",
        ],
        icon: <FaCode />,
        imageUrl: dev,
        color: "#e65322",
    },

    {
        id: 6,
        title: "Infrastructure & Digital Management",
        description: "Comprehensive digital transformation services to help you stay competitive in the digital age.",
        features: [
            " IT Infrastructure Management",
            " Digital Transformation Consulting",
            " IT Strategy and Roadmap Development",
        ],
        icon: <FaDatabase />,
        imageUrl: infrastructure,
        color: "#eb2828",
    }

];


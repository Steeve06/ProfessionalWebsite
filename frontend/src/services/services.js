// services are used to store data or information that can be used across the app
import { FaCloud, FaCode, FaDigitalTachograph, FaHandshake } from "react-icons/fa";
import { FaBrain, FaLock } from "react-icons/fa6";

export const SERVICES_DATA = [
    {
        id: 1,
        title: "Custom Software Development",
        description: "Tailored software solutions designed to meet your unique business needs and drive growth.",
        icon: <FaCode />,
        imageUrl: "https://thumbs.dreamstime.com/b/hand-highlighting-software-development-tag-cloud-clear-glass-isolated-word-85993226.jpg"
    },

    {
        id: 2,
        title: "Cloud Infrastructure Management",
        description: "Comprehensive cloud infrastructure management services to optimize performance, security, and scalability.",
        icon: <FaCloud />,
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/006/725/626/small/connect-to-cloud-computing-technology-to-share-secured-file-and-communicate-with-team-while-working-remotely-upload-and-download-files-concept-businessman-connect-network-line-with-cloud-computing-vector.jpg"
    },

    {
        id: 3,
        title: "Cybersecurity Solutions",
        description: "Robust cybersecurity solutions to protect your digital assets and ensure business continuity.",
        icon: <FaLock />,
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/004/954/312/small/cyber-security-with-flat-design-free-vector.jpg"
    },

    {
        id: 4,
        title: "Data Analytics and Business Intelligence",
        description: "Data analytics and business intelligence services to help you make informed decisions and drive growth.",
        icon: <FaBrain />,
        },

    {
        id: 5,
        title: "IT Consulting and Strategy",
        description: "Expert IT consulting and strategy services to help you align technology with your business goals.",
        icon: <FaHandshake />,
},

    {
        id: 6,
        title: "Digital Transformation Services",
        description: "Comprehensive digital transformation services to help you stay competitive in the digital age.",
        icon: <FaDigitalTachograph />,
    }

];


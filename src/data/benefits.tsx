import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        // title: "Smart Budgeting",
        title: "Tax",

        description: "worry-free reporting & smart tax planning",
        bullets: [
            {
                title: "Worry-free tax reporting",
                description: "",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Smart tax planning and strategies",
                description: "",
                icon: <FiTarget size={26} />
            },
            {
                title: "Ensure compliance and maximize deductions",
                description: "",
                icon: <FiTrendingUp size={26} />
            }
        ],
        // imageSrc: "/images/mockup-1.webp"
        imageSrc: "/images/i1.png"

    },
    {
        // title: "Seamless Investing",
        title: "Accounting",

        
        description: "clear, reliable financial records.",
        bullets: [
            {
                title: "Accurate bookkeeping and reports",
                description: "",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Clear, reliable financial records",
                description: "",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Cash flow and expense tracking",
                description: "",
                icon: <FiPieChart size={26} />
            }
        ],
        // imageSrc: "/images/mockup-2.webp"
        imageSrc: "/images/i2.png"

    },
    {
        // title: "Bank-Grade Security",
        title: "Management",

        description: "strategies to help your business grow.",
        bullets: [
            {
                title: "Business growth strategies",
                description: "",
                icon: <FiLock size={26} />
            },
            {
                title: "Operational efficiency solutions",
                description: "",
                icon: <FiUser size={26} />
            },
            {
                title: "Risk management and security",
                description: "",
                icon: <FiShield size={26} />
            }
        ],
        // imageSrc: "/images/mockup-1.webp"
        imageSrc: "/images/i3.png"

    },
]
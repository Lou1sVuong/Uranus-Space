import { useState } from 'react'
import { motion } from 'framer-motion'

function Faq() {
    const [activeQuestion, setActiveQuestion] = useState(null)
    const faqData = [
        {
            id: 1,
            question: 'What are the advantages of Uranus Space?',
            answers: [
                '1. User-Friendly Interface : Designing a user-friendly interface that provides clear information about projects and structured financial products.',
                '2. Technical Evaluation Support: Talented developer community assesses and assists in identifying technical vulnerabilities to aid project development.',
                '3. Flexible in Communication: Designed to be an interactive platform for investors like Key Opinion Leaders (KOLs) and agencies, enabling them to become strategic investors in the projects media field.',
                '4. Early Support for Quality Project: Investors gain early access to projects from the initial stages to maximize profits and support project development.',
            ],
        },
        {
            id: 2,
            question: 'Why Solana ?',
            answers: [
                '1. Transaction Speed and Processing: Solana is renowned for its ability to process thousands of transactions per second, with very fast transaction confirmation times. This ensures that transactions during the IDO process can be efficiently and swiftly executed, creating a better user experience.',
                '2.  Low Fees: Solana typically has lower transaction fees compared to other platforms like Ethereum. This is particularly significant for IDOs, where minimizing transaction costs can be crucial to ensure that more people can participate without bearing a heavy financial burden.',
                '3. Community Development: Solana has attracted a large community of users and projects developing on its platform. Utilizing Solana for an IDO can help the project tap into a vibrant and passionate community, creating favorable conditions for community engagement and support.',
                '4. Scalability Potential: Solana is designed for scalability, with the ability to process a large volume of transactions without compromising performance. This can be highly beneficial as an IDO grows and attracts a significant user base, especially in the early stages of the project.',
            ],
        },
    ]

    return (
        <section id="FAQ" className="px-40 py-32">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto text-primary">
                {faqData.map((item) => (
                    <div
                        key={item.id}
                        className="mb-4 rounded-lg bg-bgsecondary hover:opacity-95"
                    >
                        <button
                            className="flex justify-between items-center w-full py-4 px-6 focus:outline-none"
                            onClick={() =>
                                setActiveQuestion(
                                    item.id === activeQuestion ? null : item.id
                                )
                            }
                        >
                            <h3 className="text-lg font-semibold">
                                {item.question}
                            </h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className={`h-6 w-6 transition-transform transform ${
                                    item.id === activeQuestion
                                        ? '-rotate-180'
                                        : ''
                                }`}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.7-.29l-3-3a1 1 0 111.41-1.42L10 9.58l2.29-2.29a1 1 0 111.41 1.42l-3 3a1 1 0 01-.7.29z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {activeQuestion === item.id && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="px-6 py-4">
                                    {item.answers.map((answer, index) => (
                                        <p
                                            key={index}
                                            className="text-base font-normal text-captiontext mt-5"
                                        >
                                            {answer}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faq

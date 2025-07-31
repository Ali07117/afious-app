'use client';
// import React, { useState } from 'react';
import React, { useState, useEffect, useRef } from 'react';
const beforeSignupFaq = [
    {
        question: "What is Afious?",
        answer: "Afious is a social connection app that helps international students meet others who share their language, interests, or hometown — so they feel at home, faster.",
    },
    {
        question: "Is Afious only for international students?",
        answer: "Yes — Afious is designed specifically for international students navigating life in a new country.",
    },
    {
        question: "Is the app free to use?",
        answer: "Yes, Afious is completely free to download and use.",
    },
    {
        question: "What makes Afious different from WhatsApp or Facebook groups?",
        answer: "With Afious, you don’t need to join random group chats. You can filter by school, hometown, and interests to connect directly with students you actually relate to.",
    },
    {
        question: "Which countries or campuses is Afious available in?",
        answer: "Afious is currently available to international students at select universities in the U.S., U.K., India, and China — with more launching soon. (Let me know if this needs to be updated.)",
    },
    {
        question: "What kind of people will I find on Afious?",
        answer: "You'll find other international students — some from your home country, some with your same interests, and many who are also new and looking to connect.",
    },
];

const afterSignupFaq = [
    {
        question: "How do I connect with people?",
        answer: "You can use filters to find students by college, interests, and hometown — then simply start a chat and say hi.",
    },
    {
        question: "Are there group chats?",
        answer: "Right now, you can start 1-on-1 conversations. Group chats are coming soon!",
    },
    {
        question: "How do you match people?",
        answer: "Afious matches are based on the profile details you provide — like interests, location, and language preferences.",
    },
    {
        question: "Can I change my filters or profile info later?",
        answer: "Yes! You can update your filters, interests, and profile at any time from the settings menu.",
    },
    {
        question: "Is my information private?",
        answer: "Absolutely. You control what information you share and who can see your profile. Your data is never sold or shared.",
    },
    {
        question: "What if I have an issue or see something inappropriate?",
        answer: "You can report any issues or flag inappropriate behavior directly through the app, and our team will review it promptly.",
    },
    {
        question: "Can I delete my account?",
        answer: "Yes. If you ever decide to leave Afious, you can delete your account from your settings.",
    },
];

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
    const lastScrollY = useRef(0);
    const scrollUpDistance = useRef(0);
    const timeoutRef = useRef(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        scrollUpDistance.current = 0; // reset on toggle
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = lastScrollY.current - currentScrollY;

            if (scrollDifference > 0 && openIndex !== null) {
                // User is scrolling up
                scrollUpDistance.current += scrollDifference;

                // If scrolled up more than 20% of screen height
                if (scrollUpDistance.current > window.innerHeight * 1) {
                    // Smooth delay before closing
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = setTimeout(() => {
                        setOpenIndex(null);
                        scrollUpDistance.current = 0; // reset after closing
                    }, 300); // 300ms delay
                }
            } else {
                // Reset if scrolling down
                scrollUpDistance.current = 0;
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutRef.current);
        };
    }, [openIndex]);

    return (
        <div id="faqs" className='w-[100%] bg-[] faq-container pt-[]  faq-padding-container mt-[50vh]'>
            <h2 className='px-[100px] py-[100px] faq-heading text-[#A6A6A6] font-[800] font-[Inter] text-[70px] leading-[98%]'>
                Frequently Asked Questions
            </h2>

            {/* <p className="px-[100px] before-signing underline mb-[20px] faq-heading-padding mt-[60px] underline-offset-[8px] text-[32px] font-[500] font-[Inter] text-[#000000]">
                Before Signing Up
            </p> */}

            {beforeSignupFaq.map((item, index) => (
                <div
                    key={index}
                    className='mx-[30px] faq-div px-[70px] border-b border-b-[#B6BDC6] border-b-[1px] py-[18px]'
                >
                    <div
                        className={`question font-[Inter] hover:text-[#000] font-[800] duration-300 text-[32px] leading-[98%] cursor-pointer ${openIndex === index ? 'text-[#000]' : 'text-[#A6A6A6]'
                            }`}
                        onClick={() => toggle(index)}
                    >
                        {item.question}
                    </div>
                    {openIndex === index && (
                        <p className='answer mt-[10px] text-[24px] font-[Inter]'>
                            {item.answer}
                        </p>
                    )}
                </div>
            ))}

            {/* <p className="px-[100px] after-signing faq-heading-padding underline mb-[20px] mt-[60px] after-signing-up underline-offset-[8px] text-[32px] font-[500] font-[Inter] text-[#000000]">
                After Signing Up
            </p> */}

            {afterSignupFaq.map((item, index) => (
                <div
                    key={index + beforeSignupFaq.length} // prevent key clash
                    className='mx-[30px] faq-div px-[70px] border-b border-b-[#B6BDC6] border-b-[1px] py-[18px]'
                >
                    <div
                        className={`question font-[Inter] font-[800] hover:text-[#000] text-[32px] duration-300 leading-[98%] cursor-pointer ${openIndex === index + beforeSignupFaq.length ? 'text-[#000]' : 'text-[#A6A6A6]'
                            }`}
                        onClick={() => toggle(index + beforeSignupFaq.length)}
                    >
                        {item.question}
                    </div>
                    {openIndex === index + beforeSignupFaq.length && (
                        <p className='answer mt-[10px] text-[24px] font-[Inter]'>
                            {item.answer}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Faq;

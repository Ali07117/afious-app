'use client';
import React, { useState } from 'react';

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

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='w-[100%] bg-[] mt-[150px]'>
            <h2 className='px-[100px] text-[#A6A6A6] font-[800] font-[Inter] text-[70px] leading-[98%]'>
                Frequently Asked Questions
            </h2>

            <p className="px-[100px] underline mb-[20px] mt-[60px] underline-offset-[8px] text-[32px] font-[500] font-[Inter] text-[#000000]">
                Before Signing Up
            </p>

            {beforeSignupFaq.map((item, index) => (
                <div
                    key={index}
                    className='mx-[30px] px-[70px] border-b border-b-[#B6BDC6] border-b-[1px] py-[18px]'
                >
                    <div
                        className={`question font-[Inter] font-[800] text-[32px] leading-[98%] cursor-pointer ${openIndex === index ? 'text-[#2D404F]' : 'text-[#A6A6A6]'
                            }`}
                        onClick={() => toggle(index)}
                    >
                        {item.question}
                    </div>
                    {openIndex === index && (
                        <p className='answer mt-[10px] text-[18px] font-[Inter]'>
                            {item.answer}
                        </p>
                    )}
                </div>
            ))}

            <p className="px-[100px] underline mb-[20px] mt-[60px] underline-offset-[8px] text-[32px] font-[500] font-[Inter] text-[#000000]">
                After Signing Up
            </p>

            {afterSignupFaq.map((item, index) => (
                <div
                    key={index + beforeSignupFaq.length} // prevent key clash
                    className='mx-[30px] px-[70px] border-b border-b-[#B6BDC6] border-b-[1px] py-[18px]'
                >
                    <div
                        className={`question font-[Inter] font-[800] text-[32px] leading-[98%] cursor-pointer ${openIndex === index + beforeSignupFaq.length ? 'text-[#2D404F]' : 'text-[#A6A6A6]'
                            }`}
                        onClick={() => toggle(index + beforeSignupFaq.length)}
                    >
                        {item.question}
                    </div>
                    {openIndex === index + beforeSignupFaq.length && (
                        <p className='answer mt-[10px] text-[18px] font-[Inter]'>
                            {item.answer}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Faq;

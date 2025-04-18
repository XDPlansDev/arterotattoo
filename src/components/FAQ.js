//Here's a cool example of how React props work :D 

import React, { useState } from 'react';

const FAQ = () => {
    return (
        <section className="faq-page">

        <div className="secondary-banner">
            <img src="./Tattoo-Parlor/images/FAQs/background.jpg" alt=""/>
            <div className="paper-gradient"></div>
        </div>

        <div className="faq-section padding-inline">
            <picture>
                <source media="(max-width: 500px)" srcset="./Tattoo-Parlor/images/Piercings/mobile.png"/>
                <img  className="faq-section1-background" src="./Tattoo-Parlor/images/Piercings/piercings-price-background.png" alt=""/>
            </picture>

            <h1 className="faq-title">FREQUENTLY ASKED<br/>
                <span>
                    <img src="./Tattoo-Parlor/images/FAQs/title-left.png" alt=""/>
                    QUESTIONS
                    <img src="./Tattoo-Parlor/images/FAQs/title-right.png" alt=""/>
                </span>
            </h1>

            <img className="faq-flower" src="./Tattoo-Parlor/images/FAQs/flower.png" alt=""/>
            <img className="faq-bird" src="./Tattoo-Parlor/images/FAQs/bird.png" alt=""/>

            <ul className="faq-list FAQList">
                <FAQitem question={"I haven't heard from my artist since I booked...should I still show up?"} answer={"Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?"} /> 
                <FAQitem question={"Are Tattoos Safe?"} answer={"Yes, as long as you go to a reputable tattoo artist that is following all recommended safety precautions. Make sure you’re completely honest with your tattoo artist regarding any medical condition you may have or if prone to fainting. We always recommend getting a good night sleep, having a full meal and some sugar before getting a tattoo to alleviate dizziness, nausea, and to increase your pain tolerance. Getting a tattoo with a low blood sugar level is not ideal."}/> 
                <FAQitem question={"Do Tattoos Hurt?"} answer={"Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?"} /> 
                <FAQitem question={"Can I bring a friend/family member for moral support?"} answer={"Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?"} /> 
                <FAQitem question={"How do I take care of my tattoo afterwards?"} answer={"Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?"} /> 
                <FAQitem question={"My ink still hasn't healed...what gives?"} answer={"Et possimus autem sed beatae voluptatem et temporibus commodi aut fugit similique. Aut quia nihil et velit commodi aut sint nostrum quo dignissimos praesentium et ullam harum hic molestiae possimus. Nam voluptatem modi et autem laborum aut laudantium molestias ea nihil cumque?"} /> 
            </ul>
        </div>
    </section>
    );
}

const FAQitem = (props) => {

    const [open, setOpen] = useState(false); 

    return (
        <>
            <li className="faq-question FAQEntry"  id="" title="" onClick={() => {setOpen(!open)}}>
                <h2 className="js-FAQH FAQEntry__heading">
                    <span className={`faq-plus ${open? 'plus-active' : 'plus-inactive'}`}></span><span className="faq-spacer"></span>
                    {props.question}
                </h2>

                    <div className={`FAQEntry__bodyPos group ${open? 'active' : 'inactive'}`}>
                        {props.answer}
                    </div>
            </li>
        </>
    );
}

export default FAQ; 
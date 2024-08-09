
import React from 'react';
import Accordion from './Accordion';


const Frequentlyaked = () => {
    return (
        <div className='min-h-screen mb-5'>
            <div className='max-w-5xl mx-10'>
                <div className='p-4 bg-slate-400 rounded-lg'>
                    <Accordion
                    title="How are your home cleaning rates set?"
                    answer="The cost of your cleaning services isn't something you want to leave to fate. Do they charge by the hour? By the project? Based on how many employees they send for the job? There are a lot of ways cleaning services can be priced and you need to know what you can expect to pay."
                    />
                       <Accordion
                    title="What services are included?"
                    answer="Once again, included services are as variable as your individual needs and will be priced accordingly. If you are booking a recurring Omaha home cleaning, you should know what is included in that time spent in your home."
                    />
                       <Accordion
                    title="Are all cleaning equipment and supplies provided?"
                    answer="Ask what is provided and what isn’t. Do they use your vacuum, or bring their own? What about cleaning solutions and rags?"
                    />
                       <Accordion
                    title="Do I have to be here when you clean?"
                    answer="Most cleaning services do not require you to be home when they arrive, but they will need to know how you’d like them to gain entry into your home. As for Grace Home Cleaning of Omaha, we ask that you are present in your home or property during the cleaning."
                    />
                       <Accordion
                    title="I have pets. What about them?"
                    answer="At Grace Home Cleaning, we love your pets. But sometimes, they don’t love us. Fearful pets or those that might cause injury to cleaning crews are typically put into a specific area of the home for their safety and the safety of the cleaning professional during a visit. Always ask this question if you have pets in your home."
                    />
                      

                </div>
            </div>
            
        </div>
    );
};

export default Frequentlyaked;
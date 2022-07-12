import React from 'react';
import OptionUnit from "./OptionUnit";

type quizProps = {
    question: string
    options: {
        opt1: { name: string, correct: boolean },
        opt2: { name: string, correct: boolean },
        opt3: { name: string, correct: boolean },
        opt4: { name: string, correct: boolean }
    }
    counter: number
    onChange: () => void
}


const QuizzCard = ({question, options, counter, onChange}: quizProps) => {
    return (
        <div className={'bg-blue-500 h-80 w-1/3 rounded-lg flex quizzcard shadow-lg shadow-black'}>
            <section className={'flex flex-col w-1/2'}>
                <h1 className={'m-4 text-2xl'}>Question {`${counter}/4`}</h1>
                <div className={'h-full w-full flex flex-col justify-center items-center mb-12'}>
                    <p className={'block m-4 text-xl h-fit w-fit'}>{question}</p>

                </div>
            </section>
            <div className={'answers flex flex-col justify-evenly items-center ml-3 w-1/2'}>
                <OptionUnit option={options.opt1}
                            onChange={onChange}/>
                <OptionUnit option={options.opt2}
                            onChange={onChange}/>
                <OptionUnit option={options.opt3}
                            onChange={onChange}/>
                <OptionUnit option={options.opt4}
                            onChange={onChange}/>
            </div>
        </div>
    );
};

export default QuizzCard;
import React, {useEffect, useState} from 'react';
import './App.css';
import QuizzCard from "./components/QuizzCard";
import ControlPanel from "./components/ControlPanel";

// interface dataStucture {
//     [
//         q1: {
//             question: string,
//             options: {
//                 opt1: string
//                 opt2: string,
//                 opt3: string,
//                 opt4: string
//             }
//         },
//
//     q2: {
//         question: string,
//         options: {
//             opt1: string
//             opt2: string,
//             opt3: string,
//             opt4: string
//         }
//     },
//     q3: {
//         question: string,
//         options: {
//             opt1: string
//             opt2: string,
//             opt3: string,
//             opt4: string
//         }
//     },
//     q4: {
//         question: string,
//         options: {
//             opt1: string
//             opt2: string,
//             opt3: string,
//             opt4: string
//         }
//     }
//     ]
// }

function App() {
    const data = [
        {
            question: 'What is the capital of France?',
            options: {
                opt1: {name: 'Paris', correct: true},
                opt2: {name: 'Prague', correct: false},
                opt3: {name: 'Vien', correct: false},
                opt4: {name: 'New York', correct: false}
            }
        },
        {
            question: 'What was the first drink in space?',
            options: {
                opt1: {name: 'Sprite', correct: false},
                opt2: {name: 'Fanta', correct: false},
                opt3: {name: 'Coca Cola', correct: true},
                opt4: {name: 'Beer', correct: false}
            }
        }
        ,
        {
            question: 'Which country invented ice cream?',
            options: {
                opt1: {name: 'Portugal', correct: false},
                opt2: {name: 'China', correct: true},
                opt3: {name: 'Russia', correct: false},
                opt4: {name: 'Finland', correct: false}
            }
        },
        {
            question: 'What is the rarest M&M color?',
            options: {
                opt1: {name: 'Purple', correct: false},
                opt2: {name: 'Green', correct: false},
                opt3: {name: 'Yellow', correct: false},
                opt4: {name: 'Brown', correct: true}
            }
        }
    ]

    const [questPosition, setQuestPosition] = useState(0)
    const [activeQuestion, setActiveQuestion] = useState(data[questPosition])

    useEffect(() => {
        setActiveQuestion(data[questPosition])
        console.log(questPosition)
        console.log(data[questPosition])
    }, [questPosition])


    const changeCard = (): void => {
        setQuestPosition(questPosition + 1)
    }

    const onReset = (): void => {
        setQuestPosition(0)
        setActiveQuestion(data[0])
    }

    return (
        <div className="flex flex-col min-h-screen w-screen bg-blue-300 justify-center items-center App">
            {questPosition < 4 ?
                <QuizzCard key={0}
                           question={activeQuestion.question}
                           options={activeQuestion.options}
                           counter={questPosition + 1}
                           onChange={changeCard}/>
                :
                <ControlPanel onReset={onReset}/>
            }
        </div>
    );
}

export default App;

import React, {useRef} from 'react';


interface OptionProps {
    option: { name: string, correct: boolean }
    onChange: () => void
}


const OptionUnit = (props: OptionProps) => {

    const element = useRef(document.createElement('button'))

    async function changeColor(color: string, element: any) {
        return new Promise(resolve => {
            element.current.classList.add(color)
            setTimeout(() => {
                element.current.classList.remove(color)
                resolve(true)
            }, 300)
        })
    }

    async function onOptionClick(name: string) {
        if (props.option.correct) {
            await changeColor('bg-emerald-400', element)
            props.onChange()
        } else {
            await changeColor('bg-red-400', element)
        }
    }

    return (
        <button ref={element}
                onClick={() => onOptionClick(props.option.name)}
                className={'w-4/5 border-2 p-2 rounded-lg'}>
            <p>{props.option.name}</p>
        </button>
    )
}

export default OptionUnit;
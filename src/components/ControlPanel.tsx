import React from 'react';

interface controlPanelProps {
    onReset: () => void
}

const ControlPanel = ({onReset}: controlPanelProps) => {
    return (
        <div className={'bg-blue-500 h-80 w-1/3 rounded-lg flex flex-col items-center justify-evenly shadow-lg shadow-black'}>
            <p className={'p-1 m-4 text-4xl'}>End of the quiz</p>
            <button onClick={() => {
                onReset()
            }}
                    className={'rounded-lg w-1/4 h-12 bg-green-300'}>Reset quiz
            </button>
        </div>
    );
};

export default ControlPanel;
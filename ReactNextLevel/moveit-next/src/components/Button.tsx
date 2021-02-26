import {useState} from 'react'

interface ButtonProps {
    color: string;
}

export function Button(props: ButtonProps){
    const [i, setI] = useState(1)

    function increment(){
        setI(i + 1)
    }

    return(
        <button 
            type='button'
            style={{backgroundColor: props.color}}
            onClick={increment}
            >
            Let's go destroy the <strong>universe</strong><br/>
            <span>How many we will do this?  <strong>{i}</strong></span>
        </button>
    );
} 
import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value );

    const handleAdd = () => {
        setCounter( counter + 1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}

CounterApp.PropTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}
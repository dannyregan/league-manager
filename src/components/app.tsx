import { useState, useEffect } from "react";

import Header from './header'

const App = () => {
    const [counter, setCounter] = useState(0)
    
    // This is called as a side effect to a component rendering...so maybe like if the header component is rendered, fetch data from an API.
    useEffect(() => {
        const intervalID = setInterval(() => {
            setCounter(counter+1)
        }, 1000)

        // allows us to clean up the effect right before it rerenders the component
        return () => {
            clearInterval(intervalID)
        }
    })

    return (
        <div className="container">
            <Header message="League Standings"/>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>
                {counter}
            </button>
        </div>
    )
};

export default App;
import Advice from "./Advice";
import "../style/AdviceContainer.css";
import { useEffect, useState } from "react";

function AdviceContainer() {
    const [adviceID, setAdviceID] = useState();
    const [advice, setAdvice] = useState();
    useEffect(() => {
        newAdvice();
    }, []);

    function newAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then((res) => res.json())
            .then((data) => {
                setAdviceID(data.slip.id);
                setAdvice(data.slip.advice);
            });
    }
    return (
        <div id="adviceContainer">
            <span>ADVICE #{adviceID}</span>
            <Advice advice={advice} />
            <picture>
                <source
                    srcSet="/pattern-divider-mobile.svg"
                    media="(max-width: 800px)"
                />
                <img src="/pattern-divider-desktop.svg" alt="Pattern divider" />
            </picture>
            <div id="btn" onClick={newAdvice}>
                <img src="/icon-dice.svg" alt="Dice icon" />
            </div>
        </div>
    );
}

export default AdviceContainer;

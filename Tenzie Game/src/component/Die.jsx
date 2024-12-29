import { useState, useEffect } from "react";

export default function Die({ value, isHeld, hold }) {
    const [isRolling, setIsRolling] = useState(false);

    useEffect(() => {
       if (!isHeld) {
            setIsRolling(true);
            const timeout = setTimeout(() => setIsRolling(false), 300); 
            return () => clearTimeout(timeout);
        }
    }, [value, isHeld]);

    const styles = { backgroundColor: isHeld ? "#59E391" : "#fff" };

    const renderDots = () => {
        const positions = [
            [],
            [4],
            [0, 8],
            [0, 4, 8],
            [0, 2, 6, 8],
            [0, 2, 4, 6, 8],
            [0, 2, 3, 5, 6, 8],
        ];

        return Array(9)
            .fill(null)
            .map((_, index) => (
                <div
                    key={index}
                    className={`dot ${positions[value].includes(index) ? "" : "hidden"}`}
                ></div>
            ));
    };

    return (
        <div
            className={`die ${isRolling ? "rolling" : ""}`}
            style={styles}
            onClick={hold}
            aria-pressed={isHeld}
            aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
        >
            {renderDots()}
        </div>
    );
}

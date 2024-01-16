import React, { useState } from "react";

const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <span>Hover Me</span>
        </div>
    );
};

const HoverText = () => {
    return (
        <div>
            Hovering right
        </div>
    );
};

const HoverExample = () => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div>
            <HoverableDiv
                handleMouseOver={handleMouseOver}
                handleMouseOut={handleMouseOut}
            />
            {isHovering && <HoverText />}
        </div>
    );
};

export default HoverExample
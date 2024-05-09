import React from 'react';
import "./gradient-text.scss";

interface GradientTextProps {
    text: string;
}

const GradientTextComponent: React.FC<GradientTextProps> = ({ text }) => (
    <h2 className="gradient-text">{text}</h2>
);

export default GradientTextComponent;
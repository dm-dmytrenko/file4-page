import React from 'react';
import '../gradient-box/gradient-box.scss'

interface GradientBoxProps {
    height: string;
}

const GradientBox: React.FC<GradientBoxProps> = ({ height }) => (
    <div className="gradient-background" style={{ height }}></div>
);

export default GradientBox;
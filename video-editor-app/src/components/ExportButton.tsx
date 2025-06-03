import React from 'react';

const ExportButton: React.FC<{ onExport: () => void }> = ({ onExport }) => {
    return (
        <button onClick={onExport} className="export-button">
            Export Video
        </button>
    );
};

export default ExportButton;
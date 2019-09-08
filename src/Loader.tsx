import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="loader" style={{ textAlign: 'center' }}>
      <svg
        style={{ width: '50px', height: '50px', display: 'inline-block' }}
        version="1.1"
        id="L4"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
      >
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
        </circle>
        <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
        </circle>
        <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
        </circle>
      </svg>
    </div>
  );
};

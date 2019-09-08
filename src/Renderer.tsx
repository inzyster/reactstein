import React from 'react';
import { Map } from './Map';

export interface RendererProps {
  cols: number;
  rows: number;
  level: Map;
}

const Renderer: React.FC<RendererProps> = props => {
  return (
    <div className="renderer">
      <div className="ceiling"></div>
      <div className="floor"></div>
      <div className="walls"></div>
    </div>
  );
};

export default Renderer;

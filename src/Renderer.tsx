import React, { useState } from 'react';
import { Map } from './Map';
import Column from './Column';

export interface IRendererProps {
  cols: number;
  rows: number;
  level: Map;
}

interface IColumnData {
  height: number;
  color: string;
}

const Renderer: React.FC<IRendererProps> = props => {
  const [columns, setColumns] = useState(
    Array(props.cols)
      .fill(null)
      .map((_, idx) => {
        return { height: 0, color: 'transparent' } as IColumnData;
      })
  );

  return (
    <div className="renderer">
      <div className="ceiling"></div>
      <div className="floor"></div>
      <div className="walls">
        {columns.map(c => {
          return <Column widthFrac={1 / props.cols} height={c.height} color={c.color} />;
        })}
      </div>
    </div>
  );
};

export default Renderer;

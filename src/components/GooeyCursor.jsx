import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const GooeyCursor = () => {
  const cursorRef = useRef(null);
  const innerRef = useRef(null);
  const [cells, setCells] = useState([]);
  const [winSize, setWinSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cachedCellRef = useRef(null);

  const settings = {
    ttl: 0.2,
    columns: 20, // Default number of columns
  };

  useEffect(() => {
    const updateMousePos = (ev) => {
      setMousePos({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePos);
    window.addEventListener('pointermove', updateMousePos, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      window.removeEventListener('pointermove', updateMousePos);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWinSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      const computedStyle = getComputedStyle(cursorRef.current);
      const columnsValue = parseInt(computedStyle.getPropertyValue('--columns'), 10) || settings.columns;
      const cellSize = winSize.width / columnsValue;
      const rows = Math.ceil(winSize.height / cellSize);
      const cellsTotal = rows * columnsValue;

      if (cellsTotal > 0 && cellsTotal <= 10000) { // Add a reasonable upper limit
        const newCells = Array(cellsTotal).fill(null).map((_, index) => ({
          key: index,
          style: {
            width: `${100 / columnsValue}vw`,
            height: `${100 / columnsValue}vw`,
            opacity: 0,
          },
        }));
        setCells(newCells);
      } else {
        console.error('Invalid number of cells:', cellsTotal);
      }
    }
  }, [winSize]);

  useEffect(() => {
    const handleMove = () => {
      const cell = getCellAtCursor();
      if (cell === null || cachedCellRef.current === cell) return;
      cachedCellRef.current = cell;

      gsap.set(cell, { opacity: 1 });
      gsap.set(cell, { opacity: 0, delay: settings.ttl });
    };

    handleMove();
  }, [mousePos]);

  const getCellAtCursor = () => {
    if (!innerRef.current || cells.length === 0) return null;

    const columns = Math.sqrt(cells.length);
    const cellSize = winSize.width / columns;
    const columnIndex = Math.floor(mousePos.x / cellSize);
    const rowIndex = Math.floor(mousePos.y / cellSize);
    const cellIndex = rowIndex * columns + columnIndex;

    if (cellIndex >= cells.length || cellIndex < 0) {
      return null;
    }

    return innerRef.current.children[cellIndex] || null;
  };

  return (
    <div ref={cursorRef} className="cursor" style={{ '--columns': settings.columns }}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
					<filter id="gooey">
					    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="18" />
					    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
					    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
					</filter>
				</defs>
			</svg>
      <div ref={innerRef} className="cursor__inner">
        {cells.map((cell) => (
          <div key={cell.key} className="cursor__inner-box" style={cell.style} />
        ))}
      </div>
    </div>
  );
};

export default GooeyCursor;
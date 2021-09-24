import React, { useState, useEffect } from "react";
import Square from "./Square";

const MineSweeper = ({ grid, setRestart, restart }) => {
  const [gridState, setGridState] = useState(grid);
  useEffect(() => {
    setGridState(grid);
  }, [grid]);
  return (
    <table style={{ pointerEvents: restart ? "none" : "inherit" }}>
      <tbody>
        {grid.map((row, rowIdx) => {
          return (
            <tr>
              {row.map((col, colIdx) => {
                return (
                  <td
                    className="square"
                    onClick={() => {
                      if (gridState[rowIdx][colIdx].value === 9) {
                        setRestart(true);
                      }
                      setGridState((prev) => {
                        prev[rowIdx][colIdx].selected = true;
                        return [...prev];
                      });
                    }}
                  >
                    <Square
                      val={col}
                      clicked={gridState[rowIdx][colIdx].selected}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MineSweeper;

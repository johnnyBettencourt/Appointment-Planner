import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ arr }) => {
  return (
    <div>
      {arr.map(({ name, ...description }, i) => {
        return (
          <Tile name={name} description={Object.values(description)} key={i} />
        )
      })}
    </div>
  );
};

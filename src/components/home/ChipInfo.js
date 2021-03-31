import React from "react";
import ChipButton from "./Chip"

export const ChipInfo = ({ types }) => {
    return (
      <div className="chip__container-info">
        {types !== undefined
          ? types.map((item, index) => {
              return <div><ChipButton key={index} item={item} index={index}  /></div> ;
            })
          : null}
      </div>
    );
  };
import React from "react";

export default function ChipButton({ item, index}) {
  switch (item.type.name) {
    case "grass": {
      return (
        <div className="chip chip__green" key={index}>
          {item.type.name}
        </div>
      );
    }
    case "poison": {
      return (
        <div className="chip chip__poison" key={index}>
          {item.type.name}
        </div>
      );
    }
    case "fire": {
      return (
        <div className="chip chip__orange" key={index}>
          {item.type.name}
        </div>
      );
    }
    case "flying": {
      return (
        <div className="chip chip__blue" key={index}>
          {item.type.name}
        </div>
      );
    }
    case "water": {
      return (
        <div className="chip chip__water" key={index}>
          {item.type.name}
        </div>
      );
    }
    default: {
      return (
        <div className="chip chip__gray" key={index}>
          {item.type.name}
        </div>
      );
    }
  }
}

export const Chip = ({ types }) => {
  return (
    <div style={{ display: "flex" }}>
      {types !== undefined
        ? types.map((item, index) => {
            return <ChipButton key={index} item={item} index={index}  />;
          })
        : null}
    </div>
  );
};

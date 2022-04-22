import React from "react";

function SubPart({ items, className ,title}) {
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <h5>{title}</h5>
        <div>search</div>
      </div>
      <div className="maincontent-subImages">
        {items.map((img) => (
          <img src={img} key={img} />
        ))}
      </div>
    </div>
  );
}

export default SubPart;

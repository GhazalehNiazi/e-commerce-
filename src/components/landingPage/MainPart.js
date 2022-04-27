import React from "react";
import Image from "./Image";

function MainPart({ title, subTitle, mainItem, className, items }) {
  return (
    <>
      <div className={`${className}-title`}>
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
      </div>

      <div className={`${className}-content`}>
        <div className={`${className}-images__main`}>
          <img src={mainItem} />
        </div>
        <div className={`${className}-images`}>
          {items.map((item) => (
            <Image src={item.src} className={item.className} category={item.category}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPart;

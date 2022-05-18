import React, { useEffect, useState } from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { id, name, info, image, price } = props.user;
  const [para, changepara] = useState(info.slice(0, 20));
  const [read, morelessState] = useState("read more");
  const statechange = () => {
    if (read === "readmore") {
      morelessState("readless");
      changepara(info);
    } else {
      morelessState("readmore");
      changepara(info.slice(0, 20));
    }
  };

  return (
    <>
      <article className='single-tour'>
        <img src={image} alt='' />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>{price}</h4>
          </div>
          <p>
            {para}
            <button onClick={statechange}>{read}</button>
          </p>
        </footer>
      </article>
    </>
  );
};

export default Tours;

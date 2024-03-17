import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10">

    <div>
        <p className="border-b-2 border-sky-700 p-2 text-2xl">Popular In Women</p>
    </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {data_product.map((item, i) => (
          <Item
            name={item.name}
            id={item.id}
            key={i}
            img={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

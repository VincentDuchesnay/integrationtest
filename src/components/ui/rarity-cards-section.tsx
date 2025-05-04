import * as React from "react"
import Raritycard from "./rarity-card";
import { useNftrarityDatas } from "@/app/hooks/useNftrarityDatas";

const nftstatssection: React.FC = () => {

    return (
    <div className="grid grid-cols-3 gap-[16px]">
    {useNftrarityDatas().rarityDatas.map((item, index) => (
      <Raritycard
        key={index}
        rarity={item.title}
        number={item.number}
        pourcent={item.pourcent}
      />
    ))}
  </div>
  );
};

export default nftstatssection;

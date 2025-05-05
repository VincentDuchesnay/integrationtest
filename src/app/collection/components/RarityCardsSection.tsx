import * as React from "react";
import RarityCard from "./RarityCard";
import { useNftrarityDatas } from "@/app/collection/hooks/useNftrarityDatas";

const RarityCardsSection: React.FC = () => {
  const { rarityDatas } = useNftrarityDatas();

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-[16px] md:grid-cols-2 md:items-center md:justify-center">
      {rarityDatas.map((item, index) => (
        <RarityCard
          key={index}
          rarity={item.title}
          number={item.number}
          pourcent={item.pourcent}
        />
      ))}
    </div>
  );
};

export default RarityCardsSection;

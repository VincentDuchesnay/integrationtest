import { useState } from "react";
export type RarityDatas = {
    title: string;
    number: number;
    pourcent: number;
  };

export function useNftrarityDatas() {
    const [rarityDatas, setrarityDatas] = useState<RarityDatas[]> ([
        { title: "Common", number: 5000, pourcent: 1.02 },
        { title: "Common", number: 5000, pourcent: 1.02 },
        { title: "The Silver Skin", number: 5000, pourcent: 1.02 },
        { title: "Common", number: 5000, pourcent: 1.02 },
        { title: "Common", number: 5000, pourcent: 1.02 },
        { title: "Common", number: 5000, pourcent: 1.02 },
      ]);

  return { rarityDatas , setrarityDatas };
}

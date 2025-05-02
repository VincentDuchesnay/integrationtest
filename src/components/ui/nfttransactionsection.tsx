import * as React from "react"
import { Button } from "./button";
import { useState } from "react";
import NFTStats from "./nftstats";

type Stats = {
    title: string;
    number: number;
    isPrice: boolean;
  };

const NFTransactionSection: React.FC = () => {
    const [stats, setStats] = useState<Stats[]>([
        { title: "Price", number: 435.87, isPrice: true },
      ]);

  return (
    <div className="flex items-center gap-[32px] bg-[#1B1B1B] p-[24px] rounded-[4px] border-[1px] border-[#1B1B1B33]/20">
    <NFTStats title={stats[0].title} number={stats[0].number} isPrice={stats[0].isPrice} />
    <Button
      variant="default"
      className="font-[family-name:var(--font-geist-sans)]"
    >
      Buy Now
    </Button>
    <Button
      variant="outline"
      className="font-[family-name:var(--font-geist-sans)]"
    >
      Make an Offer
    </Button>
  </div>
  );
};

export default NFTransactionSection;

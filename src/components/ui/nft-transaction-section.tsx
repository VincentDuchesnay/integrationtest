import * as React from "react";
import { Button } from "./button";
import { useState } from "react";
import NFTStats from "./nft-stats";

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
    <div className="flex flex-row items-center gap-[32px] bg-[#1B1B1B] p-[24px] rounded-[4px] border-[1px] border-[#1B1B1B33]/20">
      <div>
        <NFTStats
          title={stats[0].title}
          number={stats[0].number}
          isPrice={stats[0].isPrice}
        />
      </div>
      <div className="flex gap-[16px] w-full justify-end">
        <Button
          variant="default"
          className="font-[var(--font-jura)]"
        >
          Buy Now
        </Button>
        <Button
          variant="outline"
          className="font-[var(--font-jura)]"
        >
          Make an Offer
        </Button>
      </div>
    </div>
  );
};

export default NFTransactionSection;

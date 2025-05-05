import * as React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NFTStats from "./NFTStats";

type Stats = {
  title: string;
  content: number;
  isPrice: boolean;
};

const NFTransactionSection: React.FC = () => {
  const [stats] = useState<Stats[]>([
    { title: "Price", content: 435.87, isPrice: true },
  ]);

  return (
    <div className="flex flex-col lg:flex-row  items-center gap-[32px] bg-[#1B1B1B] p-[24px] rounded-[4px] border-[1px] border-[#1B1B1B33]/20">
      <div>
        <NFTStats
          title={stats[0].title}
          content={stats[0].content}
          isPrice={stats[0].isPrice}
          sizeTitle={15}
          sizeContent={20}
        />
      </div>
      <div className="flex gap-[16px] w-full lg:justify-end flex-col lg:flex-row  md:flex-col md:items-center md:justify-center sm:flex-col sm:justify-center">
        <Button
          variant="default"
        >
          Buy Now
        </Button>
        <Button
          variant="outline"
        >
          Make an Offer
        </Button>
      </div>
    </div>
  );
};

export default NFTransactionSection;

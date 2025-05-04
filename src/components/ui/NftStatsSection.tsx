import * as React from "react";
import NFTStats from "@/components/ui/NFTStats";
import { useNftStats } from "@/app/hooks/useNftStats";

const NftStatsSection: React.FC = () => {
  const { stats } = useNftStats();

  return (
    <div className="grid lg:grid-cols-[repeat(5,_auto)] md:grid-cols-[repeat(3,_auto)] sm:grid-cols-1">
      {stats.map((item, index) => (
        <NFTStats
          key={index}
          title={item.title}
          content={item.content}
          isPrice={item.isPrice}
        />
      ))}
    </div>
  );
};

export default NftStatsSection;

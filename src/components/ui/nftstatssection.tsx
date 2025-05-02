import * as React from "react"
import { useState } from "react";
import NFTStats from "@/components/ui/nftstats";
import { useNftStats } from "@/app/hooks/useNftStats";

const nftstatssection: React.FC = () => {
  
  return (
<div className="grid grid-cols-[repeat(5,_auto)]">
                    {useNftStats().stats.map((item, index) => (
                      <NFTStats
                        key={index}
                        title={item.title}
                        number={item.number}
                        isPrice={item.isPrice}
                      />
                    ))}
                  </div>
  );
};

export default nftstatssection;

import * as React from "react";
import Raritycardssection from "@/components/ui/rarity-cards-section";
import Nftmetadata from "@/components/ui/nft-metadata";
import { useMetadata } from "@/app/hooks/useMetadatas";
import NFTStatsSection from "@/components/ui/nft-stats-section";
import NFTransactionSection from "@/components/ui/nft-transaction-section";
import {
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const NftDetailsSection: React.FC = () => {
  const { description } = useMetadata();
  return (
    <div className="grid items-center gap-[24px] w-fit">
    <DialogHeader>
      <DialogTitle>NFT Collection</DialogTitle>
    </DialogHeader>
    <NFTStatsSection />
    <NFTransactionSection />
    <Nftmetadata description={description} />
    <Raritycardssection />
  </div>
  );
};

export default NftDetailsSection;

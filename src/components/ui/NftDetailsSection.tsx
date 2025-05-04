import * as React from "react";
import Raritycardssection from "@/components/ui/RarityCardsSection";
import Nftmetadata from "@/components/ui/MetadataSection";
import { useMetadata } from "@/app/hooks/useMetadatas";
import NFTStatsSection from "@/components/ui/NftStatsSection";
import NFTransactionSection from "@/components/ui/NFTransactionSection";
import {
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const NftDetailsSection: React.FC = () => {
  const { description, collectionName, nftname } = useMetadata();
  return (
    <div className="grid items-center gap-[24px] w-fit">
    <DialogHeader>
      <DialogTitle className="text-[12px] text-white/50 font-jura">{collectionName}</DialogTitle>
      <h4 className="text-[22px] font-kdam">{nftname}</h4>
    </DialogHeader>
    <NFTStatsSection />
    <NFTransactionSection />
    <Nftmetadata description={description} />
    <Raritycardssection />
  </div>
  );
};

export default NftDetailsSection;

import * as React from "react";
import Image from "next/image";
import { SendIcon, ShareIcon, RefreshCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NftImageSection: React.FC<{ src: string; alt?: string }> = ({ src, alt = "NFT image" }) => {
  return (
    <div className="grid grid-cols-1 gap-[8px] w-fit">
      <Image src={src} alt={alt} width={400} height={400} />
      <div className="flex gap-[4px] justify-end">
        <Button variant="iconOutline" size="icon">
          <SendIcon className="text-white" />
        </Button>
        <Button variant="iconOutline" size="icon">
          <ShareIcon className="text-white" />
        </Button>
        <Button variant="icon" size="icon">
          <RefreshCwIcon className="text-white" />
        </Button>
      </div>
    </div>
  );
};

export default NftImageSection;

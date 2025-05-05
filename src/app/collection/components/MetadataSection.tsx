import * as React from "react";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MetadataSectionProps {
    title?: string;
    description: string;
  }
  
  const MetadataSection: React.FC<MetadataSectionProps> = ({
    title = "Metadatas",
    description,
  }) => {
    return (
      <div className="flex flex-col gap-[4px]">
        <DialogHeader>
          <DialogTitle className="text-[18px] text-white font-jura">{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="break-words text-sm max-w-[562px] font-jura text-[16px]">
          {description}
        </DialogDescription>
      </div>
    );
  };
  
  export default MetadataSection;
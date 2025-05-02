import * as React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="break-words text-sm font-jura">
          {description}
        </DialogDescription>
      </div>
    );
  };
  
  export default MetadataSection;
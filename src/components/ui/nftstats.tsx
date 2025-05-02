import * as React from "react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface nftstatsProps {
  title: string;
  number: number | string;
  isPrice?: boolean;
}

const nftstats: React.FC<nftstatsProps> = ({
  title,
  number,
  isPrice = false,
}) => {
  return (
    <div >
      <h3 className="text-[15px] font-default text-white/30">{title}</h3>
      <div className="flex text-[16px] font-bold text-white ">
        {isPrice ? (
          <>
            {typeof number === "number" ? number.toFixed(2) : number}
        <Badge variant="default">
            <Image src="/images/coreIcon.png" alt="core" width={16} height={16} />
        </Badge>
          </>
        ) : (
            number
        )}
      </div>
    </div>
  );
};

export default nftstats;

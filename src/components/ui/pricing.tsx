import * as React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface PriceWithIconProps {
  amount: number;
  decimals?: number;
  iconSrc?: string;
  iconAlt?: string;
  size?: number;
}

const pricing: React.FC<PriceWithIconProps> = ({
  amount,
  decimals = 2,
  iconSrc = "/images/coreIcon.png",
  iconAlt = "core",
  size = 16,
}) => {
  const formatted =
    typeof amount === "number"
      ? amount.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : amount;

  return (
    <span className={`flex items-center gap-[4px] text-white text-[${size}px]`}>
      {formatted}
      <Badge variant="default">
        <Image src={iconSrc} alt={iconAlt} width={size} height={size} />
      </Badge>
    </span>
  );
};

export default pricing;

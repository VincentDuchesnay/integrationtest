import * as React from "react";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="p-0 bg-transparent">
      <CardContent>
        <div className="flex justify-between">
          <div className="grid grid-cols-1 flex-col">
            <CardTitle className="text-white/30 text-[12px]">{title}</CardTitle>
            <p className="text-white text-[16px]">{isPrice ? (
          <>
            {typeof number === "number" ? number.toFixed(2) : number}
        <Badge variant="default">
            <Image src="/images/coreIcon.png" alt="core" width={16} height={16} />
        </Badge>
          </>
        ) : (
            number
        )}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default nftstats;

import * as React from "react";
import Pricing from "@/app/collection/components/pricing";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface nftstatsProps {
  title: string;
  content: number | string;
  isPrice?: boolean;
  sizeTitle?: number;
  sizeContent?: number;
}

const NFTStats: React.FC<nftstatsProps> = ({
  title,
  content,
  sizeTitle = 15,
  sizeContent = 16,
  isPrice = false,
}) => {
  return (
    <Card className="p-0 bg-transparent">
      <CardContent>
        <div className="grid grid-cols-1 flex-col">
          <CardTitle
            className="text-white/30"
            style={{ fontSize: `${sizeTitle}px` }}
          >
            {title}
          </CardTitle>
          <p
            className="text-white flex items-center font-jura font-bold"
            style={{ fontSize: `${sizeContent}px` }}
          >
            {isPrice && typeof content === "number" ? (
              <Pricing amount={content} size={sizeContent} />
            ) : (
              content
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NFTStats;

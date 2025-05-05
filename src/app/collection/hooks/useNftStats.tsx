import { useState } from "react";
export type Stats = {
    title: string;
    content: number | string;
    isPrice: boolean;
  };

export function useNftStats() {
    const [stats, setStats] = useState<Stats[]>([
        { title: "Owner", content: "0xMad", isPrice: false },
        { title: "List Price", content: 435.87, isPrice: true },
        { title: "Floor Price", content: 435.87, isPrice: true },
        { title: "Top Bid", content: 30000.0, isPrice: true },
        { title: "Last Sale", content: 3568798.75, isPrice: true },
      ]);

  return { stats , setStats };
}

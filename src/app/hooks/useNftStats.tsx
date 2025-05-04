import { useState } from "react";
export type Stats = {
    title: string;
    number: number | string;
    isPrice: boolean;
  };

export function useNftStats() {
    const [stats, setStats] = useState<Stats[]>([
        { title: "Owner", number: "0xMad", isPrice: false },
        { title: "List Price", number: 435.87, isPrice: true },
        { title: "Floor Price", number: 435.87, isPrice: true },
        { title: "Top Bid", number: 30000.0, isPrice: true },
        { title: "Last Sale", number: 3568798.75, isPrice: true },
      ]);

  return { stats , setStats };
}

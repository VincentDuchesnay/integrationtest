"use client";

import { Button } from "@/components/ui/button";
import NFTStats from "@/components/ui/nftstats";
import Raritycard from "@/components/ui/raritycard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogCloseButton,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { SendIcon, ShareIcon, RefreshCwIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const data = [
  { title: "Owner", number: "0xMad", isPrice: false },
  { title: "List Price", number: 435.87, isPrice: true },
  { title: "Floor Price", number: 435.87, isPrice: true },
  { title: "Top Bid", number: 30000.0, isPrice: true },
  { title: "Last Sale", number: 3568798.75, isPrice: true },
];

const data2 = [
  { title: "Common", number: 5000, pourcent: 1.02 },
  { title: "Common", number: 5000, pourcent: 1.02 },
  { title: "Common", number: 5000, pourcent: 1.02 },
  { title: "Common", number: 5000, pourcent: 1.02 },
  { title: "Common", number: 5000, pourcent: 1.02 },
  { title: "Common", number: 5000, pourcent: 1.02 },
];

export default function CollectionPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url(../images/bgimage.png)] bg-cover bg-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="font-[family-name:var(--font-geist-sans)]"
          >
            Show NFT
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="hidden">NFT Collection</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="collection">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="Overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <DialogCloseButton />
            </div>
            <TabsContent value="Overview">
              <div className="flex items-center justify-between">
                <div className="grid w-full items-center">
                  <Image
                    src="/images/01.png"
                    alt="core"
                    width={400}
                    height={400}
                  />
                  <div className="flex gap-[4px] justify-end">
                    <Badge variant="outline"><SendIcon className="text-white" /></Badge>
                    <Badge variant="outline"><ShareIcon className="text-white" /></Badge>
                    <Badge variant="secondary"><RefreshCwIcon className="text-white" /></Badge>
                  </div>
                </div>
                <div className="grid items-center gap-[24px] w-fit">
                  <DialogHeader>
                    <DialogTitle>NFT Collection</DialogTitle>
                  </DialogHeader>
                  <div className="flex gap-[40px]">
                    {data.map((item, index) => (
                      <NFTStats
                        key={index}
                        title={item.title}
                        number={item.number}
                        isPrice={item.isPrice}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-[32px] bg-[#1B1B1B] p-[24px] rounded-[4px] border-[1px] border-[#1B1B1B33]/20">
                    <NFTStats title="Price" number={435.87} isPrice={true} />
                    <Button
                      variant="default"
                      className="font-[family-name:var(--font-geist-sans)]"
                    >
                      Buy Now
                    </Button>
                    <Button
                      variant="outline"
                      className="font-[family-name:var(--font-geist-sans)]"
                    >
                      Make an Offer
                    </Button>
                  </div>
                  <DialogHeader>
                    <DialogTitle>Metadatas</DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="break-words">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Numquam, nobis soluta? Iste saepe ipsum, possimus
                      blanditiis explicabo ex odit molestiae iure perferendis
                      doloremque repudiandae debitis. Mollitia tempora quia
                      excepturi consequatur.sdgggg gg ggg g gggg ggg ggggggg ggg
                      gggggg ggg ggggg ggg gg gggg gggg g sdgsd gsgsg sggsd gs
                      gsd gs gsdg sg s gsgsg
                  </DialogDescription>
                  <div className="grid grid-cols-3 gap-[16px]">
                    {data2.map((item, index) => (
                      <Raritycard
                        key={index}
                        rarity={item.title}
                        number={item.number}
                        pourcent={item.pourcent}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="activity">
              <DialogHeader>work in progress</DialogHeader>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}

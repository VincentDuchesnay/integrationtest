"use client";

import { Button } from "@/components/ui/button";
import Raritycardssection from "@/components/ui/raritycardssection";
import Nftmetadata from "@/components/ui/nftmetadata";
import { useMetadata } from "@/app/hooks/useMetadatas";
import NFTStatsSection from "@/components/ui/nftstatssection";
import { DataTable } from "@/components/ui/datatable";
import { useUserColumns, datasTable } from "@/app/hooks/useDatasActivity";

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
import NFTransactionSection from "@/components/ui/nfttransactionsection";

export default function CollectionPage() {
  const columns = useUserColumns();
  return (
    <div className="flex min-h-screen items-start md:items-center justify-center bg-[url(../images/bgimage.png)]">
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
          <Tabs defaultValue="collection" className="gap-[16px]">
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
                    <Badge variant="outline">
                      <SendIcon className="text-white" />
                    </Badge>
                    <Badge variant="outline">
                      <ShareIcon className="text-white" />
                    </Badge>
                    <Badge variant="secondary">
                      <RefreshCwIcon className="text-white" />
                    </Badge>
                  </div>
                </div>
                <div className="grid items-center gap-[24px] w-fit">
                  <DialogHeader>
                    <DialogTitle>NFT Collection</DialogTitle>
                  </DialogHeader>
                  <NFTStatsSection />
                  <NFTransactionSection />
                  <Nftmetadata description={useMetadata().description} />
                  <Raritycardssection />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="activity" >
              <div className="container gap-[16px]">
                <DataTable columns={columns} data={datasTable} />
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}

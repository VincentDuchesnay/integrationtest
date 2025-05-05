"use client";

import { Button } from "@/components/ui/button";
import NftDetailsSection from "@/app/collection/components/NftDetailsSection";
import { DataTable } from "@/components/ui/DataTable";
import { useUserColumns, datasTable } from "@/app/collection/hooks/useDatasActivity";
import NftImageSection from "@/app/collection/components/NftImageSection";
import { useMetadata } from "@/app/collection/hooks/useMetadatas";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogCloseButton,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CollectionPage() {
  const activityColumns = useUserColumns();
  const { image } = useMetadata();
  return (
    <div className="flex min-h-screen items-start md:items-center justify-center bg-[url(/images/bgimage.png)]">
      <Dialog>
        <DialogTrigger asChild >
          <Button
            variant="default"
            className="bg-white text-black border-1 border-black text-[24px] font-bold"
          >
            Show NFT
          </Button>
        </DialogTrigger>
        <DialogContent className="overflow-y-auto max-h-screen">
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
              <div className="grid lg:grid-cols-[repeat(2,_auto)] lg:items-start lg:justify-between lg:w-[1002px] lg:h-[650px] md:grid-cols-auto md:w-full md:items-center md:justify-center">
                <NftImageSection src={image} />
                <NftDetailsSection />
              </div>
            </TabsContent>
            <TabsContent value="activity" >
              <div className="gap-[16px] lg:max-h-[650px] lg:w-[1002px]">
                <DataTable columns={activityColumns} data={datasTable} />
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}

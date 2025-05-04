"use client";

import { Button } from "@/components/ui/button";
import NftDetailsSection from "@/components/ui/NftDetailsSection";
import { DataTable } from "@/components/ui/DataTable";
import { useUserColumns, datasTable } from "@/app/hooks/useDatasActivity";
import NftImageSection from "@/components/ui/NftImageSection";
import { useMetadata } from "@/app/hooks/useMetadatas";

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
    <div className="flex min-h-screen items-start md:items-center justify-center bg-[url(../images/bgimage.png)]">
      <Dialog>
        <DialogTrigger asChild >
          <Button
            variant="default"
            className="bg-white text-black border-1 border-black w-[500px] h-[200px] text-[24px] font-bold"
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
              <div className="grid grid-cols-[repeat(2,_auto)] items-start justify-between w-[1002px]">
                <NftImageSection src={image} />
                <NftDetailsSection />
              </div>
            </TabsContent>
            <TabsContent value="activity" >
              <div className="container gap-[16px]">
                <DataTable columns={activityColumns} data={datasTable} />
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}

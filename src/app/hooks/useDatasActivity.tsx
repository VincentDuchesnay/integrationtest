import { ColumnDef } from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Pricing from "@/components/ui/pricing";
export const datasTable = [
  {
    id: "1",
    event: "Listing",
    value: 145,
    from: "0x4b20993bc481177ec7e8f571cecae8a9e22c02db",
    to: "0x583031d1113ad414f02576bd6afabfb302140225",
    time: 24,
  },
  {
    id: "2",
    event: "Sale",
    value: 145,
    from: "0xd1220a0cf47c7b9be7a2e6ba89f429762e7b9adb",
    to: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
    time: 21,
  },
  {
    id: "3",
    event: "Sale",
    value: 200,
    from: "0xf17f52151ebef6c7334fad080c5704d77216b732",
    to: "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1",
    time: 15,
  },
  {
    id: "4",
    event: "Repay Loan",
    value: 300,
    from: "0xffcf8fdee72ac11b5c542428b35eef5769c409f0",
    to: "0xe11ba2b4d45eaed5996cd0823791e0c93114882d",
    time: 18,
  },
  {
    id: "5",
    event: "Extend Loan",
    value: 190,
    from: "0x0d1d4e623d10f9fba5db95830f7d3839406c6af2",
    to: "0x2932a86df44fe8d2c2c936b93e2d106b1fdeeec2",
    time: 30,
  },
  {
    id: "6",
    event: "Sale",
    value: 155,
    from: "0x2191ef87e392377ec08e7c08eb105ef5448eced5",
    to: "0x0a57fd62c45bcb5dd591f9af7e67df685e3b9ff3",
    time: 12,
  },
  {
    id: "7",
    event: "Listing",
    value: 175,
    from: "0x5c5e5f5fcbfbabdfc8f4296d4e8b8c9f3b894e1f",
    to: "0x30aee1c785b092b3976e3d8df85d1f5f44c62aef",
    time: 22,
  },
  {
    id: "8",
    event: "Repay Loan",
    value: 250,
    from: "0x2f7d730d650a49f2e43c4a6c773afbb66f3e2ef2",
    to: "0xe36ea790bc9d7ab70c55260c66d52b1eca985f84",
    time: 14,
  },
  {
    id: "9",
    event: "Sale",
    value: 185,
    from: "0x4f7a657c5d2d8b17102d4e3ecfa5ef374c7f8f31",
    to: "0x0ef4a5ec29a03f941db7f67a62428b6d95d5b1a1",
    time: 10,
  },
  {
    id: "10",
    event: "Extend Loan",
    value: 210,
    from: "0x9f7d3d73a0b917b7f4b2c2dcb10c5604e24f390c",
    to: "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819",
    time: 19,
  },
  {
    id: "11",
    event: "Listing",
    value: 140,
    from: "0x5aeda56215b167893e80b4fe645ba6d5bab767de",
    to: "0x6c2f26db9df8b14f4c18465b4e379f5d91fdc509",
    time: 28,
  },
  {
    id: "12",
    event: "Sale",
    value: 160,
    from: "0xf014343bdff44ed43a7e2e4f452df9c8126e42e4",
    to: "0x7cb3f3e8dd3983f3838e8d60172662b20f02edba",
    time: 16,
  },
  {
    id: "13",
    event: "Repay Loan",
    value: 225,
    from: "0x45f5c2bdfb5b630b8dd259ef476c7f04bc1d6b02",
    to: "0x2a1c1cb55c1cd2c27f944f3e7decb1a75d7a2f4a",
    time: 8,
  },
  {
    id: "14",
    event: "Extend Loan",
    value: 195,
    from: "0xf6c7f1ad845fdfc8f77c6e2e5930f50a8d28e91a",
    to: "0x993a7f9cc1e373ce403d4d362f09d47a4ac75d6c",
    time: 7,
  },
  {
    id: "15",
    event: "Sale",
    value: 175,
    from: "0x3b52c94db1c2ad5b6af2b9090db43b81642a1c38",
    to: "0x65f5f9f06f6e370b32b7c5bbf589efb9bbcc7ef0",
    time: 6,
  },
  {
    id: "16",
    event: "Listing",
    value: 155,
    from: "0x821aea9a577a9b44299b9c15c88cf3087f3b5544",
    to: "0xb17fabe7b981723f3d5f193844e7b1c32df568ba",
    time: 5,
  },
  {
    id: "17",
    event: "Repay Loan",
    value: 265,
    from: "0x16f3f49ef38cfb7a9b54b6db5ef5c1e10c2a0c27",
    to: "0x7e2b20e3279fd2c2e4f7f59cf96ab2430c94cce3",
    time: 3,
  },
  {
    id: "18",
    event: "Extend Loan",
    value: 185,
    from: "0xe480a3cce4c3f7eb0b9e1aab80e4370531b3b6f3",
    to: "0xc4b3d02d1976f61bfe6c34b21a419a4ec4ec4293",
    time: 12,
  },
  {
    id: "19",
    event: "Sale",
    value: 220,
    from: "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
    to: "0x21a31ee1afc51d94c2efccaa2092ad1028285549",
    time: 2,
  },
  {
    id: "20",
    event: "Listing",
    value: 135,
    from: "0x6330a553fc93768f612722bb8c2ec78ac90b3bbc",
    to: "0x5d8629e4adcf497a70e364f24c10d87db5ffbdfd",
    time: 4,
  },
  {
    id: "21",
    event: "Repay Loan",
    value: 275,
    from: "0x17f6ad8ef982297579c203069c1dbfef43156d72",
    to: "0x03c6fced478cbbc9a4fab34eF9f40767739d1Ff7",
    time: 30,
  },
];

export type User = {
  id: string;
  event: string;
  value: number;
  from: string;
  to: string;
  time: number;
};

export function useUserColumns(): ColumnDef<User>[] {
  return [
    {
      accessorKey: "event",
      header: () => <div className="text-white font-[18px]">Event</div>,
      cell: ({ row }) => {
        const event = row.getValue("event") as string;

        const colorMap: Record<string, string> = {
          Listing: "text-white",
          Sale: "text-[#FF0CBB]",
          "Repay Loan": "text-[#00FFF8]",
          "Extend Loan": "text-[#FF9215]",
        };

        const colorClass = colorMap[event] || "text-white";
        

        return <span className={`${colorClass} text-[18px]`}>{event}</span>;
      },
    },
    {
      accessorKey: "value",
      header: () => <div className="text-white font-[18px]">Value</div>,
      cell: ({ row }) => {
        const price = row.getValue("value") as number;
        return (
          <div className="w-full flex items-center gap-[8px]">
            <Pricing amount={price} size={18}/>
          </div>
        );
      },
    },
    {
      accessorKey: "from",
      header: () => <div className="text-white font-[18px]">From</div>,
      cell: ({ row }) => {
        const address = row.getValue("from") as string;
        return <span className="text-white font-[18px]">{address.slice(0, 14).toUpperCase()}</span>;
      },
    },
    {
      accessorKey: "to",
      header: () => <div className="text-white font-[18px]">To</div>,
      cell: ({ row }) => {
        const address = row.getValue("to") as string;
        return <span className="text-white font-[18px]">{address.slice(0, 14).toUpperCase()}</span>;
      },
    },
    {
      accessorKey: "time",
      header: () => <div className="text-right w-full text-white font-[18px]">Time</div>,
      cell: ({ row }) => {
        const minutes = row.getValue("time") as number;
        return (
          <div className="w-full flex justify-end items-center gap-[8px]">
            <span className="text-white font-[18px]">{minutes} min ago</span>
            <Button variant="iconOutline" size="icon" padding="icon">
              <ExternalLink className="w-[16px] h-[16px] text-white" />
            </Button>
          </div>
        );
      },
    },
  ];
}

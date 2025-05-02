import { ColumnDef } from "@tanstack/react-table";

export const datasTable = 
[
  { id: "1", event: "Listing", value: 145, from: "0x635464", to: "0x23145646", time: 24 },
  { id: "2", event: "Sale", value: 145, from: "0x635464", to: "0x23145646", time: 21 },
  { id: "3", event: "Sale", value: 200, from: "0x112233", to: "0x445566", time: 15 },
  { id: "4", event: "Repay Loan", value: 300, from: "0xabcdef", to: "0x123456", time: 18 },
  { id: "5", event: "Extend Loan", value: 190, from: "0xaabbcc", to: "0xddeeff", time: 30 },
  { id: "6", event: "Sale", value: 155, from: "0x998877", to: "0x776655", time: 12 },
  { id: "7", event: "Listing", value: 175, from: "0x135790", to: "0x246802", time: 22 },
  { id: "8", event: "Repay Loan", value: 250, from: "0xaaaaaa", to: "0xbbbbbb", time: 14 },
  { id: "9", event: "Sale", value: 185, from: "0xcccccc", to: "0xdddddd", time: 10 },
  { id: "10", event: "Extend Loan", value: 210, from: "0xeeffee", to: "0x112211", time: 19 },
  { id: "11", event: "Listing", value: 140, from: "0xaaaa11", to: "0xbbbb22", time: 28 },
  { id: "12", event: "Sale", value: 160, from: "0xcccc33", to: "0xdddd44", time: 16 },
  { id: "13", event: "Repay Loan", value: 225, from: "0xeeee55", to: "0xffff66", time: 8 },
  { id: "14", event: "Extend Loan", value: 195, from: "0x123abc", to: "0x321cba", time: 7 },
  { id: "15", event: "Sale", value: 175, from: "0x135790", to: "0x246802", time: 6 },
  { id: "16", event: "Listing", value: 155, from: "0xdeadbe", to: "0xefbead", time: 5 },
  { id: "17", event: "Repay Loan", value: 265, from: "0xaaaaaa", to: "0xbbbbbb", time: 3 },
  { id: "18", event: "Extend Loan", value: 185, from: "0xcccccc", to: "0xdddddd", time: 12 },
  { id: "19", event: "Sale", value: 220, from: "0xeeeeee", to: "0xffffff", time: 2 },
  { id: "20", event: "Listing", value: 135, from: "0x111111", to: "0x222222", time: 4 },
  { id: "21", event: "Repay Loan", value: 275, from: "0x333333", to: "0x444444", time: 30 },
  { id: "22", event: "Extend Loan", value: 160, from: "0x555555", to: "0x666666", time: 25 },
  { id: "23", event: "Sale", value: 190, from: "0x777777", to: "0x888888", time: 27 },
  { id: "24", event: "Listing", value: 145, from: "0x999999", to: "0xaaaaaa", time: 23 },
  { id: "25", event: "Repay Loan", value: 280, from: "0xbbbbbb", to: "0xcccccc", time: 29 },
  { id: "26", event: "Extend Loan", value: 170, from: "0xdddddd", to: "0xeeeeee", time: 11 },
  { id: "27", event: "Sale", value: 150, from: "0xffffff", to: "0x000000", time: 9 },
  { id: "28", event: "Listing", value: 165, from: "0x121212", to: "0x343434", time: 17 },
  { id: "29", event: "Repay Loan", value: 295, from: "0x565656", to: "0x787878", time: 26 },
  { id: "30", event: "Extend Loan", value: 155, from: "0x909090", to: "0xababab", time: 13 },
  { id: "31", event: "Sale", value: 200, from: "0xcdcdcd", to: "0xefefef", time: 31 },
  { id: "32", event: "Listing", value: 150, from: "0x121314", to: "0x151617", time: 33 },
  { id: "33", event: "Repay Loan", value: 260, from: "0x181920", to: "0x212223", time: 32 },
  { id: "34", event: "Extend Loan", value: 175, from: "0x242526", to: "0x272829", time: 34 },
  { id: "35", event: "Sale", value: 190, from: "0x303132", to: "0x333435", time: 35 },
  { id: "36", event: "Listing", value: 160, from: "0x363738", to: "0x393a3b", time: 36 },
  { id: "37", event: "Repay Loan", value: 270, from: "0x3c3d3e", to: "0x3f4041", time: 37 },
  { id: "38", event: "Extend Loan", value: 180, from: "0x424344", to: "0x454647", time: 38 },
  { id: "39", event: "Sale", value: 210, from: "0x48494a", to: "0x4b4c4d", time: 39 },
  { id: "40", event: "Listing", value: 155, from: "0x4e4f50", to: "0x515253", time: 40 },
  { id: "41", event: "Repay Loan", value: 285, from: "0x545556", to: "0x575859", time: 41 },
  { id: "42", event: "Extend Loan", value: 165, from: "0x5a5b5c", to: "0x5d5e5f", time: 42 },
  { id: "43", event: "Sale", value: 195, from: "0x606162", to: "0x636465", time: 43 },
]

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
      header: "Event",
      cell: ({ row }) => {
        const event = row.getValue("event") as string;

        const colorMap: Record<string, string> = {
          Listing: "text-white",
          Sale: "text-[#FF0CBB]",
          "Repay Loan": "text-[#00FFF8]",
          "Extend Loan": "text-[#FF9215]",
        };

        const colorClass = colorMap[event] || "text-white";

        return <span className={colorClass}>{event}</span>;
      },
    },
    {
      accessorKey: "value",
      header: "Value",
    },
    {
      accessorKey: "from",
      header: "From",
    },
    {
      accessorKey: "to",
      header: "To",
    },
    {
      accessorKey: "time",
      header: "Time",
      cell: ({ row }) => {
        const minutes = row.getValue("time") as number;
        return `${minutes} min ago`;
      },
    },
  ];
}

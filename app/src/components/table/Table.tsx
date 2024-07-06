import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { shortedUrls } from "@/data/shorts-urls";
import { GlobeIcon } from "lucide-react";

export function TableShortedUrls() {
  return (
    <Table>
      <TableBody>
        {shortedUrls.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>
              <GlobeIcon />
            </TableCell>
            <TableCell className="font-medium">
              <div className="font-bold text-2xl">{invoice.shortedUrl}</div>
              <div>{invoice.url}</div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

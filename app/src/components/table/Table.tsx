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
            <TableCell className="font-medium flex flex-col gap-3">
              <a href={invoice.shortedUrl} className="font-bold text-2xl">
                {invoice.shortedUrl}
              </a>
              <a href={invoice.url}>{invoice.url}</a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

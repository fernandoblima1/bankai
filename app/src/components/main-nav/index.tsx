import * as React from "react";

import { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Skeleton } from "../ui/skeleton";

interface MainNavProps {
  items?: NavItem[];
  username: string;
  isLoading?: boolean;
}

export function MainNav({ username, items, isLoading }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <a href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        {isLoading ? (
          <Skeleton className="h-8 w-56 inline-block bg-slate-200" />
        ) : (
          <span className="inline-block font-bold">{username}</span>
        )}
      </a>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </a>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}

"use client";

import { useQuery } from "convex/react";
import { Search } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Spinner } from "@/components/spinner";

export const TrashBox = () => {
  const documents = useQuery(api.documents.getTrash);

  if (documents === undefined) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="text-sm">
      <div className="flex items-center gap-x-1 p-2">
        <Search className="h-4 w-4" />
      </div>
      <div className="mt-2 px-1 pb-1">
        <p className="hidden last:block text-xs text-center text-muted-foreground pb-2">
          No documents found.
        </p>
      </div>
    </div>
  );
};

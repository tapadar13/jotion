"use client";

import { useQuery } from "convex/react";
import { Search } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Spinner } from "@/components/spinner";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const [search, setSearch] = useState("");

  const documents = useQuery(api.documents.getTrash);

  const filteredDocuments = documents?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase());
  });

  const onClick = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

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
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
          placeholder="Filter by page title..."
        />
      </div>
      <div className="mt-2 px-1 pb-1">
        <p className="hidden last:block text-xs text-center text-muted-foreground pb-2">
          No documents found.
        </p>
        {filteredDocuments?.map((document) => (
          <div
            key={document._id}
            role="button"
            onClick={() => onClick(document._id)}
            className="text-sm rounded-sm w-full hover:bg-primary/5 flex items-center text-primary justify-between"
          >
            <span className="truncate pl-2">{document.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

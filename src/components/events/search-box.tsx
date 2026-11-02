"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  type?: string;
  search?: string;
};

const SearchBox = ({ type, search }: Props) => {
  const router = useRouter();

  const [text, setText] = useState(search ?? "");

  useEffect(() => {
    if (text.trim() === (search ?? "")) return;

    const timer = setTimeout(() => {
      let url = type
        ? `/upcoming-events/${encodeURIComponent(type)}`
        : "/upcoming-events";

      if (text.trim()) {
        url += `?search=${encodeURIComponent(text.trim())}`;
      }

      router.replace(url);
    }, 400);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div className="relative w-full md:w-72">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search by title or location..."
        className="pl-9"
      />
    </div>
  );
};

export default SearchBox;

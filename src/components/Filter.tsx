"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-8">
      <span>Sort by :</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 p-1 shadow-md rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: High to Low</option>
        <option value="desc">Price: Low to High</option>
      </select>
    </div>
  );
};

export default Filter;

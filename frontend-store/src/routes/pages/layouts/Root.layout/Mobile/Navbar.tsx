import { IconSearch, IconBars } from "~/routes/pages/common/Icons";

import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search } from "~/routes/pages/layouts/Root.layout/components/Search";

export function Navbar(props: { onOpenSidebar: () => void }) {
  const [search, setSearch] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="fixed left-0 top-0 z-10 h-16 w-full border-b border-gray-300 bg-white shadow-o-md">
      {search ? (
        <Search
          showSearch={search}
          onSearch={(searchTerm: string) => {
            navigate({ to: "/search", search: { search: searchTerm } });
            setSearch(false);
          }}
          onCloseSearch={() => setSearch(false)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-between">
          <div>
            <button
              onClick={props.onOpenSidebar}
              className="flex h-12 w-12 items-center justify-center rounded-md"
            >
              <IconBars className="h-5 w-5" />
            </button>
          </div>
          <Link
            to="/"
            className="block font-logo text-2xl font-medium underline decoration-teal-500 decoration-2"
          >
            shopfashion
          </Link>
          <div>
            <button
              onClick={() => setSearch(true)}
              className="flex h-12 w-12 items-center justify-center rounded-md"
            >
              <IconSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

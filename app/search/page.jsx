"use client";

import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("query");

  return (
    <div className="container mt-5 text-white">
      <h2>Search Results</h2>
      {query ? (
        <p>
          You searched for: <strong>{query}</strong>
        </p>
      ) : (
        <p>No search query provided.</p>
      )}
    </div>
  );
}

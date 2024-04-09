import React, { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [pageSize, setPageSize] = useState(10);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({
      pageSize,
    });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <label>Choose pageSize:</label>
      <select
        onChange={(event) => setPageSize(parseInt(event.target.value))}
        value={pageSize}
        className="form-select mb-3"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <ul className="list-group">
        {data.pages.map((page) => (
          <React.Fragment>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;

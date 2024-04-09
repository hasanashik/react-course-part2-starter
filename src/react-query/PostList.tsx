import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const {
    data: posts,
    error,
    isLoading,
  } = usePosts({
    page,
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
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;

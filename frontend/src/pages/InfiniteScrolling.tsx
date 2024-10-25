import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

interface IPost {
  id: number;
  title: string;
  body: string;
}

export default function InfiniteScrolling() {
  const observer = useRef<IntersectionObserver | null>(null);

  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPosts = async (page: number, limit: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();
    return data;
  };

  const loadMorePost = useCallback(async () => {
    setLoading(true);
    const newPosts = await fetchPosts(page, 10);
    if (newPosts.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    if (hasMore) {
      loadMorePost();
    }
  }, [loadMorePost, hasMore]);

  const lastPostElementRef = useCallback(
    (node: any) => {
      if (loading || !hasMore) return;
      if (observer) observer.current?.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <h1>Your Feed</h1>
      <ul>
        {posts.map((post, index) => (
          <li
            key={post.id}
            ref={posts.length === index + 1 ? lastPostElementRef : null}
            className="border m-2 p-2"
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}

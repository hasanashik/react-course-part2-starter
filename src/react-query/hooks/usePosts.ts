import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

interface PostQuery {
    page: number;
    pageSize: number;
}
const usePosts = (query:PostQuery) => {
    const queryPosts = () =>
        axios
          .get("https://jsonplaceholder.typicode.com/posts",{
            params:{
                _start: (query.page - 1) * query.pageSize,
                _limit: query.pageSize
            }
        })
          .then((res) => res.data);
  return useQuery<Post[], Error>({
    queryKey:  ["posts", query],
    queryFn: queryPosts,
    staleTime: 300 * 1000, //300 sec
    keepPreviousData: true,
  });
}

export default usePosts
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/axios";

export type Post = {
  id: number;
  title: string;
  updatedAt: string;
  content: string;
  images: string;
  createdAt: string;
};

interface PostsContextInterface {
  posts: Post[];
}

export const PostsContext = createContext({} as PostsContextInterface);

interface PostsProviderInterface {
  children: ReactNode;
}

export function PostsContextProvider({ children }: PostsProviderInterface) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const { data } = await api.get("/iaa").then((res) => res.data);

    const posts = data.map((post: Post) => {
      return {
        id: post.id,
        attributes: {
          title: post.title,
          content: post.content.slice(0, 120) + "...",
          images: post.images,
          updatedAt: new Date(post.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        },
      };
    });

    setPosts(posts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}

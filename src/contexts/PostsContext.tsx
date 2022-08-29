import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/axios";

export type Post = {
  id: number;
  attributes: {
    title: string;
    updatedAt: string;
    content: string;
    images: {
      data: [
        {
          attributes: {
            url: string;
          };
        }
      ];
    };
  };
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
    const { data } = await api
      .get("/posts", {
        params: {
          "populate[0]": "images",
        },
      })
      .then((res) => res.data);

    const posts = data.map((post: Post) => {
      return {
        id: post.id,
        attributes: {
          title: post.attributes.title,
          content: post.attributes.content.slice(0, 120) + "...",
          images: post.attributes.images,
          updatedAt: new Date(post.attributes.updatedAt).toLocaleDateString(
            "pt-BR",
            {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }
          ),
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

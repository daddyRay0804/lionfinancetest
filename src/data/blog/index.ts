import type { BlogPost } from "./types";
import { buyingPosts } from "./buying";
import { mortgagePosts } from "./mortgage";
import { propertyPosts } from "./property";
import { businessPosts } from "./business";

export const blogPosts: BlogPost[] = [...buyingPosts, ...mortgagePosts, ...propertyPosts, ...businessPosts].sort((a, b) => b.date.localeCompare(a.date));
export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

import type { BlogPost } from "./types";
import { buyingPosts } from "./buying";
import { mortgagePosts } from "./mortgage";
import { propertyPosts } from "./property";
import { businessPosts } from "./business";
import { insurancePosts } from "./insurance";

export const blogPosts: BlogPost[] = [...buyingPosts, ...mortgagePosts, ...propertyPosts, ...businessPosts, ...insurancePosts].sort((a, b) => b.date.localeCompare(a.date));
export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Blog = () => {
  const revealRef = useScrollReveal();
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container" ref={revealRef}>
        <div className="reveal">
          <SectionTitle
            title="Our Latest Blogs"
            paragraph="Explore our latest blogs on web development, design trends, SEO tips, and digital solutions. Stay updated, attract customers, and grow your business online."
            center
          />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 reveal-stagger">
          {blogData().map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

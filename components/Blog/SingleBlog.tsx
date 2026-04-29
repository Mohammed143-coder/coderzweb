import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <div className="group relative h-full flex flex-col">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
      
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 dark:border-white/5 dark:bg-[#111322]">
        
        {/* Image Section */}
        <Link
          href="/blog-details"
          className="relative block aspect-[16/9] w-full overflow-hidden"
        >
          <div className="absolute right-4 top-4 z-20">
            <span className="rounded-lg bg-primary/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              {tags[0]}
            </span>
          </div>
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111322] via-transparent to-transparent opacity-60" />
        </Link>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-8">
          <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <span>{publishDate}</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>5 min read</span>
          </div>
          
          <h3 className="mb-4">
            <Link
              href="/blog-details"
              className="text-2xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary"
            >
              {title}
            </Link>
          </h3>
          
          <p className="mb-8 text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3">
            {paragraph}
          </p>
          
          <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6 dark:border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-gray-100 dark:border-white/10">
                <Image src={author.image} alt={author.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-black dark:text-white">{author.name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{author.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

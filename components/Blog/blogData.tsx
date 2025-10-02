import { getImagePath } from "@/lib/utils";
import { Blog } from "@/types/blog";

const getBlogData = (): Blog[] => [
  {
    id: 1,
    title: "The Crisis Solution",
    paragraph:"97% of consumers search online before buying. Without a website, your business is invisible to potential customers actively looking for your services. Learn how professional web development can transform your local business into a 24/7 customer magnet and increase revenue by up to 300%.",
    image: getImagePath("/images/blog/coderzweb-blog1.webp"),
    author: {
      name: "Mohammed Junaith",
      image: getImagePath("/images/blog/coderzweb-blog1.webp"),
      designation: "Full Stack Developer",
    },
    tags: ["Developer"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "The Competitor Advantage",
    paragraph:"Every day without a website, customers choose competitors over you. Modern web development isn't just about being online—it's about automated lead generation, customer trust, and dominating local search. Discover how a professional website can turn browsers into buyers and recover lost revenue.",
    image: getImagePath("/images/blog/coderzweb-blog2.webp"),
    author: {
      name: "Ayub Khan",
    image: getImagePath("/images/blog/coderzweb-blog2.webp"),
      designation: "Flutter Developer",
    },
    tags: ["Developer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "The ROI Solution",
    paragraph:"No digital presence = invisible business. Calculate exactly how much revenue you're losing monthly without a website. This guide reveals how strategic web development creates passive income streams, builds credibility, and attracts customers 24/7—even while you sleep. Start recovering lost profits today.",
    image: getImagePath("/images/blog/coderzweb-blog3.webp"),
    author: {
      name: "KM Wasim",
      image: getImagePath("/images/blog/coderzweb-blog3.webp"),
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default getBlogData;

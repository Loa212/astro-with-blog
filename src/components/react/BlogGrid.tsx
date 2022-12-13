import clipText from "../../utils/clipText";
import getApiUrl from "../../utils/getApiUrl";

const BlogGrid = ({ posts }: any) => {
  return (
    <ul className="grid lg:grid-cols-3 gap-6">
      {posts.map((post: any, idx: number) => (
        <li
          key={idx}
          className="card card-compact w-full lg:w-80 bg-base-100 shadow-xl ring-1 ring-slate-700/20"
        >
          <figure>
            <img
              className="object-cover w-full h-48"
              src={`${post.attributes.featuredImage.data.attributes.url}`}
              alt={post.attributes.featuredImage.data.attributes.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{clipText(post.attributes.name, 24)}</h2>
            <p>{post.attributes.excerpt}</p>

            <div className="card-actions flex items-center justify-between">
              <div className="badge badge-outline">
                {post.attributes.readingTime}
              </div>
              <a
                href={"/blog/" + post.attributes.slug}
                className="btn btn-primary"
              >
                Leggi articolo
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogGrid;

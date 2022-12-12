import getApiUrl from "../../utils/getApiUrl";

const BlogGrid = ({ posts }: any) => {
  return (
    <ul className="grid lg:grid-cols-2 gap-6">
      {posts.map((post: any, idx: number) => (
        <li
          key={idx}
          className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              className="object-contain w-full h-48"
              src={
                // getApiUrl() +
                `${post.attributes.featuredImage.data.attributes.url}`
              }
              alt={post.attributes.featuredImage.data.attributes.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.attributes.title}</h2>
            <p>{post.attributes.excerpt}</p>

            <div className="card-actions flex items-center justify-between">
              <div className="badge badge-outline">
                {post.attributes.readingTime}
              </div>
              <button className="btn btn-primary">Leggi articolo</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogGrid;

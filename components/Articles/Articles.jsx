import Link from "next/link";
import posts from "../../content/posts.json";

const ArticleCard = ({ slug, title, description }) => {
  return (
    <Link
      href={`/post/${slug}`}
      className="border-2 border-black p-6 hover:project-scale project-transition mb-2 md:mr-2"
    >
      <>
        <h3 className="text-xl">{title}</h3>
        <p>{description}</p>
      </>
    </Link>
  );
};

const Articles = ({ id }) => {
  const { files } = posts;
  console.log("865 --- posts", files);

  const firstFourFiles = files.slice(0, 4);

  // TODO:
  // 1. Order by date (descending)
  // 2. Keep first 4 items
  // 3. Display them + a "See all articles ->" link
  // 4. Said link opens a modal with the full list of articles
  return (
    <div
      id={id}
      className="section max-w-7xl mx-auto border-t border-b border-black p-6"
    >
      <h2 className="text-3xl mb-4">My most recent articles</h2>

      <div className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-none">
        {firstFourFiles.map(({ slug, title, description }) => (
          <ArticleCard slug={slug} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Articles;

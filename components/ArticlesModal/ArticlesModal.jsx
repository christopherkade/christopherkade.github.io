import Link from "next/link";

const DetailedArticleCard = ({ title, description, slug }) => {
  return (
    <Link
      href={slug}
      className="border-2 border-black p-6 hover:project-scale project-transition mx-auto mb-2 w-8/12"
    >
      <>
        <h3 className="text-xl mb-4">{title}</h3>
        <p>{description}</p>
      </>
    </Link>
  );
};

const ArticlesModal = ({ setShowModal, posts }) => {
  return (
    // <div className="modal-transition">
    <div className="inset-0 z-40 fixed bg-theme-primary m-3 w-auto border border-black overflow-x-hidden overflow-y-scroll">
      <button
        className="absolute top-2 right-2 border-black border p-2 hover:opacity-75"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>

      <div className="flex flex-col py-16 px-6">
        {posts.map(({ frontmatter }) => (
          <DetailedArticleCard
            key={frontmatter.title}
            title={frontmatter.title}
            description={frontmatter.description}
            slug={frontmatter.slug}
          />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default ArticlesModal;

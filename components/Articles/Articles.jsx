import useObserver from "../../hooks/useObserver";

const Articles = () => {
  const [containerRef] = useObserver("articles");

  return (
    <div
      ref={containerRef}
      id="articles"
      className="md:h-[100vh] h-32 bg-slate-600"
    >
      Articles
    </div>
  );
};

export default Articles;

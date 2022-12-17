import fs from "fs";
import path from "path";
import matter from "gray-matter";

// TODO: Create method that returns the last 4 files
// And use getAllPublished in the modal

export const getPath = (folder) => {
  return path.join(process.cwd(), `/${folder}`); // Get full path
};

export const getAllPublished = (folder) => {
  const posts = getAllPosts(folder);
  //   console.log("865 --- ALL POSTS", posts);
  const published = posts.filter((post) => {
    return post.frontmatter.isPublished === true;
  });
  return published;
};

export const getFileContent = (filename, folder) => {
  const POSTS_PATH = getPath(folder);
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

export const getSinglePost = (slug, folder) => {
  const source = getFileContent(`${slug}.md`, folder);
  const { data: frontmatter, content } = matter(source);
  return {
    frontmatter,
    content,
  };
};

export const getAllPosts = (folder) => {
  const POSTS_PATH = getPath(folder);
  //   console.log("865 --- PATH", POSTS_PATH);
  return fs
    .readdirSync(POSTS_PATH) // get files in directory
    .map((fileName) => {
      //   console.log("865 --- FILE NAME", fileName);
      // map over each file
      const source = getFileContent(fileName, folder); // retrieve the file contents
      const slug = fileName.replace(/\\.md?$/, ""); // get the slug from the filename
      const { data } = matter(source); // extract frontmatter
      return {
        frontmatter: data,
        slug: slug,
      };
    });
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const mdRegex =/mdx?$/;

const getFileList = (dirName) => {
  let files = [];
  // From https://www.webmound.com/nodejs-get-files-in-directories-recursively/
  const items = fs.readdirSync(dirName, { withFileTypes: true });
  for (const item of items) {
    
      if (item.isDirectory()) {
          files = [...files, ...getFileList(`${dirName}/${item.name}`)];
      } else if (mdRegex.test(`${item.name}`)) {
          files.push(`${dirName}/${item.name}`);
      }
  }

  return files;
};

export async function getSortedPostsHeaders() {
    // Get file names under /posts
    const fileNames = getFileList(postsDirectory);
    const allPostsData= await Promise.all(
      fileNames.map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
  
        // Read markdown file as string
        const fileContents = fs.readFileSync(fileName, "utf8");
  
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
  
        // Combine the data with the id
        // TODO(peng): support non string dates from yaml
        return {
          id,
          ...matterResult.data,
        };
      })
    );
  
    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
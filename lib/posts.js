import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import slugify from "slugify";

// All post headers
let allPosts, copyright;

const postsDirectory = path.join(process.cwd(), "posts");

const mdRegex = /mdx?$/;

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

export async function getSortedPostsHeaders(filter = false) {
  const publishFilter = function(item) {
    return item.publish ? true : false;
  }
  if (allPosts) {
    return filter ? allPosts.filter(publishFilter): allPosts;
  } else {
    // Get file names under /posts
    const fileNames = getFileList(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx?$/, "");

        // Read markdown file as string
        const fileContents = fs.readFileSync(fileName, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        // TODO(peng): support non string dates from yaml
        return {
          id,
          ...matterResult.data,
          content: matterResult.content,
          readingTime: readingTime(matterResult.content),
        };
      })
    );
    allPosts = allPostsData
      .map((value) => {
        value.date =
          value.date instanceof Date
            ? value.date.toISOString().split("T")[0]
            : value.date;
        value.slug = value.slug
          ? value.slug.toLowerCase()
          : slugify(value.title.toLowerCase());
        return value;
        // Sort posts by date
      })
      .sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });
    // normalize data
    return filter ? allPosts.filter(publishFilter): allPosts;
  }
}

export async function getCopyrightDate() {
  if (copyright) {
    return copyright;
  } else {
  const allPostsHeaders = await getSortedPostsHeaders();
  const years = [0, allPostsHeaders.length - 1].map((edge) =>
    new Date(allPostsHeaders[edge].date).getUTCFullYear()
  );
  return copyright = years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`;
  }
}

export async function getPostSlugs() {
  const allPostHeaders = await getSortedPostsHeaders();
  return allPostHeaders.map((post) => {
    return { params: { slug: post.slug } };
  });
}

export async function getPostData(slug) {
  const postData = await getSortedPostsHeaders();
  return postData[postData.findIndex(p => p.slug === slug)];
}
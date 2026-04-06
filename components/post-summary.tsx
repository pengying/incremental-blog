import React, { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArticleCard from "./article-card";

function usePagination(data: any, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default function PostSummary({
  allPostsHeaders,
  postsPerPage = 6,
}: {
  allPostsHeaders: any;
  postsPerPage?: number;
}) {
  const currPageData = usePagination(allPostsHeaders, postsPerPage);

  const handleChange = (e: any, p: number) => {
    currPageData.jump(p);
  };
  const theme = useTheme();
  const smallSplit = useMediaQuery(theme.breakpoints.down("md")) ? 7 : 5;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <Typography variant="heroName" sx={{ mb: 1 }}>
            Recent writing
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        sx={{
          mt: { xs: 4, md: 5 },
        }}
      >
        {currPageData.currentData().map((pageData: any, index: number) => {
          return (
            <Grid key={pageData.id} xs={(index + 1) % 4 > 1 ? smallSplit : 7}>
              <ArticleCard pageData={pageData}></ArticleCard>
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        sx={{
          mt: { xs: 5, md: 6 },
          mb: { xs: 2, md: 4 },
        }}
        count={Math.ceil(allPostsHeaders.length / postsPerPage)}
        page={currPageData.currentPage}
        onChange={handleChange}
      />
    </>
  );
}

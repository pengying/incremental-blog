import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PostSummary({
  children,
  allPostsHeaders,
  postsPerPage = 6,
}: {
  children: any;
  allPostsHeaders: any;
  postsPerPage?: number;
}) {
  const currPageData = usePagination(allPostsHeaders, postsPerPage);

  const handleChange = (e: any, p: number) => {
    currPageData.jump(p);
  };

  return (
    <>
      <Grid container spacing={4}>
        {currPageData.currentData().map((pageData: any, index: number) => {
          return (
            <Grid key={pageData.id} xs={index % 3 === 0 ? 7 : 4}>
              <CardHero>
                <CardContent>
                  <Typography>{pageData.title}</Typography>
                </CardContent>
              </CardHero>
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        count={Math.ceil(allPostsHeaders.length / postsPerPage)}
        page={currPageData.currentPage}
        onChange={handleChange}
      />
    </>
  );
}

const CardHero = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

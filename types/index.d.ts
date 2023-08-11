import React from 'react';

export interface IAuthor {
  authorsPage?: boolean;
  featured?: boolean;
  name: string;
  slug: string;
  bio: string;
  avatar: {
    image: string;
  };
}

export interface IArticle {
  title?: string;
  slug?: string;
  authors?: IAuthor[];
  excerpt?: string;
  body?: string;
  id: string;
  hero?: string;
  timeToRead?: number;
  date: string;
  secret?: boolean;
}

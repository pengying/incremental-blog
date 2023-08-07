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
import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: "Album";
  user?: Maybe<User>;
  userId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Comment = {
  __typename?: "Comment";
  post?: Maybe<Post>;
  postId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
};

export type Photo = {
  __typename?: "Photo";
  album?: Maybe<Album>;
  albumId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  thumbnailUrl?: Maybe<Scalars["String"]>;
};

export type Post = {
  __typename?: "Post";
  user?: Maybe<User>;
  userId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  album?: Maybe<Album>;
  albums?: Maybe<Array<Maybe<Album>>>;
  photo?: Maybe<Photo>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type RootQueryTypePostArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypePostsArgs = {
  userId?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypeCommentArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypeCommentsArgs = {
  postId?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypeAlbumArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypeAlbumsArgs = {
  userId?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypePhotoArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypePhotosArgs = {
  albumId?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypeTodoArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypeTodosArgs = {
  userId?: Maybe<Scalars["Int"]>;
  completed?: Maybe<Scalars["Boolean"]>;
};

export type RootQueryTypeUserArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type Todo = {
  __typename?: "Todo";
  user?: Maybe<User>;
  userId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  completed?: Maybe<Scalars["Boolean"]>;
};

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};
export type FindPostQueryVariables = {
  postId?: Maybe<Scalars["Int"]>;
};

export type FindPostQuery = { __typename?: "RootQueryType" } & {
  post: Maybe<
    { __typename?: "Post" } & Pick<Post, "id" | "title" | "body"> & {
        user: Maybe<{ __typename?: "User" } & Pick<User, "username" | "email">>;
      }
  >;
};

export type AllPostsQueryVariables = {};

export type AllPostsQuery = { __typename?: "RootQueryType" } & {
  posts: Maybe<
    Array<Maybe<{ __typename?: "Post" } & Pick<Post, "id" | "title" | "body">>>
  >;
};

export const FindPostDocument = gql`
  query findPost($postId: Int) {
    post(id: $postId) {
      id
      title
      body
      user {
        username
        email
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class FindPostGQL extends Apollo.Query<
  FindPostQuery,
  FindPostQueryVariables
> {
  document = FindPostDocument;
}
export const AllPostsDocument = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class AllPostsGQL extends Apollo.Query<
  AllPostsQuery,
  AllPostsQueryVariables
> {
  document = AllPostsDocument;
}

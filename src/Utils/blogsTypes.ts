import React, { ReactNode } from "react";

export type BlogsDataProps = {
  id: number;
  slug?: string;
  title?: string;
  description?: ReactNode;
  subtitle?: string;
  NetlifyBlog?: string;
  imageUrl?: any;
  bgImageUrl?: any;
  likes?: number | string;
  view?: string | number;
  date?: number | string;
  createdAt?: number | string;
  code?: any;
  catagory?: string;
  accordionItems?: any;
  contant?: string;
  icon?: any;
};

// export interface PropsData = { id: React.Key | null | undefined; imageUrl: { src: string | undefined; }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; subtitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; slug: any; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }

import React, { ReactNode } from "react";

export type BlogsDataProps = {
  id: number;
  slug?: string;
  title?: string;
  description?: any;
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
  tags?: string[];
};

/*
 id: 1,
    slug: 'how-to-reslove-react-hydration-error-in-simple-way',
    title: 'Reslove react hydration error in simple way 😍',
    subtitle:
      'Fix Next.js “Text content does not match server-rendered HTML” React hydration error in Next Js',
    NetlifyBlog: 'React Hydration Error',
    catagory: 'html',
    imageUrl: Demo,
    view: Math.floor(Math.random() * 500),
    likes: 5,
    date: 'Thus 15th September',
    tags: ['React', 'Vue'],
    createdAt: new Date(),
    code: 
/*/ //////

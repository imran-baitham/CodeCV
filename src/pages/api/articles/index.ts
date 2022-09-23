// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DemoData } from "../../../mocks/articles/articles";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id?: number;
  title?: string;
  subtitle?: string;
  imageUrl: any;
  likes?: number;
  view?: number;
  date?: string;
  createdAt?: any;
  slug?: string;
  code?: any;
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(DemoData);
}

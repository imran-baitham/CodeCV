import type { NextApiRequest, NextApiResponse } from "next";
import { VideoList } from "../../../mocks/videotutorial";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(VideoList);
}

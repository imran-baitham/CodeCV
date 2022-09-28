import { StaticImageData } from "next/image";

export interface tutorialProps {
  slug: string | string[] | undefined;
  id: number;
  Mentor: StaticImageData;
  title: string | number;
  video: any;
  reviews: string | number;
  pricing: string | number;
  rating: number[];
  start: string;
  paid: boolean;
  completed: boolean;
  like: boolean;
  share: number[];
  MentorName: string;
  MentorImage: StaticImageData;
  subtitle: string;
  discription: string;
  socialShare: number[];
}

import { Skeleton } from "@mantine/core";
/* eslint-disable-next-line */
export interface ViewPipelinePreloaderProps {}
export function ViewProjectPreloader() {
  // eslint-disable-next-line react/jsx-key
  const skeletons = Array.from({ length: 6 }, (_) => <BlogsSkeleton />);
  return (
    <>
      {skeletons.map((skeleton: JSX.Element, index: number) => (
        <div key={index}>{skeleton}</div>
      ))}
    </>
  );
}
function BlogsSkeleton() {
  return (
    <div className="flex flex-col">
      <Skeleton width={"100%"} height={200} mb={3} />
      <Skeleton height={50} width="100%" mb={3} />
      <Skeleton height={10} width="100%" mb={3} />
      <Skeleton height={10} width="100%" mb={3} />
      <Skeleton height={10} width="100%" mb={3} />
      <Skeleton height={10} width="100%" mb={3} />
      <Skeleton height={10} width="100%" mb={3} />
      <div className="flex flex-col-1">
        <Skeleton height={30} width="50%" m={1} />
        <Skeleton height={30} width="50%" m={1} />
      </div>
    </div>
  );
}

export default BlogsSkeleton;

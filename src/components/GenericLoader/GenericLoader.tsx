/* eslint-disable react/jsx-key */
import { Skeleton } from "@mantine/core";

export interface GenericLoaderProps {
  shapes?: Array<Array<string>>;
}
export const GenericLoader = (_props: GenericLoaderProps) => {
  const { shapes } = _props;
  const defaultShapes = [
    ["circle", "line", "line", "line"],
    ["line", "line", "line", "line"],
    ["line", "circle"],
  ];
  const shapesData = shapes ? shapes : defaultShapes;
  return (
    <div className="p-5 flex-1">
      {shapesData.map((shape) => {
        return (
          <div className="flex items-center">
            {shape.map((item) => {
              return (
                <div className="w-full contents">
                  {item === "circle" ? (
                    <Skeleton
                      circle
                      className="w-12 h-12 rounded-full flex-none z-0 m-1"
                    />
                  ) : (
                    <div className="flex flex-1 m-2">
                      <Skeleton
                        height={8}
                        width="99%"
                        className="h-8 w-full z-0"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

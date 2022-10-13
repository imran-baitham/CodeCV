import { Pagination } from "@mantine/core";
import { ReactIcon } from "../ReactIcon/ReactIcon";
import { classNames } from "../Utils/Utils";
import { useState } from "react";

const mock = [
  {
    id: 1,
    projectname: "ProjectApp Name",
    tag: "React Js",
    icon: "FaNodeJs",
    price: 100,
    title: "2 envs",
    subtitle: "3,5 cores - 6Go",
    active: true,
  },
  {
    id: 2,
    projectname: "Another ProjectApp Name",
    tag: "Node Js",
    icon: "FaReact",
    price: 159,
    title: "1 envs",
    subtitle: "3,5 cores - 6Go",
    active: false,
  },
  {
    id: 3,
    projectname: "Database Name",
    tag: "Redis",
    icon: "FaVuejs",
    price: 120,
    title: "Small plan",
    subtitle: "1 vCPU - 6Go - 2GB",
    active: false,
  },
  {
    id: 4,
    projectname: "Another ProjectApp Name",
    tag: "Node Js",
    icon: "FaReact",
    price: 159,
    title: "1 envs",
    subtitle: "3,5 cores - 6Go",
    active: false,
  },
  {
    id: 5,
    projectname: "Database Name",
    tag: "Redis",
    icon: "FaVuejs",
    price: 120,
    title: "Small plan",
    subtitle: "1 vCPU - 6Go - 2GB",
    active: false,
  },
  {
    id: 6,
    projectname: "Database Name",
    tag: "Redis",
    icon: "FaVuejs",
    price: 120,
    title: "Small plan",
    subtitle: "1 vCPU - 6Go - 2GB",
    active: false,
  },
  {
    id: 7,
    projectname: "Another ProjectApp Name",
    tag: "Node Js",
    icon: "FaReact",
    price: 159,
    title: "1 envs",
    subtitle: "3,5 cores - 6Go",
    active: false,
  },
  {
    id: 8,
    projectname: "Database Name",
    tag: "Redis",
    icon: "FaVuejs",
    price: 120,
    title: "Small plan",
    subtitle: "1 vCPU - 6Go - 2GB",
    active: false,
  },
  {
    id: 9,
    projectname: "Another ProjectApp Name",
    tag: "Node Js",
    icon: "FaReact",
    price: 159,
    title: "1 envs",
    subtitle: "3,5 cores - 6Go",
    active: false,
  },
  {
    id: 10,
    projectname: "Database Name",
    tag: "Redis",
    icon: "FaVuejs",
    price: 120,
    title: "Small plan",
    subtitle: "1 vCPU - 6Go - 2GB",
    active: false,
  },
];
export const ProjectsTable = () => {
  const [activePage, setPage] = useState<number>(1);
  const [SortedData, setSortedData] = useState<any>(mock.slice(0, 3));
  const handleChange = (activePage: number) => {
    const init = activePage * 3 - 3;
    const end = activePage * 3 + 0;
    setSortedData(mock.slice(init, end));
    setPage(activePage);
  };
  return (
    <div className="container_main border rounded-md">
      <div className="border-b-2 border-gray-100 py-4 px-10">
        <h2>Projects</h2>
      </div>
      {SortedData.map(
        (mock: {
          id: number;
          projectname: string;
          tag: string;
          icon: any;
          price: number;
          title: string;
          subtitle: string;
          active: boolean;
        }) => {
          return (
            <div className="border-b-2 border-gray-100 p-7" key={mock.id}>
              <div className="w-full flex items-center justify-between">
                <div className="w-full">
                  <div className="flex items-center">
                    <div
                      className={classNames(
                        mock.active ? "bg-red-800 text-white" : "",
                        "rounded-lg p-2"
                      )}
                    >
                      <ReactIcon icon={mock.icon} className="h-12 w-12" />
                    </div>
                    <div className="pl-4">
                      <h1 className="text-xl font-medium">
                        {mock.projectname}
                      </h1>
                      <p className="text-gray-400 text-sm">{mock.tag}</p>
                    </div>
                  </div>
                </div>
                <div className="w-2/3 flex items-center justify-between">
                  <div className="bg-gray-0">
                    <h2 className="font-medium text-gray-800">{mock.title}</h2>
                    <p className="text-gray-400 text-sm">{mock.subtitle}</p>
                  </div>
                  <div>
                    <h1 className="font-normal">{mock.price}&euro;</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
      <div className="flex justify-end p-8">
        <Pagination
          page={activePage}
          onChange={handleChange}
          total={Math.ceil(mock.length / 3)}
          size="lg"
          color={"gray"}
        />
      </div>
    </div>
  );
};

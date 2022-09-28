import React from "react";

function MainDashboardMenu() {
  return <div>MainDashboardMenu</div>;
}

export default MainDashboardMenu;

// import { Box, Center, createStyles, Group, Menu, Text } from "@mantine/core";
// import { classNames } from "../index";
// // import { ChevronDown } from "@wildcard-nde/core-ui";
// import Link from "next/link";
// import { ParsedUrlQuery } from "querystring";
// import { ReactIcon } from "../index";
// /**
//  * Types
//  * ========================================================
//  */

// interface MainDashboardMenuDomainApi {
//   // name: string;
//   sections: {
//     link: { pathname: string; active?: boolean; query?: ParsedUrlQuery };
//     label: string;
//     links: {
//       link: { pathname: string; active?: boolean; query?: ParsedUrlQuery };
//       label: string;
//     }[];
//   }[];
// }

// type MainDashboardMenuContainerProps = Pick<
//   MainDashboardMenuDomainApi,
//   "sections"
// >;
// // "name" |
// /**
//  * Style Component
//  * ========================================================
//  */
// const useStyles = createStyles((theme) => ({
//   inner: {
//     height: 56,
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   dropdown: {
//     [theme.fn.smallerThan("md")]: {
//       display: "block",
//     },
//     display: "none",
//     position: "relative",
//   },

//   links: {
//     [theme.fn.smallerThan("md")]: {
//       display: "none",
//     },
//   },

//   link: {
//     display: "block",
//     lineHeight: 1,
//     padding: "8px 12px",
//     borderRadius: theme.radius.sm,
//     textDecoration: "none",
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[0]
//         : theme.colors.gray[7],
//     fontSize: theme.fontSizes.sm,
//     fontWeight: 500,

//     "&:hover": {
//       cursor: "pointer",
//       backgroundColor:
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[6]
//           : theme.colors.gray[1],
//       color: theme.colors.blue[7],
//       transition:
//         "background-image 0.25s ease-in-out, background-color 0.25s ease-in-out",
//     },
//     "&.active": {
//       color: theme.colors.blue[7],
//     },
//   },

//   linkLabel: {
//     marginRight: 5,
//   },
// }));

// // name,
// export function MainDashboardMenuContainer({
//   sections,
// }: MainDashboardMenuContainerProps) {
//   const { classes } = useStyles();

//   const items = sections.map((link) => {
//     const menuItems = link.links?.map((item) => (
//       <Link href={item.link} key={JSON.stringify(item.link)}>
//         <Menu.Item>{item.label}</Menu.Item>
//       </Link>
//     ));

//     if (menuItems && menuItems.length > 0) {
//       return (
//         <Menu
//           key={"link.label"}
//           trigger="hover"
//           delay={0}
//           transitionDuration={0}
//           placement="end"
//           gutter={1}
//           control={
//             <a
//               href={"/"}
//               className={classes.link}
//               onClick={(event) => event.preventDefault()}
//             >
//               <Center>
//                 <span className={classes.linkLabel}>{link.label}</span>
//                 {/* <ChevronDown size={12} /> */}
//               </Center>
//             </a>
//           }
//         >
//           {menuItems}
//         </Menu>
//       );
//     }

//     return (
//       <Link key={link.label} href={link.link} prefetch={true} shallow={true}>
//         <Box
//           className={classNames(classes.link, link.link.active ? "active" : "")}
//         >
//           {link.label}
//         </Box>
//       </Link>
//     );
//   });

//   return (
//     <Box className={classes.inner}>
//       {/* <Box className="pr-5 mr-5 border-r-2 flex xl:ml-5">
//         <ReactIcon className="text-xl" color="blue" icon="FaPlusSquare" />
//         <Text className="font-bold ml-2">{name}</Text>
//       </Box> */}
//       <Box className={classes.dropdown}>
//         <select
//           className="rounded-md border-0 bg-none pl-2 pr-8 font-medium text-gray-600 focus:ring-0"
//           defaultValue={sections.findIndex((item) => item.label)}
//         >
//           {sections.map((item) => (
//             <option key={item.label}>{item.label}</option>
//           ))}
//         </select>
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
//           <ReactIcon icon="HiChevronDown" className="h-5 w-5 text-gray-500" />
//         </div>
//       </Box>
//       <Group spacing={7} className={classes.links}>
//         {items}
//       </Group>
//     </Box>
//   );
// }

// /**
//  * View Component
//  * ========================================================
//  */

// export const MainDashboardMenu = (props: MainDashboardMenuContainerProps) => {
//   // const { name, sections } = props;
//   const { sections } = props;

//   return (
//     <MainDashboardMenuContainer
//       // name={name || "OrgaName"}
//       sections={sections || []}
//     />
//   );
// };

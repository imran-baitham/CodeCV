import Demo from "../../public/Demo.jpg";
// import VsCode from "../../public/blogsimages/blog1.jpg";
// import VsCodeImg from "../../public/blogsimages/blog2.jpg";
// import VsCodeTest from "../../public/blogsimages/blog3.jpg";
// import ReactImage from "../../public/blogsimages/react.jpg";

export const DemoData = [
  {
    id: 1,
    slug: "Reslove-React-hydration-error-in-simple-way",
    title: "Reslove React hydration error in simple way",
    description:
      "Fix Next.js “Text content does not match server-rendered HTML” React hydration error",
    subtitle: "SunTitle What books you should read in 2022",
    NetlifyBlog: "Netlify Blog",
    imageUrl: Demo,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    code: `//logs code ...
    export { name } from "@mane`,
    catagory: "html",
    content: (
      <div>
        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
        Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
        donec est. Odio penatibus risus viverra tellus varius sit neque erat
        velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
        risus enim. Mattis mauris semper sed amet vitae sed turpis This is the
        first item's accordion body. It is hidden by default, but shown when
        title is clicked. It will also be hidden if the title is clicked again
        or when another item is clicked. You can pass HTML tags in the content
        such as underline tag,
      </div>
    ),
    accordionItems: [
      {
        title: "What is WebThone",
        content: (
          <div>
            <strong>This is the first item's accordion body.</strong> It is
            hidden by default, but shown when title is clicked. It will also be
            hidden if the title is clicked again or when another item is
            clicked. You can pass HTML tags in the content such as{" "}
            <u>underline tag</u>,{" "}
          </div>
        ),
      },
    ],
  },
  {
    id: 2,
    imageUrl: Demo,
    bgImageUrl: Demo,

    title: "We offer sale of products through the you should ",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-booker",
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    catagory: "css",
  },
  {
    id: 3,
    title: "Why reading is Important for our children",
    subtitle:
      "In our app you can see the delay time of your order. What books you should read What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-app",
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    catagory: "javascript",
  },
  {
    id: 4,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    catagory: "react",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 6,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books-you",
    catagory: "tailwint",
    content: (
      <div>
        <strong>This is the first item's accordion body.</strong> It is hidden
        by default, but shown when title is clicked. It will also be hidden if
        the title is clicked again or when another item is clicked. You can pass
        HTML tags in the content such as <u>underline tag</u>,{" "}
      </div>
    ),
  },
  {
    id: 7,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    code: `  // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(DemoData);
    console.warn(data, "data api");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug, "slug test");
    const blogs = data.find(
      (article: { slug: string | string | number | any }) => article.slug === slug
    );
    const code = "Initializing Logs.";`,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books-you-should",
    catagory: "vue",
    content: (
      <div>
        <strong>This is the first item's accordion body.</strong> It is hidden
        by default, but shown when title is clicked. It will also be hidden if
        the title is clicked again or when another item is clicked. You can pass
        HTML tags in the content such as <u>underline tag</u>,{" "}
      </div>
    ),
  },
  {
    id: 8,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books-you-should-read",
    catagory: "angular",
    content: (
      <div>
        <strong>This is the first item's accordion body.</strong> It is hidden
        by default, but shown when title is clicked. It will also be hidden if
        the title is clicked again or when another item is clicked. You can pass
        HTML tags in the content such as <u>underline tag</u>.
      </div>
    ),
  },
  {
    id: 9,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books-you-should-read-in",
    catagory: "html",
  },
  {
    id: 10,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books-you-should-read-in",
    catagory: "html",
  },
  {
    id: 11,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books-you-should-read-in",
    catagory: "html",
  },
  {
    id: 12,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    imageUrl: Demo,
    code: `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`,
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books-you-should-read-in",
    catagory: "react",
  },
];

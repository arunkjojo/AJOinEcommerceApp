export const products = [
  {
    id: "ajoin-p1",
    name: "PRS 35th Aniversary C24",
    prize: "53,000",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    specification: [
      {
        label: "Body Type",
        value: "Solid Body",
      },
      {
        label: "Body Material",
        value: "Solid Body",
      },
      {
        label: "Body Shape",
        value: "Solid Body",
      },
      {
        label: "Number of Strings",
        value: "6",
      },
      {
        label: "Paddle Length",
        value: "10",
      },
      {
        label: "Body Type",
        value: "Solid Body",
      },
    ],
    image: require("../assets/images/products/p1.png"),
  },
  {
    id: "ajoin-p2",
    name: "Suhr Jaguar Classic Guitar",
    prize: "41,700",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    specification: [
      {
        label: "Body Type",
        value: "Solid Body",
      },
      {
        label: "Body Material",
        value: "Solid Body",
      },
      {
        label: "Body Shape",
        value: "Solid Body",
      },
      {
        label: "Number of Strings",
        value: "6",
      },
      {
        label: "Paddle Length",
        value: "10",
      },
      {
        label: "Body Type",
        value: "Solid Body",
      },
    ],
    image: require("../assets/images/products/p2.png"),
  },
  {
    id: "ajoin-p3",
    name: "PRS 35th Aniversary C24",
    prize: "50,499",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    specification:
      "Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.",
    image: require("../assets/images/products/p1.png"),
  },
  {
    id: "ajoin-p4",
    name: "Suhr Jaguar Modern Guitar",
    prize: "48,000",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    specification: [
      {
        label: "Body Type",
        value: "Solid Body",
      },
      {
        label: "Body Material",
        value: "Solid Body",
      },
      {
        label: "Body Shape",
        value: "Solid Body",
      },
      {
        label: "Number of Strings",
        value: "6",
      },
      {
        label: "Paddle Length",
        value: "10",
      },
      {
        label: "Body Type",
        value: "Solid Body",
      },
    ],
    image: require("../assets/images/products/p2.png"),
  },
  {
    id: "ajoin-p5",
    name: "Suhr Jaguar Classic Guitar",
    prize: "28,999",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    specification: [
      {
        label: "Body Type",
        value: "Solid Body",
      },
      {
        label: "Body Material",
        value: "Solid Body",
      },
      {
        label: "Body Shape",
        value: "Solid Body",
      },
      {
        label: "Number of Strings",
        value: "6",
      },
      {
        label: "Paddle Length",
        value: "10",
      },
      {
        label: "Body Type",
        value: "Solid Body",
      },
    ],
    image: require("../assets/images/products/p2.png"),
  },
  {
    id: "ajoin-p6",
    name: "PRS 35th Aniversary C24",
    prize: "53,050.70",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    specification: [
      {
        label: "Body Type",
        value: "Solid Body",
      },
      {
        label: "Body Material",
        value: "Solid Body",
      },
      {
        label: "Body Shape",
        value: "Solid Body",
      },
      {
        label: "Number of Strings",
        value: "6",
      },
      {
        label: "Paddle Length",
        value: "10",
      },
      {
        label: "Body Type",
        value: "Solid Body",
      },
    ],
    image: require("../assets/images/products/p1.png"),
  },
];

export const categories = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "guitar",
    productList: ["ajoin-p1", "ajoin-p2", "ajoin-p3"],
    name: "Guitar",
  },
  {
    id: "bass",
    productList: ["ajoin-p2", "ajoin-p3", "ajoin-p4", "ajoin-p5"],
    name: "Bass",
  },
  {
    id: "effect",
    productList: ["ajoin-p3", "ajoin-p4", "ajoin-p5"],
    name: "Effect",
  },
  {
    id: "piano",
    productList: ["ajoin-p2", "ajoin-p3", "ajoin-p4", "ajoin-p5", "ajoin-p6"],
    name: "Piano",
  },
];

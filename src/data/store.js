import { reactive } from "vue";

export const store = reactive({
  // MENU DATA
  // -----------------------------------------------------
  navMenu:[
    {
      title: "Home",
      href: "#",
      icon: true,
      imgSrc: null
    },
    {
      title: "Pages",
      href: "#",
      icon: false,
      imgSrc: null
    },
    {
      title: "Menu",
      href: "#",
      icon: false,
      imgSrc: null
    },
    {
      title: "Logo",
      href: "#",
      icon: false,
      imgSrc: "/img/h5-logo-divided-header.png"
    },
    {
      title: "Event",
      href: "#",
      icon: false,
      imgSrc: null
    },
    {
      title: "Blog",
      href: "#",
      icon: false,
      imgSrc: null
    },
    {
      title: "Landing",
      href: "#",
      icon: false,
      imgSrc: null
    },
  ],
  shoppingCounter: 5,
  // -----------------------------------------------------
  // Hero DATA
  // -----------------------------------------------------
  heroCarousel:[
    {
      hrefBack: "h3-rev-img-1.png",
      hrefFront: "h3-rev-img-2.png",
    },
    {
      hrefBack: "h3-rev-img-3.png",
      hrefFront: "h3-rev-img-4.png",
    },
    {
      hrefBack: "h3-rev-img-5.png",
      hrefFront: "h3-rev-img-6.png",
    },
  ],
  // -----------------------------------------------------
  // Team DATA
  // -----------------------------------------------------
  team:[
    {
      name: "Danny Hood",
      role: "Chef",
      img: "h1-team-1a-700x700.jpg",
      link:{
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Joanne Parks",
      role: "Wait Staff",
      img: "h1-team-2a.jpg",
      link:{
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Frank Bailey",
      role: "Kitchen Porter",
      img: "h1-team-4a.jpg",
      link:{
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Elizabeth Yoder",
      role: "Dishwasher",
      img: "h1-team-3a.jpg",
      link:{
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    }
  ],
  // -----------------------------------------------------
  // Past event DATA
  // -----------------------------------------------------
  pastEvent:[
    {
      img: "h3-img-1.jpg"
    },
    {
      img: "h3-img-2.jpg"
    },
    {
      img: "h3-img-3.jpg"
    },
    {
      img: "h3-img-4.jpg"
    },
  ],
  // -----------------------------------------------------
  // Post DATA
  // -----------------------------------------------------
  posts:[
    {
      text:"1. FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES",
      source:"WASHINGTON POST 2018"
    },
    {
      text:"2. FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES",
      source:"WASHINGTON POST 2018"
    },
    {
      text:"3. FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES",
      source:"WASHINGTON POST 2018"
    },
  ],
  // -----------------------------------------------------
  // Special menu DATA
  // -----------------------------------------------------
  menuSpecial:[
    {
      title: "Combo piccolo",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, maxime.",
      price: 10,
    },
    {
      title: "Combo mezzo",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, maxime.",
      price: 20,
    },
    {
      title: "Combo grande",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, maxime.",
      price: 30,
    },
  ],
  // -----------------------------------------------------
  // Brands DATA
  // -----------------------------------------------------
  brands:[
    {
      href:"h1-clients-img-4.png",
    },
    {
      href:"h1-clients-img-3.png",
    },
    {
      href:"h1-clients-img-1.png",
    },
    {
      href:"h1-clients-img-2.png",
    },
    {
      href:"h1-clients-img-5.png",
    }
  ],
  // -----------------------------------------------------
  // Pizza list DATA
  // -----------------------------------------------------
  pizzaList:[
    {
      name: "Bismarck",
      img: "h3-product-img-1a-100x100.png",
      newPrice: "$30.00",
      oldPrice: "$25.00",
      isSold: false,
    },
    {
      name: "Fiori di zucca",
      img: "h3-product-img-2a-150x150.png",
      newPrice: "$7.00 - $50.00",
      oldPrice: "",
      isSold: false,
    },
    {
      name: "Valdostana",
      img: "h3-product-img-3a-150x150.png",
      newPrice: "$55.00",
      oldPrice: "",
      isSold: true,
    },
    {
      name: "Pizza tartufata",
      img: "h3-product-img-4a-150x150.png",
      newPrice: "$45.00",
      oldPrice: "",
      isSold: false,
    },
    {
      name: "Francescana",
      img: "h3-product-img-5a-150x150.png",
      newPrice: "$25.00",
      oldPrice: "",
      isSold: false,
    },
    {
      name: "Campagnola",
      img: "h3-product-img-6a-100x100.png",
      newPrice: "$50.00 - $95.00",
      oldPrice: "",
      isSold: false,
    },
  ],
  // -----------------------------------------------------
  // Pizza list DATA
  // -----------------------------------------------------

  pizzaDeals:[
    {
      date: "2023-11-02",
      text: "Traditional Neopolitan pies in Kyoto pizza mercato",
      locality: "204 E. Pizzetta Tommaso",
    },
    {
      date: "2023-11-03",
      text: "Terarazza patio dining space opening this weekend",
      locality: "204 E. Pizzetta Tommaso",
    },
    {
      date: "2023-11-05",
      text: "Sienna private dining room with STÉPHANE BRUNN",
      locality: "204 E. Pizzetta Tommaso",
    },
  ]
})
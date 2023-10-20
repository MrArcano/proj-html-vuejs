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
  ]
})
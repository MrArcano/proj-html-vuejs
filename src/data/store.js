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
})
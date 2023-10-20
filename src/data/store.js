import { reactive } from "vue";

export const store = reactive({
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
})
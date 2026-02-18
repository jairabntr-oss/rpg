// src/theme/siteConfig.ts

export type NavItem = {
  href: string;
  label: string;
  icon: string;
  order: 1 | 2 | 3;
};

export type SiteConfig = {
  title: string;
  tagline: string;
  images: {
    background: string;
    header: string;
    sticker?: string;
  };
  nav: NavItem[];
};

export const siteConfig: SiteConfig = {
  title: "Mi Vida RPG",
  tagline: "Una cloud personal para levelear mi vida.",
  images: {
    background: "/theme/bg.jpg",
    header: "/theme/header.png",
    // sticker: "/theme/sticker.gif",
  },
  nav: [
    // ✅ HOME EN EL MEDIO
    { href: "/blog/", label: "Blog", icon: "/theme/icons/blog.gif", order: 1 },
    { href: "/", label: "Home", icon: "/theme/icons/home.gif", order: 2 },
    { href: "/rpg/", label: "RPG", icon: "/theme/icons/rpg.gif", order: 3 },
  ],
};

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yuuki's Documents",
  description: "various documentations for what I'm working on!",
  lang: "en-US",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documents", link: "/docs/" },
      { text: "CDU - UET", link: "/cdu-uet/" },
      { text: "Resources", link: "https://public.june8th.eu.org/" },
    ],
    logo: "/logo.png",
    sidebar: {
      "/docs/": [
        {
          text: "Introduction",
          link: "/docs/",
          collapsed: false,
          items: [
            {
              text: "Example Module",
              link: "/docs/examples.md",
              items: [],
            },
          ],
        },
      ],
      "/cdu-uet/": [
        {
          text: "CDU - UET",
          link: "/cdu-uet/",
          items: [
            {
              text: "#TODO",
              link: "/cdu-uet/todo.md"
            }
          ]
        },
        {
          text: "Cisco",
          link: "/cdu-uet/cisco/",
          collapsed: false,
          items: [
            {
              text: "Administration",
              link: "/cdu-uet/cisco/administration.md"
            }
          ],
        },
        {
          text: "Ruckus",
          link: "/cdu-uet/ruckus/",
          collapsed: false,
          items: [
            {
              text: "Access Points",
              link: "/cdu-uet/ruckus/ap.md",
            },
            {
              text: "ZoneDirector",
              link: "/cdu-uet/ruckus/zd1200.md",
            },
          ],
        },
        {
          text: "Utilities",
          collapsed: true,
          items: [
            {
              text: "iperf3",
              link: "/cdu-uet/utils/iperf3.md",
            },
            {
              text: "nmap",
              link: "/cdu-uet/utils/nmap.md",
            },
          ],
        },
      ],
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "email", link: "mailto:me@june8th.eu.org" },
      { icon: "facebook", link: "https://www.facebook.com/june8th.dan" },
      { icon: "discord", link: "https://discord.gg/Yz9Q9etfez" },
      { icon: "github", link: "https://github.com/im-yuuki/meomeo-docs" },
    ],
    footer: {
      message: "Released under The Unlicense license.",
      copyright: "Copyright © 2026-present Yuuki"
    },
  },
  lastUpdated: true,
});

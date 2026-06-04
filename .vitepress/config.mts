import { defineConfig } from "vitepress";
import { readFileSync } from "node:fs";

const emailIcon = readFileSync(new URL("../public/icons/email.svg", import.meta.url), "utf-8");

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yuuki's Documents",
  description: "various documentations for what I'm working on!",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    root: {
      label: "English",
      lang: "en-US",
    },
    vi: {
      label: "Tiếng Việt",
      lang: "vi-VN",
    }
  },
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
      { icon: "facebook", link: "https://www.facebook.com/june8th.dan" },
      { icon: "github", link: "https://github.com/im-yuuki/meomeo-docs" },
      { icon: { svg: emailIcon }, link: "mailto:me@june8th.eu.org" },
    ],
    footer: {
      message: "Released under The Unlicense license.",
      copyright: "Copyright © 2026-present Yuuki"
    },
  },
  lastUpdated: true,
});

---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Hello!"
  text: "Yuuki's Documents"
  tagline: "various documentations for what I'm working on!"
  image:
    src: /logo.png
  actions:
    - theme: brand
      text: Documents
      link: /docs/
    - theme: alt
      text: Resources
      link: https://public.june8th.eu.org/

features:
  - icon: 1️⃣
    title: Feature A
    details: 123
  - icon: 2️⃣
    title: Feature B
    details: 456
  - icon: 3️⃣
    title: Feature C
    details: 789
---

<br />

# Contributors

<script setup>
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/im-yuuki.png",
    name: "Yuuki",
    title: "Owner",
    links: [
      { icon: "facebook", link: "https://www.facebook.com/june8th.dan" },
      { icon: "github", link: "https://github.com/im-yuuki" },
    ],
  },
]
</script>

<VPTeamMembers size="small" :members />

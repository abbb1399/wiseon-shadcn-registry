// @ts-check
import { defineConfig, envField } from "astro/config"
import starlight from "@astrojs/starlight"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import starlightThemeBlack from "starlight-theme-black"
import { loadEnv } from "vite"

if (process.env.NODE_ENV == null) throw new Error("NODE_ENV is not set.")

const { GITHUB_REPO_URL, DEPLOY_PRIME_URL, URL } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
)

const SERVER_URL =
  process.env.NODE_ENV === "production" ? URL : DEPLOY_PRIME_URL

// https://astro.build/config
export default defineConfig({
  site: SERVER_URL,
  env: {
    schema: {
      GITHUB_REPO_URL: envField.string({ context: "client", access: "public" }),
      DEPLOY_PRIME_URL: envField.string({
        context: "client",
        access: "public",
      }),
      URL: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
  integrations: [
    starlight({
      components: {
        Head: "./src/components/overrides/head.astro",
      },
      head: [
        // Add ICO favicon fallback for Safari.
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
          },
        },
        // Add dark mode favicon.
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.svg",
            media: "(prefers-color-scheme: dark)",
            type: "image/svg+xml",
          },
        },
        // Add light mode favicon.
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.svg",
            media: "(prefers-color-scheme: light)",
            type: "image/svg+xml",
          },
        },
      ],
      title: "WiseOn Shadcn Registry",
      locales: {
        root: {
          label: "한국어",
          lang: "ko",
        },
      },
      editLink: {
        baseUrl: `${GITHUB_REPO_URL}/tree/main`,
      },
      logo: {
        dark: "./src/assets/logo/light.jpg",
        light: "./src/assets/logo/light.jpg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: GITHUB_REPO_URL,
        },
      ],
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "시작하기",
          items: [
            { label: "소개", slug: "getting-started/introduction" },
            { label: "설치", slug: "getting-started/installation" },
          ],
        },
        {
          label: "컴포넌트",
          autogenerate: { directory: "components" },
        },
      ],
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              label: "문서",
              link: "/getting-started/installation",
            },
            {
              label: "컴포넌트",
              link: "/components",
            },
          ],
          footerText:
            "[Shadcn](https://ui.shadcn.com)을 활용한 공통 컴포넌트 라이브러리",
        }),
      ],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // FIXME: Once starlight supports Zod 4 we can probably remove this.
      // Zod should normally be imported from astro, but I want my code to use its own zod version to reflect the version used in the shadcn components.
      noExternal: ["zod"],
    },
  },
})

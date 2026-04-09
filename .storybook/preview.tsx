import type { Preview, StoryContext, StoryFn } from "@storybook/nextjs-vite";
import "../src/app/globals.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import { handlers } from "../src/__mocks__/handlers";

initialize();

const brands = [
  { value: "crime", title: "Crime" },
  { value: "politics", title: "Politics" },
  { value: "pubtech", title: "Pubtech" },
];

function syncDocumentTheme(context: StoryContext) {
  const currentBrand =
    typeof context.globals.brand === "string"
      ? context.globals.brand
      : "politics";
  const background =
    (context.globals.backgrounds as { value?: string } | undefined)?.value ??
    "light";

  document.documentElement.classList.remove(
    ...brands.map((b) => b.value),
    "themelight",
    "themedark",
  );
  document.documentElement.classList.add(
    currentBrand,
    `theme${background}`,
  );
}

const preview: Preview = {
  globalTypes: {
    brand: {
      name: "Brand",
      description: "Select a brand",
      defaultValue: "politics",
      toolbar: {
        icon: "globe",
        items: brands,
        showName: true,
      },
    },
  },
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      syncDocumentTheme(context);
      return (
        <div className="min-h-screen bg-bg-base-primary">
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    nextjs: {
      /**
       * Tells Storybook to work with the `app` directory in Next.js.
       * For more details
       * @see https://storybook.js.org/docs/get-started/frameworks/nextjs#nextjs-navigation
       */
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: "light", value: "#fff" },
        dark: { name: "dark", value: "#000" },
      },
    },
    msw: {
      handlers,
    },
  },
  loaders: [mswLoader],
};

export default preview;

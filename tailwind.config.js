const defaultTheme = require("tailwindcss/defaultTheme"); // eslint-disable-line
const plugin = require("tailwindcss/plugin"); // eslint-disable-line

const darkmode = plugin(
  function ({ addVariant, e, postcss }) {
    addVariant("dark", ({ container, separator }) => {
      const prefersDarkRule = postcss.atRule({
        name: "media",
        params: "(prefers-color-scheme: dark)",
      });
      prefersDarkRule.append(container.nodes);
      container.append(prefersDarkRule);
      prefersDarkRule.walkRules((rule) => {
        rule.selector = `.${e(`dark${separator}${rule.selector.slice(1)}`)}`;
      });
    });
  },
  () => {
    return {};
  }
);

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    fontFamily: {
      mono: [
        "Menlo",
        "Monaco",
        '"Lucida Console"',
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      width: {
        "72": "18rem",
      },
    },
    variants: {
      backgroundColor: ["responsive", "active", "hover", "focus", "dark"],
    },
  },
  plugins: [
    require("@tailwindcss/ui"),
    require("tailwindcss-hyphens"),
    darkmode,
  ],
};

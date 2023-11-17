/** @type {import("prettier").Options} */
export default {
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  endOfLine: "lf",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
}

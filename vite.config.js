import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    build: {
        lib: {
            entry: resolve(__dirname, "js/main.js"),
            name: "InertiaJsTablesLaravelQueryBuilder",
            fileName: (format) => `inertiajs-tables-laravel-query-builder.${format}.js`,
        },
        rollupOptions: {
            external: [
                /^@inertiajs\/.*/, // Externalize all @inertiajs modules
                /^@popperjs\/.*/,  // Externalize all @popperjs modules
                /^lodash-es\/.*/,  // Externalize all lodash-es modules
                "qs",              // Externalize qs
                "vue",             // Externalize Vue
            ],
            output: {
                globals: {
                    vue: "Vue",
                    "@popperjs/core/lib/popper-lite": "popperLite",
                    "@popperjs/core/lib/modifiers/preventOverflow": "preventOverflow",
                    "@popperjs/core/lib/modifiers/flip": "flip",
                    "lodash-es/uniq": "uniq",
                    "lodash-es/find": "find",
                    "lodash-es/clone": "clone",
                    "lodash-es/filter": "filter",
                    "lodash-es/findKey": "findKey",
                    "lodash-es/forEach": "forEach",
                    "lodash-es/isEqual": "isEqual",
                    "lodash-es/map": "map",
                    "lodash-es/pickBy": "pickBy",
                    qs: "qs",
                },
            },
        },
    },
});

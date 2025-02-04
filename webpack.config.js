/* eslint-disable */
/**
 * DON'T EDIT THIS FILE!!
 *
 * This file is generated to help IntelliJ resolve Webpack aliases. It is never run in the app.
 * If you need to extend your webpack config, put your code in quasar.conf.js into extendWebpack function
 */
module.exports = {
    "mode": "development",
    "devtool": "eval-cheap-module-source-map",
    "resolve": {
        "symlinks": false,
        "alias": {
            "src": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/src",
            "app": "/Users/sergejpatlah/GolandProjects/avem-player-frontend",
            "components": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/src/components",
            "layouts": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/src/layouts",
            "pages": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/src/pages",
            "assets": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/src/assets",
            "boot": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/src/boot",
            "src-bex": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/src-bex",
            "vue$": "vue/dist/vue.runtime.esm-bundler.js",
            "vue-i18n$": "vue-i18n/dist/vue-i18n.esm-bundler.js"
        },
        "extensions": [
            ".mjs",
            ".js",
            ".vue",
            ".json",
            ".wasm"
        ],
        "modules": [
            "node_modules",
            "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules",
            "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/node_modules"
        ]
    },
    "resolveLoader": {
        "modules": [
            "node_modules",
            "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules",
            "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/node_modules"
        ]
    },
    "module": {
        "noParse": {},
        "rules": [
            {
                "test": {},
                "use": [
                    {
                        "loader": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js",
                        "options": {
                            "autoImportComponentCase": "kebab",
                            "isServerBuild": false
                        }
                    },
                    {
                        "loader": "vue-loader",
                        "options": {
                            "compilerOptions": {},
                            "transformAssetUrls": {
                                "base": null,
                                "includeAbsolute": false,
                                "tags": {
                                    "video": [
                                        "src",
                                        "poster",
                                        "src",
                                        "poster"
                                    ],
                                    "source": [
                                        "src",
                                        "src"
                                    ],
                                    "img": [
                                        "src",
                                        "src"
                                    ],
                                    "image": [
                                        "xlink:href",
                                        "href",
                                        "xlink:href",
                                        "href"
                                    ],
                                    "use": [
                                        "xlink:href",
                                        "href",
                                        "xlink:href",
                                        "href"
                                    ],
                                    "QCarouselSlide": "img-src",
                                    "q-carousel-slide": "img-src",
                                    "QChatMessage": "avatar",
                                    "q-chat-message": "avatar",
                                    "QImg": [
                                        "src",
                                        "placeholder-src"
                                    ],
                                    "q-img": [
                                        "src",
                                        "placeholder-src"
                                    ],
                                    "QParallax": "src",
                                    "q-parallax": "src",
                                    "QTimelineEntry": "avatar",
                                    "q-timeline-entry": "avatar"
                                }
                            },
                            "isServerBuild": false
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js"
                    }
                ]
            },
            {
                "test": {},
                "exclude": [
                    null
                ],
                "use": [
                    {
                        "loader": "babel-loader",
                        "options": {
                            "compact": false,
                            "extends": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/babel.config.js"
                        }
                    }
                ]
            },
            {
                "test": {},
                "type": "javascript/auto",
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "esModule": false,
                            "limit": 10000,
                            "name": "img/[name].[ext]"
                        }
                    }
                ]
            },
            {
                "test": {},
                "type": "javascript/auto",
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "esModule": false,
                            "limit": 10000,
                            "name": "fonts/[name].[ext]"
                        }
                    }
                ]
            },
            {
                "test": {},
                "type": "javascript/auto",
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "esModule": false,
                            "limit": 10000,
                            "name": "media/[name].[ext]"
                        }
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 2,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 2,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 3,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": true,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 3,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": true,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 3
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": true,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 4,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": true,
                                    "sassOptions": {
                                        "outputStyle": "expanded"
                                    }
                                }
                            },
                            {
                                "loader": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/lib/webpack/loader.quasar-scss-variables"
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 4,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": true,
                                    "sassOptions": {
                                        "outputStyle": "expanded"
                                    }
                                }
                            },
                            {
                                "loader": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/lib/webpack/loader.quasar-scss-variables"
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 4
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": true,
                                    "sassOptions": {
                                        "outputStyle": "expanded"
                                    }
                                }
                            },
                            {
                                "loader": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/lib/webpack/loader.quasar-scss-variables"
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 4,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": true,
                                    "sassOptions": {
                                        "indentedSyntax": true,
                                        "outputStyle": "expanded"
                                    }
                                }
                            },
                            {
                                "loader": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/lib/webpack/loader.quasar-sass-variables"
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 4,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": true,
                                    "sassOptions": {
                                        "indentedSyntax": true,
                                        "outputStyle": "expanded"
                                    }
                                }
                            },
                            {
                                "loader": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/lib/webpack/loader.quasar-sass-variables"
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 4
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": true,
                                    "sassOptions": {
                                        "indentedSyntax": true,
                                        "outputStyle": "expanded"
                                    }
                                }
                            },
                            {
                                "loader": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/node_modules/@quasar/app/lib/webpack/loader.quasar-sass-variables"
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 3,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 3,
                                    "modules": {
                                        "localIdentName": "[name]_[local]_[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": true,
                                    "importLoaders": 3
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "postcssOptions": {
                                        "sourceMap": true,
                                        "plugins": [
                                            null
                                        ]
                                    }
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "type": "javascript/auto",
                "include": [
                    {}
                ]
            }
        ]
    },
    "optimization": {
        "nodeEnv": false,
        "splitChunks": {
            "cacheGroups": {
                "defaultVendors": {
                    "name": "vendor",
                    "chunks": "all",
                    "priority": -10,
                    "test": {}
                },
                "common": {
                    "name": "chunk-common",
                    "minChunks": 2,
                    "priority": -20,
                    "chunks": "all",
                    "reuseExistingChunk": true
                }
            }
        }
    },
    "plugins": [
        {},
        {
            "definitions": {
                "process.env.NODE_ENV": "\"development\"",
                "process.env.CLIENT": "true",
                "process.env.SERVER": "false",
                "process.env.DEV": "true",
                "process.env.PROD": "false",
                "process.env.DEBUGGING": "true",
                "process.env.MODE": "\"spa\"",
                "process.env.VUE_ROUTER_MODE": "\"hash\"",
                "process.env.VUE_ROUTER_BASE": "\"\"",
                "process.env.APP_URL": "\"http://localhost:8080\"",
                "__VUE_OPTIONS_API__": true,
                "__VUE_PROD_DEVTOOLS__": true,
                "__QUASAR_VERSION__": "\"2.1.0\"",
                "__QUASAR_SSR__": false,
                "__QUASAR_SSR_SERVER__": false,
                "__QUASAR_SSR_CLIENT__": false,
                "__QUASAR_SSR_PWA__": false,
                "__VUE_I18N_FULL_INSTALL__": true,
                "__VUE_I18N_LEGACY_API__": true,
                "__VUE_I18N_PROD_DEVTOOLS__": true,
                "__INTLIFY_PROD_DEVTOOLS__": true
            }
        },
        {
            "profile": false,
            "modulesCount": 5000,
            "dependenciesCount": 10000,
            "showEntries": true,
            "showModules": true,
            "showDependencies": true,
            "showActiveModules": false,
            "opts": {
                "name": "UI",
                "useBars": true
            }
        },
        {},
        {
            "userOptions": {
                "filename": "index.html",
                "template": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/src/index.template.html",
                "minify": false,
                "templateParameters": {
                    "ctx": {
                        "dev": true,
                        "prod": false,
                        "mode": {
                            "spa": true
                        },
                        "modeName": "spa",
                        "target": {},
                        "arch": {},
                        "bundler": {},
                        "debug": false,
                        "vueDevtools": false
                    },
                    "process": {
                        "env": {
                            "NODE_ENV": "development",
                            "CLIENT": true,
                            "SERVER": false,
                            "DEV": true,
                            "PROD": false,
                            "DEBUGGING": true,
                            "MODE": "spa",
                            "VUE_ROUTER_MODE": "hash",
                            "VUE_ROUTER_BASE": "",
                            "APP_URL": "http://localhost:8080"
                        }
                    },
                    "productName": "Avem",
                    "productDescription": "Плеер для музыки Вконтакте"
                },
                "chunksSortMode": "none",
                "inject": true,
                "cache": true
            },
            "version": 5
        },
        {
            "cfg": {
                "ctx": {
                    "dev": true,
                    "prod": false,
                    "mode": {
                        "spa": true
                    },
                    "modeName": "spa",
                    "target": {},
                    "arch": {},
                    "bundler": {},
                    "debug": false,
                    "vueDevtools": false
                },
                "css": [
                    {
                        "path": "src/css/app.scss"
                    }
                ],
                "boot": [
                    {
                        "path": "boot/axios"
                    }
                ],
                "vendor": {},
                "build": {
                    "vueLoaderOptions": {
                        "compilerOptions": {},
                        "transformAssetUrls": {
                            "base": null,
                            "includeAbsolute": false,
                            "tags": {
                                "video": [
                                    "src",
                                    "poster",
                                    "src",
                                    "poster"
                                ],
                                "source": [
                                    "src",
                                    "src"
                                ],
                                "img": [
                                    "src",
                                    "src"
                                ],
                                "image": [
                                    "xlink:href",
                                    "href",
                                    "xlink:href",
                                    "href"
                                ],
                                "use": [
                                    "xlink:href",
                                    "href",
                                    "xlink:href",
                                    "href"
                                ],
                                "QCarouselSlide": "img-src",
                                "q-carousel-slide": "img-src",
                                "QChatMessage": "avatar",
                                "q-chat-message": "avatar",
                                "QImg": [
                                    "src",
                                    "placeholder-src"
                                ],
                                "q-img": [
                                    "src",
                                    "placeholder-src"
                                ],
                                "QParallax": "src",
                                "q-parallax": "src",
                                "QTimelineEntry": "avatar",
                                "q-timeline-entry": "avatar"
                            }
                        }
                    },
                    "showProgress": true,
                    "productName": "Avem",
                    "productDescription": "Плеер для музыки Вконтакте",
                    "extractCSS": false,
                    "sourceMap": true,
                    "minify": false,
                    "distDir": "/Users/sergejpatlah/GolandProjects/avem-player-frontend/dist/spa",
                    "htmlFilename": "index.html",
                    "ssrPwaHtmlFilename": "offline.html",
                    "vueRouterMode": "hash",
                    "transpile": true,
                    "devtool": "eval-cheap-module-source-map",
                    "uglifyOptions": {
                        "compress": {
                            "arrows": false,
                            "collapse_vars": false,
                            "comparisons": false,
                            "computed_props": false,
                            "hoist_funs": false,
                            "hoist_props": false,
                            "hoist_vars": false,
                            "inline": false,
                            "loops": false,
                            "negate_iife": false,
                            "properties": false,
                            "reduce_funcs": false,
                            "reduce_vars": false,
                            "switches": false,
                            "toplevel": false,
                            "typeofs": false,
                            "booleans": true,
                            "if_return": true,
                            "sequences": true,
                            "unused": true,
                            "conditionals": true,
                            "dead_code": true,
                            "evaluate": true
                        },
                        "mangle": {
                            "safari10": true
                        }
                    },
                    "transpileDependencies": [],
                    "sassLoaderOptions": {},
                    "scssLoaderOptions": {},
                    "stylusLoaderOptions": {},
                    "lessLoaderOptions": {},
                    "env": {
                        "NODE_ENV": "development",
                        "CLIENT": true,
                        "SERVER": false,
                        "DEV": true,
                        "PROD": false,
                        "DEBUGGING": true,
                        "MODE": "spa",
                        "VUE_ROUTER_MODE": "hash",
                        "VUE_ROUTER_BASE": "",
                        "APP_URL": "http://localhost:8080"
                    },
                    "gzip": false,
                    "publicPath": "",
                    "vueRouterBase": "",
                    "appBase": "",
                    "APP_URL": "http://localhost:8080"
                },
                "devServer": {
                    "hot": true,
                    "allowedHosts": "all",
                    "compress": true,
                    "open": false,
                    "client": {
                        "overlay": {
                            "warnings": false
                        }
                    },
                    "devMiddleware": {
                        "publicPath": "",
                        "stats": false,
                        "index": "index.html"
                    },
                    "historyApiFallback": false,
                    "https": false,
                    "port": 8080,
                    "host": "0.0.0.0"
                },
                "framework": {
                    "components": [],
                    "directives": [],
                    "plugins": [],
                    "config": {},
                    "autoImportComponentCase": "kebab"
                },
                "animations": [],
                "extras": [
                    "roboto-font",
                    "material-icons"
                ],
                "sourceFiles": {
                    "rootComponent": "src/App.vue",
                    "router": "src/router/index",
                    "store": "src/store/index",
                    "indexHtmlTemplate": "src/index.template.html",
                    "registerServiceWorker": "src-pwa/register-service-worker",
                    "serviceWorker": "src-pwa/custom-service-worker",
                    "electronMain": "src-electron/electron-main",
                    "electronPreload": "src-electron/electron-preload"
                },
                "ssr": {
                    "middlewares": [
                        "",
                        "render"
                    ],
                    "pwa": false,
                    "prodPort": 3000,
                    "maxAge": 2592000000
                },
                "pwa": {
                    "workboxOptions": {},
                    "manifest": {
                        "icons": [
                            {
                                "src": "icons/icon-128x128.png",
                                "sizes": "128x128",
                                "type": "image/png"
                            },
                            {
                                "src": "icons/icon-192x192.png",
                                "sizes": "192x192",
                                "type": "image/png"
                            },
                            {
                                "src": "icons/icon-256x256.png",
                                "sizes": "256x256",
                                "type": "image/png"
                            },
                            {
                                "src": "icons/icon-384x384.png",
                                "sizes": "384x384",
                                "type": "image/png"
                            },
                            {
                                "src": "icons/icon-512x512.png",
                                "sizes": "512x512",
                                "type": "image/png"
                            }
                        ],
                        "name": "Avem",
                        "short_name": "Avem",
                        "description": "Плеер для музыки Вконтакте",
                        "display": "standalone",
                        "orientation": "portrait",
                        "background_color": "#ffffff",
                        "theme_color": "#027be3"
                    },
                    "metaVariables": {},
                    "workboxPluginMode": "GenerateSW"
                },
                "electron": {
                    "unPackagedInstallParams": [],
                    "packager": {},
                    "builder": {
                        "appId": "avem-player-frontend"
                    },
                    "bundler": "packager"
                },
                "cordova": {},
                "capacitor": {
                    "capacitorCliPreparationParams": [],
                    "hideSplashscreen": true
                },
                "bin": {},
                "bex": {
                    "builder": {
                        "directories": {}
                    }
                },
                "htmlVariables": {
                    "ctx": {
                        "dev": true,
                        "prod": false,
                        "mode": {
                            "spa": true
                        },
                        "modeName": "spa",
                        "target": {},
                        "arch": {},
                        "bundler": {},
                        "debug": false,
                        "vueDevtools": false
                    },
                    "process": {
                        "env": {
                            "NODE_ENV": "development",
                            "CLIENT": true,
                            "SERVER": false,
                            "DEV": true,
                            "PROD": false,
                            "DEBUGGING": true,
                            "MODE": "spa",
                            "VUE_ROUTER_MODE": "hash",
                            "VUE_ROUTER_BASE": "",
                            "APP_URL": "http://localhost:8080"
                        }
                    },
                    "productName": "Avem",
                    "productDescription": "Плеер для музыки Вконтакте"
                },
                "supportTS": false,
                "__rootDefines": {
                    "__VUE_OPTIONS_API__": true,
                    "__VUE_PROD_DEVTOOLS__": true,
                    "__QUASAR_VERSION__": "\"2.1.0\"",
                    "__QUASAR_SSR__": false,
                    "__QUASAR_SSR_SERVER__": false,
                    "__QUASAR_SSR_CLIENT__": false,
                    "__QUASAR_SSR_PWA__": false,
                    "__VUE_I18N_FULL_INSTALL__": true,
                    "__VUE_I18N_LEGACY_API__": true,
                    "__VUE_I18N_PROD_DEVTOOLS__": true,
                    "__INTLIFY_PROD_DEVTOOLS__": true
                },
                "__needsAppMountHook": false,
                "__vueDevtools": false,
                "__transpileBanner": "\u001b[32myes (Babel)\u001b[39m",
                "__loadingBar": false,
                "__meta": false,
                "store": true,
                "preFetch": false,
                "__devServer": {
                    "open": true,
                    "openOptions": false
                },
                "__html": {
                    "minifyOptions": false
                },
                "__versions": {},
                "__css": {
                    "quasarSrcExt": "sass"
                }
            }
        },
        {
            "key": "ESLintWebpackPlugin",
            "options": {
                "extensions": [
                    "js",
                    "vue"
                ],
                "emitError": true,
                "emitWarning": true,
                "failOnError": true
            }
        }
    ],
    "performance": {
        "hints": false,
        "maxAssetSize": 500000
    },
    "entry": {
        "app": [
            "/Users/sergejpatlah/GolandProjects/avem-player-frontend/.quasar/client-entry.js"
        ]
    }
}

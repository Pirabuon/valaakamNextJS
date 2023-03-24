"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(193);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/PostCard.js



function PostCard({ post  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: post.uri,
        className: "card",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "cardHolder",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card",
                children: [
                    post.featuredImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "featured-image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            className: "card-image",
                            src: post.featuredImage.node.sourceUrl,
                            alt: post.title,
                            width: 640,
                            height: 480
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "cont",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-title",
                                children: post.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "card-description",
                                children: new Date(post.date).toLocaleDateString()
                            })
                        ]
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const components_PostCard = (PostCard);

// EXTERNAL MODULE: ./components/Navi.js
var Navi = __webpack_require__(106);
// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__(29);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(114);
;// CONCATENATED MODULE: ./pages/index.js







function HomePage({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navi/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Valaakam"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid",
                    children: posts.map((post)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(components_PostCard, {
                            post: post
                        }, post.uri));
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    }));
};
async function getStaticProps() {
    var ref, ref1;
    // Format your GraphQL query using backticks `` and prepend gql
    const GET_POSTS = client_.gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          content
          date
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;
    // Here we make a call with the client and pass in our query string to the
    // configuration objects 'query' property
    const response = await apollo/* client.query */.L.query({
        query: GET_POSTS
    });
    // Once we get the response back, we need to traverse it to pull out the
    // data we want to pass into the HomePage
    const posts = response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : (ref1 = ref.posts) === null || ref1 === void 0 ? void 0 : ref1.nodes;
    // const posts = await getAllPosts()
    return {
        props: {
            posts
        }
    };
}


/***/ }),

/***/ 114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,113], () => (__webpack_exec__(164)));
module.exports = __webpack_exports__;

})();
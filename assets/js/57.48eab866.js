(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{415:function(a,s,t){"use strict";t.r(s);var e=t(11),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[a._v("#")]),a._v(" elasticsearch")]),a._v(" "),t("blockquote",[t("p",[a._v("版本要一致")])]),a._v(" "),t("p",[a._v("安装：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S elasticsearch\n")])])]),t("h2",{attrs:{id:"跨域处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域处理"}},[a._v("#")]),a._v(" 跨域处理")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /etc/elasticsearch\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" elasticsearch.yml\n")])])]),t("p",[a._v("添加")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("http.cors.enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("http.cors.allow-origin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*"')]),a._v("\n")])])]),t("p",[a._v("启动,默认地址9200")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start elasticsreach\n")])])]),t("p",[a._v("安装可视化工具：elasticsearch-head")]),a._v(" "),t("p",[a._v("安装kibana")]),a._v(" "),t("h2",{attrs:{id:"插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[a._v("#")]),a._v(" 插件")]),a._v(" "),t("p",[a._v("下载插件放到"),t("code",[a._v("elasticsreach")]),a._v(" 的"),t("code",[a._v("plugin")]),a._v(" 文件夹即可")]),a._v(" "),t("h2",{attrs:{id:"ik分词器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ik分词器"}},[a._v("#")]),a._v(" ik分词器")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("GET _analyze\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"text"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"orange"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
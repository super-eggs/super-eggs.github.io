(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{410:function(a,t,s){"use strict";s.r(t);var n=s(11),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"yarn-软件包管理器👍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn-软件包管理器👍"}},[a._v("#")]),a._v(" Yarn 软件包管理器👍")]),a._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/04/26/xAth8UeY7XnPlTc.png",alt:"Watercolour of cat riding a rocketship"}})]),a._v(" "),s("p",[a._v("Yarn 对你的代码来说是一个软件包管理器， 你可以通过它使用全世界开发者的代码，或者分享自己的代码给全世界的开发者。Yarn 做这些事情快捷、安全、可靠，所以你不用担心什么。")]),a._v(" "),s("p",[a._v("通过 Yarn 你可以使用其他开发者针对不同问题的解决方案，简化你开发软件的过程。 如果使用过程中遇到问题，你可以将其上报或者贡献解决方案。一旦问题被修复， 你可以使用 Yarn 更新。")]),a._v(" "),s("p",[a._v("代码通过 "),s("strong",[a._v("软件包（package）")]),a._v(" 的方式被共享。一个软件包里包含了所有需要共享的代码，以及一个描述软件包信息的文件 "),s("code",[a._v("package.json")]),a._v(" （叫做 "),s("strong",[a._v("清单")]),a._v("）。")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("h3",{attrs:{id:"homebrew"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[a._v("#")]),a._v(" Homebrew")]),a._v(" "),s("p",[a._v("你可以通过 "),s("a",{attrs:{href:"http://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Homebrew 包管理工具"),s("OutboundLink")],1),a._v(" 安装 Yarn。 如果你还未安装 Node.js，Homebrew 会自动为你安装。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew install yarn\n")])])]),s("p",[a._v("如果你用的是 "),s("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm"),s("OutboundLink")],1),a._v(" 或类似工具，你需要确保 "),s("code",[a._v("PATH")]),a._v(" 变量中列出的 nvm 版本的路径在 Homebrew 安装的 Node.js 路径之前。")]),a._v(" "),s("h3",{attrs:{id:"关于全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于全局安装"}},[a._v("#")]),a._v(" 关于全局安装")]),a._v(" "),s("p",[a._v('在整个系统中使用单个包管理器一直是个问题。为了保持稳定，需要跨环境并使用相同的包管理器版本来执行安装操作，否则我们有可能在版本之间引入意外的重大风险 - 毕竟，这就是为什么首先引入了锁文件（lockfile）的概念！在某种意义上来说，由于 Yarn 是您的第一个项目依赖项，因此"锁定它"也是应该的。')]),a._v(" "),s("p",[a._v("因此，Yarn 2 及更高版本应按项目管理。别担心，改变很小！只需确保首先在全局安装 Yarn 二进制文件即可，我们将使用该二进制文件来生成本地的二进制文件：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install -g yarn\n")])])]),s("p",[a._v("当你你遵循上述说明（从主目录下运行 "),s("code",[a._v("yarn --version")]),a._v(" 命令将输出类似 "),s("code",[a._v("1.22.0")]),a._v(" 的信息），请转到下一节，了解如何在项目中实际启用 Yarn 2。")]),a._v(" "),s("blockquote",[s("p",[a._v("你可能已经注意到全局安装的 Yarn 是属于 “经典版本” 序列（即 1.x）。这是刻意安排的！这一安排的一个额外好处是，为 Yarn 1 配置的项目将继续使用 Yarn 1，而无需突然强制迁移到 Yarn 2.x 的配置格式。如果 Yarn 一开始就被“项目锁定”了，我们就不必这样做了，毕竟是 "),s("a",{attrs:{href:"https://en.wiktionary.org/wiki/hindsight_is_20/20",target:"_blank",rel:"noopener noreferrer"}},[a._v("事后诸葛"),s("OutboundLink")],1),a._v(" 😉")])]),a._v(" "),s("h3",{attrs:{id:"按项目安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按项目安装"}},[a._v("#")]),a._v(" 按项目安装")]),a._v(" "),s("ol",[s("li",[a._v("全局安装 Yarn 的最新版本：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n")])])]),s("ol",[s("li",[a._v("进入你的项目目录：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/path/to/project\n")])])]),s("ol",[s("li",[a._v("运行以下命令：")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" version berry\n")])])]),s("blockquote",[s("p",[a._v('"Berry" 是 Yarn 2 发布序列的代号，同时也是我们的 '),s("a",{attrs:{href:"https://github.com/yarnpkg/berry",target:"_blank",rel:"noopener noreferrer"}},[a._v("代码仓库"),s("OutboundLink")],1),a._v(" 的名称！")])]),a._v(" "),s("ol",[s("li",[a._v("提交新增和修改过的文件。参见 "),s("a",{attrs:{href:"https://www.yarnpkg.cn/getting-started/qa#which-files-should-be-gitignored",target:"_blank",rel:"noopener noreferrer"}},[a._v("哪些文件需要被添加到 .gitignore 配置文件中？"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"更新到最新版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新到最新版本"}},[a._v("#")]),a._v(" 更新到最新版本")]),a._v(" "),s("p",[a._v("如果以后要将 Yarn 更新到最新版本，请运行：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" version latest\n")])])]),s("p",[a._v("Yarn 将从我们的网站下载最新的二进制文件，并将其安装在您的项目中。然后，不要忘记更新依赖项并提交更新结果！")]),a._v(" "),s("h3",{attrs:{id:"安装-master-分支的最新构建版本-谨慎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-master-分支的最新构建版本-谨慎"}},[a._v("#")]),a._v(" 安装 master 分支的最新构建版本（谨慎）")]),a._v(" "),s("p",[a._v("随着时间的推移，即使最新版本也不够新了，那么你可能希望尝试最新的 master 代码分支，以检查 Bug 是否已修复。这在 Yarn 2 中已经变得非常简单了！只需运行以下命令即可：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" version from sources\n")])])]),s("p",[a._v("同样的，还可以使用 "),s("code",[a._v("--branch")]),a._v(" 参数来指定要安装特定的 PR：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" version from sources --branch "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1211")]),a._v("\n")])])]),s("h3",{attrs:{id:"yarn-和-npm-国内镜像-淘宝镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn-和-npm-国内镜像-淘宝镜像"}},[a._v("#")]),a._v(" Yarn 和 NPM 国内镜像（淘宝镜像）")]),a._v(" "),s("p",[a._v("查看当前镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config get registry\n")])])]),s("p",[a._v("设置为淘宝镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npm.taobao.org/\n")])])]),s("p",[a._v("设置为官方镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.yarnpkg.com\n")])])]),s("h2",{attrs:{id:"开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[a._v("#")]),a._v(" 开始使用")]),a._v(" "),s("p",[a._v("现在你已经 "),s("a",{attrs:{href:"https://www.yarnpkg.cn/getting-started/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装了"),s("OutboundLink")],1),a._v(" Yarn，那就开始使用 Yarn 吧。以下列出的是一些最常用的命令。")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("从 Yarn 1 迁移到 Yarn 2")])]),a._v(" "),s("p",[a._v("我们一直在编纂 "),s("a",{attrs:{href:"https://www.yarnpkg.cn/getting-started/migration",target:"_blank",rel:"noopener noreferrer"}},[a._v("迁移指南"),s("OutboundLink")],1),a._v(" 为从 Yarn 1 迁移到 Yarn 2 提供有用的建议。请查看此指南，如果发现尚未涵盖的内容请反馈给我们！如果遇到问题，请查阅 "),s("a",{attrs:{href:"https://www.yarnpkg.cn/features/pnp#compatibility-table",target:"_blank",rel:"noopener noreferrer"}},[a._v("PnP 兼容列表"),s("OutboundLink")],1),a._v(" 并 "),s("a",{attrs:{href:"https://www.yarnpkg.cn/getting-started/migration#if-required-enable-the-node-modules-plugin",target:"_blank",rel:"noopener noreferrer"}},[a._v("开启 node-modules 插件"),s("OutboundLink")],1),a._v("！")])]),a._v(" "),s("h3",{attrs:{id:"显示命令列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示命令列表"}},[a._v("#")]),a._v(" 显示命令列表")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n")])])]),s("h3",{attrs:{id:"初始化一个新项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个新项目"}},[a._v("#")]),a._v(" 初始化一个新项目")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" init\n")])])]),s("h3",{attrs:{id:"安装所有依赖项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装所有依赖项"}},[a._v("#")]),a._v(" 安装所有依赖项")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("h3",{attrs:{id:"添加依赖项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖项"}},[a._v("#")]),a._v(" 添加依赖项")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"将依赖项添加到不同的依赖类别中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将依赖项添加到不同的依赖类别中"}},[a._v("#")]),a._v(" 将依赖项添加到不同的依赖类别中")]),a._v(" "),s("p",[a._v("分别添加到 "),s("code",[a._v("devDependencies")]),a._v("、"),s("code",[a._v("peerDependencies")]),a._v(" 和 "),s("code",[a._v("optionalDependencies")]),a._v(" 类别中：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --dev  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# dev dependencies")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --peer "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# peer dependencies")]),a._v("\n")])])]),s("h3",{attrs:{id:"更新依赖项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新依赖项"}},[a._v("#")]),a._v(" 更新依赖项")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# v1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# v2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" up "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" up "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" up "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"删除依赖项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除依赖项"}},[a._v("#")]),a._v(" 删除依赖项")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" remove "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"更新-yarn-本体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新-yarn-本体"}},[a._v("#")]),a._v(" 更新 Yarn 本体")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" version latest\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" version from sources\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
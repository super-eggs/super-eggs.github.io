(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{413:function(t,a,e){"use strict";e.r(a);var s=e(11),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-使用手册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-使用手册"}},[t._v("#")]),t._v(" Git 使用手册")]),t._v(" "),e("h2",{attrs:{id:"优秀教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优秀教程"}},[t._v("#")]),t._v(" 优秀教程")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git教程 - 廖雪峰的官方网站 (liaoxuefeng.com)"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"安装配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[t._v("#")]),t._v(" 安装配置")]),t._v(" "),e("p",[t._v("自诞生于 2005 年以来，Git 日臻成熟完善，在高度易用的同时，仍然保留着初期设定的目标。它的速度飞快，极其适合管理大项目 。")]),t._v(" "),e("p",[t._v("Git可以在windows、Mac、Linux全平台系统使用。登录 https://git-scm.com/downloads 下载你系统的Git软件并进行安装。")]),t._v(" "),e("blockquote",[e("p",[t._v("windows 用户我更建议安装 git for windows ，下载地址： https://gitforwindows.org/")]),t._v(" "),e("p",[t._v("包信 Git Base 、Git Gui")])]),t._v(" "),e("p",[t._v("安装后通过以下命令查看，如果显示版本号那就是安装成功了")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git --version\n")])])]),e("p",[e("strong",[t._v("Gui")])]),t._v(" "),e("p",[t._v("Gui指Git的图形界面管理软件，https://git-scm.com/downloads/guis 这个网址列出了多个可供基本上所有平台使用的Gui软件。如果要使用Gui而非命令行操作，我推荐 "),e("code",[t._v("sourcetree")]),t._v(" 这也是我多年使用的软件，功能强大、跨平台、免费。")]),t._v(" "),e("blockquote",[e("p",[t._v("新人建议直接使用命令行管理GIT")])]),t._v(" "),e("h3",{attrs:{id:"初始配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始配置"}},[t._v("#")]),t._v(" 初始配置")]),t._v(" "),e("p",[t._v("配置文件为 "),e("code",[t._v("~/.gitconfig")]),t._v(" ，执行任何Git配置命令后文件将自动创建。")]),t._v(" "),e("p",[t._v("第一个要配置的是你个人的用户名称和电子邮件地址。这两条配置很重要，每次 Git 提交时都会引用这两条信息，说明是谁提交了更新，所以会随更新内容一起被永久纳入历史记录：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git config --global user.email "2300071698@qq.com"\ngit config --global user.name "2300071698@qq.com"\n')])])]),e("h3",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("ol",[e("li",[t._v("初始化新仓库 "),e("code",[t._v("git init")])]),t._v(" "),e("li",[t._v("克隆代码 "),e("code",[t._v("git clone https://gitee.com/houdunwang/hdcms.git")])]),t._v(" "),e("li",[t._v("克隆指定分支 "),e("code",[t._v("git clone -b dev git@gitee.com:houdunwang/hdcms.git")])]),t._v(" "),e("li",[t._v("查看状态 "),e("code",[t._v("git status")])]),t._v(" "),e("li",[t._v("提交单个文件 "),e("code",[t._v("git add index.php")])]),t._v(" "),e("li",[t._v("提交所有文件 "),e("code",[t._v("git add -A")])]),t._v(" "),e("li",[t._v("使用通配符提交 "),e("code",[t._v("git add *.js")])]),t._v(" "),e("li",[t._v("提交到仓库中 "),e("code",[t._v("git commit -m '提示信息'")])]),t._v(" "),e("li",[t._v("提交已经跟踪过的文件，不需要执行add "),e("code",[t._v("git commit -a -m '提交信息'")])]),t._v(" "),e("li",[t._v("删除版本库与项目目录中的文件 "),e("code",[t._v("git rm index.php")])]),t._v(" "),e("li",[t._v("只删除版本库中文件但保存项目目录中文件 "),e("code",[t._v("git rm --cached index.php")])]),t._v(" "),e("li",[t._v("修改最后一次提交 "),e("code",[t._v("git commit --amend")])])]),t._v(" "),e("h2",{attrs:{id:"工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作流"}},[t._v("#")]),t._v(" 工作流")]),t._v(" "),e("h3",{attrs:{id:"基础流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础流程"}},[t._v("#")]),t._v(" 基础流程")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先克隆你的项目")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone https://gitee.com/houdunwang/hdcms.git\n")])])])]),t._v(" "),e("li",[e("p",[t._v("开始开发添加新文件hd.js，这时新的文件并没有被版本库管理，可以通过以下命令查看没有被管理的文件")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clean -n\n")])])])]),t._v(" "),e("li",[e("p",[t._v("将所有文件提交到暂存区")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git add .\n")])])]),e("p",[t._v("这时再通过 "),e("code",[t._v("clean")]),t._v(" 命令查看会发现结果为空，即文件已经被版本库管理了")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clean -n\n")])])])]),t._v(" "),e("li",[e("p",[t._v("不小心将工作区中的 hd.js 文件删除了，现在可以将暂存区中的hd.js恢复回来")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout hd.js\n")])])])]),t._v(" "),e("li",[e("p",[t._v("完成工作后创建一个新的提交，并使用 -m 选项说明完成的工作")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git commit -m '购物车开发'\n")])])])]),t._v(" "),e("li",[e("p",[t._v("将代码提交到远程服务器，与同事或其他开发者分享代码")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push \n")])])])])]),t._v(" "),e("h3",{attrs:{id:"分支流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支流程"}},[t._v("#")]),t._v(" 分支流程")]),t._v(" "),e("p",[t._v("大部分情况下不会直接在master分支工作，我们应该保护这个分支是最终开发完成代码健康可交付运行的。")]),t._v(" "),e("p",[t._v("所以功能和缺陷(bug)修复都会新建分支完成，除了这个概念外与基本流程使用是一样的。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("新建支付功能开发分支")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch pay\n")])])])]),t._v(" "),e("li",[e("p",[t._v("切换到新分支开始开发，这里的工作内容与上面的基础流程是一样的")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout pay\n")])])])]),t._v(" "),e("li",[e("p",[t._v("开发完成执行提交")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git commit -m 'H5 支付功能'\n")])])])]),t._v(" "),e("li",[e("p",[t._v("合并分支到master")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("切换到master分支\ngit checkout master\n\n合并pay分支的代码\ngit merge pay\n")])])])]),t._v(" "),e("li",[e("p",[t._v("提交代码到master远程分支")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"基本管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本管理"}},[t._v("#")]),t._v(" 基本管理")]),t._v(" "),e("h3",{attrs:{id:"工作区管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作区管理"}},[t._v("#")]),t._v(" 工作区管理")]),t._v(" "),e("p",[t._v("git clean命令用来从工作目录中删除所有没有跟踪（tracked）过的文件")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("git clean -n")]),t._v("是一次clean的演习, 告诉你哪些文件会被删除")]),t._v(" "),e("li",[e("code",[t._v("git clean -f")]),t._v("删除当前目录下没有tracked过的文件，不会删除.gitignore指定的文件")]),t._v(" "),e("li",[e("code",[t._v("git clean -df")]),t._v("删除当前目录下没有被tracked过的文件和文件夹")])]),t._v(" "),e("h3",{attrs:{id:"暂存区管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#暂存区管理"}},[t._v("#")]),t._v(" 暂存区管理")]),t._v(" "),e("ol",[e("li",[t._v("提交所有修改和新增的文件 "),e("code",[t._v("git add .")])]),t._v(" "),e("li",[t._v("只提交修改文件不提交新文件 "),e("code",[t._v("git add -u")])]),t._v(" "),e("li",[t._v("放弃没有提交的所有修改 "),e("code",[t._v("git checkout .")])]),t._v(" "),e("li",[t._v("放弃指定文件的修改 "),e("code",[t._v("git checkout hd.js")])]),t._v(" "),e("li",[t._v("查看暂存区文件列表 "),e("code",[t._v("git ls-files -s")])]),t._v(" "),e("li",[t._v("查看暂存区文件内容 "),e("code",[t._v("git cat-file -p 6e9a94")])])]),t._v(" "),e("h3",{attrs:{id:"版本库管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本库管理"}},[t._v("#")]),t._v(" 版本库管理")]),t._v(" "),e("p",[t._v("使用reset恢复到历史提交点，重置暂存区与工作目录的内容。")]),t._v(" "),e("ol",[e("li",[t._v("清空工作区和暂存区的改动 "),e("code",[t._v("git reset --hard")])]),t._v(" "),e("li",[t._v("恢复前三个版本 "),e("code",[t._v("git reset --hard HEAD^^^")])]),t._v(" "),e("li",[t._v("保留工作区的内容，把文件差异放进暂存区 "),e("code",[t._v("git reset --soft")])]),t._v(" "),e("li",[t._v("恢复到指定提交版本（先通过 git log 查看版本号) "),e("code",[t._v("git reset --hard b7b73147ca8d6fc20e451d7b36")])])]),t._v(" "),e("h3",{attrs:{id:"分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),e("p",[t._v("分支用于为项目增加新功能或修复Bug时使用。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("创建分支 "),e("code",[t._v("git branch dev")])])]),t._v(" "),e("li",[e("p",[t._v("查看分支 "),e("code",[t._v("git branch")])])]),t._v(" "),e("li",[e("p",[t._v("切换分支 "),e("code",[t._v("git checkout dev")])])]),t._v(" "),e("li",[e("p",[t._v("创建并切换分支 "),e("code",[t._v("git checkout -b feature/bbs")])])]),t._v(" "),e("li",[e("p",[t._v("合并dev分支到master")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout master\ngit merge dev\n")])])])]),t._v(" "),e("li",[e("p",[t._v("删除分支 "),e("code",[t._v("git branch -d dev")])])]),t._v(" "),e("li",[e("p",[t._v("删除没有合并的分支"),e("code",[t._v("git branch -D dev")])])]),t._v(" "),e("li",[e("p",[t._v("删除远程分支 "),e("code",[t._v("git push origin :dev")])])]),t._v(" "),e("li",[e("p",[t._v("查看未合并的分支(切换到master) "),e("code",[t._v("git branch --no-merged")])])]),t._v(" "),e("li",[e("p",[t._v("查看已经合并的分支(切换到master) "),e("code",[t._v("git branch --merged")])])])]),t._v(" "),e("h3",{attrs:{id:"日志查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志查看"}},[t._v("#")]),t._v(" 日志查看")]),t._v(" "),e("ol",[e("li",[t._v("查看日志 "),e("code",[t._v("git log")])]),t._v(" "),e("li",[t._v("查看最近2次提交日志并显示文件差异 "),e("code",[t._v("git log -p -2")])]),t._v(" "),e("li",[t._v("显示已修改的文件清单 "),e("code",[t._v("git log --name-only")])]),t._v(" "),e("li",[t._v("显示新增、修改、删除的文件清单 "),e("code",[t._v("git log --name-status")])]),t._v(" "),e("li",[t._v("一行显示并只显示SHA-1的前几个字符 "),e("code",[t._v("git log --oneline")])])]),t._v(" "),e("h2",{attrs:{id:"效率提升"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#效率提升"}},[t._v("#")]),t._v(" 效率提升")]),t._v(" "),e("h3",{attrs:{id:"定义别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义别名"}},[t._v("#")]),t._v(" 定义别名")]),t._v(" "),e("p",[t._v("通过创建命令别名可以减少命令输入量，有几种方式进行设置")]),t._v(" "),e("p",[e("strong",[t._v("配置文件定义")])]),t._v(" "),e("p",[t._v("修改配置文件 ~/.gitconfig 并添加以下命令别名配置段")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[alias]\n\ta = add .\n\tc = commit\n\ts = status\n\tl = log\n\tb = branch\n")])])]),e("p",[t._v("现在可以使用 "),e("code",[t._v("git a")]),t._v(" 实现 "),e("code",[t._v("git add .")]),t._v(" 一样的效果了。")]),t._v(" "),e("p",[e("strong",[t._v("系统配置定义")])]),t._v(" "),e("p",[t._v("window用户可以修改"),e("code",[t._v("~/.bashrc")]),t._v(" 或 "),e("code",[t._v("~/.bash_profile")]),t._v("文件。")]),t._v(" "),e("p",[t._v("mac/linux修改 "),e("code",[t._v("~/.zshrc")]),t._v(" 文件中定义常用的别名指令，需要首先安装zsh命令行扩展")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('alias gs="git status"\nalias gc="git commit -m "\nalias gl="git log --graph --pretty=format:\'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset\' --abbrev-commit  "\nalias gb="git branch"\nalias ga="git add ."\nalias go="git checkout"\n')])])]),e("p",[t._v("命令行直接使用 "),e("code",[t._v("gs")]),t._v(" 即可以实现 "),e("code",[t._v("git status")]),t._v(" 一样的效果了。")]),t._v(" "),e("blockquote",[e("p",[t._v("window 系统需要使用 git for window 中的 "),e("code",[t._v("Git Base")]),t._v(" 软件")])]),t._v(" "),e("h3",{attrs:{id:"gitignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[t._v("#")]),t._v(" .gitignore")]),t._v(" "),e("p",[t._v(".gitignore用于定义忽略提交的文件")]),t._v(" "),e("ul",[e("li",[t._v("所有空行或者以注释符号 "),e("code",[t._v("＃")]),t._v(" 开头的行都会被 Git 忽略。")]),t._v(" "),e("li",[t._v("匹配模式最后跟反斜杠（"),e("code",[t._v("/")]),t._v("）说明要忽略的是目录。")]),t._v(" "),e("li",[t._v("可以使用标准的 glob 模式匹配。")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".idea\n/vendor\n.env\n/node_modules\n/public/storage\n*.txt\n")])])]),e("h3",{attrs:{id:"冲突解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#冲突解决"}},[t._v("#")]),t._v(" 冲突解决")]),t._v(" "),e("p",[t._v("不同分修改同一个文件或不同开发者修改同一个分支文件都可能造成冲突，造成无法提交代码。")]),t._v(" "),e("ol",[e("li",[t._v("使用编辑器修改冲突的文件")]),t._v(" "),e("li",[t._v("添加暂存 "),e("code",[t._v("git add .")]),t._v(" 表示已经解决冲突")]),t._v(" "),e("li",[t._v("git commit 提交完成")])]),t._v(" "),e("h3",{attrs:{id:"stashing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stashing"}},[t._v("#")]),t._v(" Stashing")]),t._v(" "),e("p",[t._v("当你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作。问题是，你不想提交进行了一半的工作，否则以后你无法回到这个工作点。")]),t._v(" "),e("p",[t._v('"暂存" 可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用。')]),t._v(" "),e("ol",[e("li",[t._v("储藏工作 "),e("code",[t._v("git stash")])]),t._v(" "),e("li",[t._v("查看储藏列表 "),e("code",[t._v("git stash list")])]),t._v(" "),e("li",[t._v("应用最近的储藏 "),e("code",[t._v("git stash apply")])]),t._v(" "),e("li",[t._v("应用更早的储藏 "),e("code",[t._v("git stash apply stash@{2}")])]),t._v(" "),e("li",[t._v("删除储藏"),e("code",[t._v("git stash drop stash@{0}")])]),t._v(" "),e("li",[t._v("应用并删除储藏 "),e("code",[t._v("git stash pop")])])]),t._v(" "),e("h3",{attrs:{id:"tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" Tag")]),t._v(" "),e("p",[t._v("Git 也可以对某一时间点上的版本打上标签 ，用于发布软件版本如 v1.0")]),t._v(" "),e("ol",[e("li",[t._v("添加标签 "),e("code",[t._v("git tag v1.0")])]),t._v(" "),e("li",[t._v("列出标签 "),e("code",[t._v("git tag")])]),t._v(" "),e("li",[t._v("推送标签 "),e("code",[t._v("git push --tags")])]),t._v(" "),e("li",[t._v("删除标签 "),e("code",[t._v("git tag -d v1.0.1")])]),t._v(" "),e("li",[t._v("删除远程标签 "),e("code",[t._v("git push origin :v1.0.1")])])]),t._v(" "),e("h3",{attrs:{id:"打包发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包发布"}},[t._v("#")]),t._v(" 打包发布")]),t._v(" "),e("p",[t._v("对mster分支代码生成压缩包供使用者下载使用，"),e("code",[t._v("--prefix")]),t._v(" 指定目录名")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git archive master --prefix='hdcms/' --format=zip > hdcms.zip\n")])])]),e("h2",{attrs:{id:"远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),e("p",[t._v("下面是最热的"),e("code",[t._v("Github")]),t._v("进行讲解，使用"),e("code",[t._v("码云、codeing")]),t._v(" 等国内仓库使用方式一致，就不在赘述了。")]),t._v(" "),e("h3",{attrs:{id:"创建仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[t._v("#")]),t._v(" 创建仓库")]),t._v(" "),e("p",[t._v("为了完成以下示例，你需要在"),e("code",[t._v("GitHub")]),t._v(" 创建好仓库。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://houdunren.gitee.io/note/assets/img/1526214082941.ad015b93.png",alt:"1526214082941"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://houdunren.gitee.io/note/assets/img/1526214156985.7a278450.png",alt:"1526214156985"}})]),t._v(" "),e("h3",{attrs:{id:"ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://houdunren.gitee.io/note/git/git.html#ssh",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),e("OutboundLink")],1),t._v("SSH")]),t._v(" "),e("p",[e("strong",[t._v("生成秘钥")])]),t._v(" "),e("p",[t._v("使用ssh连接Github发送指令更加安全可靠，也可以免掉每次输入密码的困扰。")]),t._v(" "),e("p",[t._v("在命令行中输入以下代码（windows用户使用 Git Bash）")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ssh-keygen -t rsa\n")])])]),e("p",[t._v("一直按回车键直到结束。系统会在"),e("code",[t._v("~/.ssh")]),t._v(" 目录中生成 "),e("code",[t._v("id_rsa")]),t._v("和"),e("code",[t._v("id_rsa.pub")]),t._v("，即密钥"),e("code",[t._v("id_rsa")]),t._v("和公钥"),e("code",[t._v("id_rsa.pub")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("向GitHub添加秘钥")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://houdunren.gitee.io/note/assets/img/1526219105062-4856466.7379665a.png",alt:"1526219105062"}})]),t._v(" "),e("p",[t._v("点击 "),e("code",[t._v("New SSH key")]),t._v(" 按钮，添加上面生成的 "),e("code",[t._v("id_rsa.pub")]),t._v(" 公钥内容。")]),t._v(" "),e("h3",{attrs:{id:"关联远程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联远程"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://houdunren.gitee.io/note/git/git.html#%E5%85%B3%E8%81%94%E8%BF%9C%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),e("OutboundLink")],1),t._v("关联远程")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("创建本地库并完成初始提交")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('echo "# hd-xj" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\n')])])])]),t._v(" "),e("li",[e("p",[t._v("添加远程仓库")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git remote add origin git@github.com:houdunwang/hd-xj.git\n")])])])]),t._v(" "),e("li",[e("p",[t._v("查看远程库")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" git remote -v\n")])])])]),t._v(" "),e("li",[e("p",[t._v("推送数据到远程仓库")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push -u origin master\n")])])])]),t._v(" "),e("li",[e("p",[t._v("删除远程仓库关联")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git remote rm origin\n")])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("通过 clone 克隆的仓库，本地与远程已经自动关联，上面几步都可以省略。")])]),t._v(" "),e("h3",{attrs:{id:"pull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[t._v("#")]),t._v(" pull")]),t._v(" "),e("p",[t._v("拉取远程主机某个分支的更新，再与本地的指定分支合并。")]),t._v(" "),e("ol",[e("li",[t._v("拉取origin主机的ask分支与本地的master分支合并 "),e("code",[t._v("git pull origin ask:ask")])]),t._v(" "),e("li",[t._v("拉取origin主机的ask分支与当前分支合并 "),e("code",[t._v("git pull origin ask")])]),t._v(" "),e("li",[t._v("如果远程分支与当前本地分支同名直接执行 "),e("code",[t._v("git pull")])])]),t._v(" "),e("h3",{attrs:{id:"push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[t._v("#")]),t._v(" push")]),t._v(" "),e("p",[e("code",[t._v("git push")]),t._v("命令用于将本地分支的更新，推送到远程主机。它的格式与"),e("code",[t._v("git pull")]),t._v("命令相似。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("将当前分支推送到"),e("code",[t._v("origin")]),t._v("主机的对应分支(如果当前分支只有一个追踪分支 ，可省略主机名)")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push origin\n")])])])]),t._v(" "),e("li",[e("p",[t._v("使用"),e("code",[t._v("-u")]),t._v("选项指定一个默认主机 ,这样以后就可以不加任何参数直播使用"),e("code",[t._v("git push")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git push -u origin master\n")])])])]),t._v(" "),e("li",[e("p",[t._v("删除远程"),e("code",[t._v("ask")]),t._v("分支 "),e("code",[t._v("git push origin --delete ask")])])]),t._v(" "),e("li",[e("p",[t._v("本地ask分支关联远程分支并推送 "),e("code",[t._v("git push --set-upstream origin ask")])])])]),t._v(" "),e("h3",{attrs:{id:"多库提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多库提交"}},[t._v("#")]),t._v(" 多库提交")]),t._v(" "),e("p",[t._v("我可以将代码提交到多个远程版本库中。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 增加一个远程库\ngit remote add github git@github.com:houdunwang/coding.git\n\n# 提交到远程库\ngit push github\n")])])]),e("p",[t._v("也可以创建命令一次提交到两个库(注：参考上面的命令设置章节)")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('alias gp="git push & git push github"\n')])])]),e("h2",{attrs:{id:"自动部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动部署"}},[t._v("#")]),t._v(" 自动部署")]),t._v(" "),e("p",[t._v("GitHub设置 "),e("code",[t._v("WebHook")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://houdunren.gitee.io/note/assets/img/1526276371437.88e7de39.png",alt:"1526276371437"}})]),t._v(" "),e("h3",{attrs:{id:"同步脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步脚本"}},[t._v("#")]),t._v(" 同步脚本")]),t._v(" "),e("p",[t._v("项目中添加处理 webhook 的webhook.php文件内容如下，并提交到版本库。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<?php\n// GitHub Webhook Secret.\n// GitHub项目 Settings/Webhooks 中的 Secret\n$secret = "houdunren";\n\n// Path to your respostory on your server.\n// e.g. "/var/www/respostory"\n// 项目地址\n$path = "/www/wwwroot/xj.houdunren.com";\n\n// Headers deliveried from GitHub\n$signature = $_SERVER[\'HTTP_X_HUB_SIGNATURE\'];\n\nif ($signature) {\n  $hash = "sha1=".hash_hmac(\'sha1\', file_get_contents("php://input"), $secret);\n  if (strcmp($signature, $hash) == 0) {\n    echo shell_exec("cd {$path} && /usr/bin/git reset --hard origin/master && /usr/bin/git clean -f && /usr/bin/git pull 2>&1");\n    exit();\n  }\n}\n\nhttp_response_code(404);\n?>\n')])])]),e("h3",{attrs:{id:"站点配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#站点配置"}},[t._v("#")]),t._v(" 站点配置")]),t._v(" "),e("h4",{attrs:{id:"创建站点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建站点"}},[t._v("#")]),t._v(" 创建站点")]),t._v(" "),e("p",[t._v("下面示例我使用的是 "),e("code",[t._v("宝塔")]),t._v(" 主机面板。 "),e("img",{attrs:{src:"https://houdunren.gitee.io/note/assets/img/1526280838031.9af2ade9.png",alt:"1526280838031"}})]),t._v(" "),e("p",[t._v("现在服务器上生成了站点目录 "),e("code",[t._v("/www/wwwroot/xj.houdunren.com")]),t._v(" ，因为目录中存在 "),e("code",[t._v(".user.ini")]),t._v(" 文件（定义站点可以访问的目录权限），造成不能 "),e("code",[t._v("clone")]),t._v(" 代码，将目录随意改名。")]),t._v(" "),e("h4",{attrs:{id:"shell-exec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-exec"}},[t._v("#")]),t._v(" shell_exec")]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("git pull")]),t._v(" 指令需要使用 "),e("code",[t._v("shell_exec")]),t._v(" 函数，删除shell_exec 禁用函数后重启PHP。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://houdunren.gitee.io/note/assets/img/1526281914667.8ec5d311.png",alt:"1526281914667"}})]),t._v(" "),e("h3",{attrs:{id:"clone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clone"}},[t._v("#")]),t._v(" clone")]),t._v(" "),e("p",[t._v("登录服务器并使用 https 协议 clone 项目代码")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ssh root@xj.houdunren.com -p 22\ngit clone https://github.com/houdunwang/xj.git xj.houdunren.com\n")])])]),e("h3",{attrs:{id:"修改权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改权限"}},[t._v("#")]),t._v(" 修改权限")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chown -R www .\nchmod -R g+s .\nsudo -u www git pull\n")])])]),e("p",[t._v("现在向GitHub 推送代码后，服务器将自动执行代码拉取，自动部署功能设置完成了。")]),t._v(" "),e("h2",{attrs:{id:"git的https换为ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git的https换为ssh"}},[t._v("#")]),t._v(" git的https换为ssh")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("查看当前地址")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n")])])])]),t._v(" "),e("li",[e("p",[t._v("设置为ssh地址")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin git@github:USERNAME/OTHERREPOSITROY.git\n")])])])]),t._v(" "),e("li",[e("p",[t._v("修改完成后查看地址，配置为ssh地址就正确了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git remote -v\n")])])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);
# 不止物理。博客使用说明

网站由 GitHub Pages 原生 Jekyll 构建。主页仍是根目录的 `index.html`，教学游戏仍在 `games/`，博客入口是 `/blog/`。文章放在 `_posts/`，无需手动维护文章目录。仓库不使用数据库或付费服务器。

## 文章格式

文件名使用 `年-月-日-英文短名.md`，例如 `2026-10-16-a-film-note.md`。标题可以完全使用中文；文件名里的英文短名让网址更稳定，也避免中文网址被编码后难以分享。保存文件时使用 UTF-8 编码。

复制以下模板，替换内容：

```markdown
---
title: "文章标题"
date: 2026-10-16 12:00:00 +0800
category: 电影手记
tags: [电影, 观后感]
description: "一两句话的摘要，会显示在文章列表和主页。"
lang: zh-CN
---

这里开始写正文。

## 小标题

> 这里是引用。

[超链接文字](https://example.com/)

![图片说明](/assets/posts/example.jpg)
```

`category` 请从这四项中选一项，文字须完全一致：`电影手记`、`杂文与社会观察`、`教育随笔`、`生活与旅行`。`tags` 可以自由填写多个。`description` 建议填写；若省略，会截取正文开头作为摘要。`lang` 默认是 `zh-CN`；英文文章设为 `en`，列表会显示 English。现有主页的中英切换只翻译界面文字，不自动翻译文章正文。网站首页按日期显示最新三篇，博客页自动按新到旧排列全部文章，并按分类列出链接。

图片可上传到 `assets/posts/`。在 Markdown 里用站点绝对路径，例如 `![图片说明](/assets/posts/example.jpg)`；本地运行和 GitHub Pages 都能正常显示。文章支持 Markdown 标题、图片、链接、列表和引用。

## 在 GitHub 网页上创建与发布

1. 打开仓库 `chenghui0706/chenghui0706.github.io`，切到准备修改的开发分支。当前本地开发分支名为 `codex/blog-jekyll`，只有在以后将它推送到 GitHub 后才会出现在网页分支列表中。
2. 打开 `_posts/`，点击 **Add file → Create new file**。输入符合上述格式的文件名，粘贴模板并写正文。
3. 点击 **Commit changes…**。建议提交到开发分支，预览和检查后再合并到 Pages 的发布分支（通常是 `main`）。合并后 GitHub Pages 会自动构建并发布，无需再手动编辑 `blog/index.html` 或主页文章列表。

若要先保存草稿但不发布，可在文章的 `---` 区域加入 `published: false`，以后删除这一行或改为 `published: true` 再提交。不要用未来日期作为草稿办法；GitHub Pages 默认不会显示未来日期的文章。

## 编辑或删除文章

- **编辑：** 在 GitHub 网页打开 `_posts/` 中的文章，点击铅笔图标，修改后点击 **Commit changes…**。可只改正文，也可修改标题、摘要、分类和标签。
- **删除：** 打开文章文件，使用右上角菜单中的 **Delete file**，再提交删除。文章会自动从所有列表消失。若文章有专用图片，请按需另行删除图片文件。
- **更改网址：** 修改文件名中的日期或英文短名会改变文章网址；已分享的旧链接会失效，尽量保持文件名稳定。

`_posts/` 下的 `2026-10-16-welcome.md` 是示例文章，正式发布前可以修改或删除。

## 本地预览与检查

安装 Ruby 与 Bundler 后，在仓库目录运行：

```sh
bundle install
bundle exec jekyll serve
```

访问 `http://127.0.0.1:4000/` 和 `http://127.0.0.1:4000/blog/`。发布前还可运行 `bundle exec jekyll build`，核对 `_site/games/` 是否保留全部游戏文件。`_config.yml` 没有排除 `games/`，游戏目录按普通静态文件直通复制；其中 `games/electromagnetic-rescue/.nojekyll` 是隐藏文件，已通过 `include` 显式保留。不要在根目录添加 `.nojekyll`，否则文章不会构建。未来可在 Decap CMS 配置中把文章集合指向 `_posts/`，现有 front matter 字段已适合表单编辑。


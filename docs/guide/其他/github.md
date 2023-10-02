---
author: xsr2004
date: 2023-10-02
---

# github

## github actions


GitHub Actions 是 GitHub 提供的一项功能，它是一种自动化工具，用于自动执行与 GitHub 仓库相关的各种任务和工作流程。以下是 GitHub Actions 的一些主要用途和功能：

1. **持续集成（CI）和持续部署（CD）：** 你可以配置 GitHub Actions 来自动构建、测试和部署你的应用程序。这意味着每当你推送代码到 GitHub 仓库时，Actions 可以自动运行测试，构建新版本，并将它们部署到生产环境。

2. **自动化工作流程：** 你可以创建自定义工作流程，以自动执行各种任务，例如定期生成文档、定时清理无用文件、自动发布博客文章等。这些工作流程可以根据你的需求进行配置。

3. **自定义触发器：** GitHub Actions 可以根据不同的事件触发，例如代码推送、问题提出或合并请求创建。这使得你可以在特定事件发生时自动执行相关的操作。

4. **多平台支持：** GitHub Actions 支持多种编程语言和操作系统，包括 Windows、macOS 和 Linux。这使得它适用于各种不同类型的项目。

5. **社区共享的工作流程：** GitHub 社区提供了许多现成的工作流程模板，你可以在自己的仓库中使用这些模板，以快速设置和配置常见的自动化任务。

## 将项目部署到actions中自动集成和部署
创建示例工作流程
创建.github/workflows目录，定义一个yml文件，这个是一个项目的工作流文件

```yaml
name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [master]

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0


      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          # 选择要使用的 node 版本
          node-version: 16.17
          # 缓存 npm 依赖
          cache: npm
      - name: 安装依赖
        run: npm ci

      - name: 构建dist
        run: vuepress build docs

      - name: 部署文档到 GitHub Pages 中
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 部署到 master 分支
          branch: master
          # 部署目录为 VuePress 的默认输出目录
          folder: docs/.vuepress/dist
#        env:
#          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
#          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```











。 网页版dev在线项目
t  项目目录树
高级搜索技巧 
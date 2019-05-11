# ブランチを現在のmasterの状態に追いつかせる

## rebase

何に追いつくか指定する。

```sh
$ git branch -a
* dev
  master
  post
  remotes/origin/dev
  remotes/origin/master
  remotes/origin/post
$ git rebase <PARENT_BRANCH>
```

## 参考サイト様

* [はらへり日記 \- Git開発でmasterの内容を開発ブランチに反映させる方法](http://sota1235.com/blog/2015/03/19/git-rebase.html)
# リモートブランチを別名でチェックアウト

## 現在のブランチを確認

```sh
$ git branch -a
  dev
  master
* post
  remotes/origin/dev
  remotes/origin/master
  remotes/origin/post
```

## ブランチを別名で作成

リモートのmasterブランチを元に別名でtestブランチを作成（実態はmaster）

```sh
$ git checkout -b test origin/master
Branch 'test' set up to track remote branch 'master' from 'origin'.
Switched to a new branch 'test'
```

## ブランチを確認

```sh
$ git branch -a
  dev
  master
  post
* test
  remotes/origin/dev
  remotes/origin/master
  remotes/origin/post
```
# ローカルブランチをリモートリポジトリへプッシュ

## ローカルブランチ作成

```sh
$ git branch -a
* master
  remotes/origin/master
$ git checkout -b <BRANCHNAME>
Switched to a new branch '<BRANCHNAME>'
```

この時点ではリモート（GitHub）のリポジトリにはmasterブランチしか存在しない。

## ローカルブランチのプッシュ

```sh
# リモートリポジトリにブランチが存在しないため失敗する。
$ git push
fatal: The current branch <BRANCHNAME> has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin <BRANCHNAME>
# 引数にoriginとブランチ名を指定することでリモートリポジトリにブランチが作成される。
$ git push origin <BRANCHNAME>
Total 0 (delta 0), reused 0 (delta 0)
remote:
remote: Create a pull request for '<BRANCHNAME>' on GitHub by visiting:
remote:      https://github.com/<USERNAME>/<REPOSITORYNAME>/pull/new/<BRANCHNAME>
remote:
To https://github.com/<USERNAME>/<REPOSITORYNAME>.git
 * [new branch]      <BRANCHNAME> -> <BRANCHNAME>
$ git branch -a
  master
* <BRANCHNAME>
  remotes/origin/master
  remotes/origin/<BRANCHNAME>
```
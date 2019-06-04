# リモートの追跡対象ブランチを確認＆設定

## 追跡対象のリモートブランチ確認

```sh
$ git branch -vv
  dev    2ded43c [origin/dev] add git merge command
  master 1ea0166 [origin/master] git checkout command
* post   8be4a30 [origin/post] git checkout rename
```

`[]`内がリモートの追跡対象ブランチ

## 追跡対象のリモートブランチを設定

`origin/master`からローカルへ別のブランチとしてチェックアウトしてリモートへブランチをPUSH  
その後は、PUSHした`origin/hoge`をリモートの追跡対象としたいパターン

```sh
$ git -u origin <BRANCHNAME>
```
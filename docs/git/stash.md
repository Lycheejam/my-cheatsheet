# 変更をコミットせず別ブランチをcheckout

## git stashを使う

```sh
# 現在の変更を隠す
$ git stash
```

これでチェックアウト可能

## stashで隠した変更を元に戻す

```sh
# 隠した変更を元に戻す（表に出す？）
$ git stash pop
```

## その他コマンドメモ

```sh
# スタッシュに履歴（今まで隠したもの）を一覧表示
$ git stash list
# N番目にスタッシュしたファイルの一覧を表示
$ git stash show stash@{N}
# N番目にスタッシュしたファイルの変更差分を表示
$ git stash show -p stash@{N}
# 最新のstashを削除
$ git stash drop
# stashを全て削除
$ git stash clear
```

いつの間にかstashが溜まっていることがある。

## 参考サイト様

* [\[Git\] 今の状態をcommitせずに別ブランチをcheckoutしたい — digape\.com](http://digape.com/201202/git-%E4%BB%8A%E3%81%AE%E7%8A%B6%E6%85%8B%E3%82%92commit%E3%81%9B%E3%81%9A%E3%81%AB%E5%88%A5%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%82%92checkout%E3%81%97%E3%81%9F%E3%81%84/)
* [色々な git stash \- Qiita](https://qiita.com/akasakas/items/768c0b563b96f8a9be9d)
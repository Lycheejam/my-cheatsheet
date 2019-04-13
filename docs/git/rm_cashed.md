# `git add`後の`.gitignore`の反映

## シチュエーション

`git init`後、`git add -A`にてファイルを追加したが`.gitignore`を作成していなかったために  
`node_module`配下もgitの追跡対象として追加されてしまった。  
※commit前である。

## `.gitignore`の編集

`.gitignore`に該当ディレクトリ（or ファイル）を追記

```.gitignore
node_module/
<DIR_NAME>
<FILE_NAME>
```

## `.gitignore`の反映

キャッシュの削除。  
対象がファイルであれば`-r`オプションは不要

```sh
$ git rm --cached -r node_modules/
```

## 参考サイト様

* [git add の取り消し方法と、関連コマンドまとめ \| WWWクリエイターズ](http://www-creators.com/archives/1282)
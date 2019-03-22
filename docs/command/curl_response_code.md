# cURLでレスポンスコードの確認

## Response Headerのみ

```sh
$ curl -I https://hogehoge.hoge
```

## Response Header + Body

```sh
$ curl -i https://hogehoge.hoge
```

## Request Header + Response Header + Body

```sh
$ curl -v https://hogehoge.hoge
```

## 参考サイト様

* [curl コマンド 使い方メモ \- Qiita](https://qiita.com/yasuhiroki/items/a569d3371a66e365316f)
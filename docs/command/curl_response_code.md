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
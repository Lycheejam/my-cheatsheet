# Docker Composeのコマンド

## コンテナ群起動

```sh
$ docker-compose up
```

## コンテナ停止＆削除

```sh
$ docker-compose down
# volumeも削除する場合は-vオプションを使用する。
$ docker-compose down -v
```

## 展開後の`docker-compose.yml`確認

```sh
$ docker-compose config
```

環境変数とか展開された後の`docker-compose.yml`が確認できる。
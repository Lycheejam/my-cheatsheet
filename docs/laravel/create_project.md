# Laravelプロジェクトの新規作成

## 前提

Dockerコンテナで隔離されたcomposer実行環境

* [Lycheejam/laravel\-first\-sample](https://github.com/Lycheejam/laravel-first-sample)

## プロジェクト作成

```sh
$ docker-compose run composer createproject laravel/laravel .
```

`workdir`をプロジェクトを生成したいディレクトリ配下にしているので`.`指定でおｋ
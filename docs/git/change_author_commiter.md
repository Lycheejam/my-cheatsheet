# 過去全てのコミットのAuthorとCommiterを変更する

## 過去全てのコミットのAuthorとCommiterを変更

```sh
$ git filter-branch -f --env-filter "GIT_AUTHOR_NAME='<AUTHORNAME>'; GIT_AUTHOR_EMAIL='<MAIL@ADDR>'; GIT_COMMITTER_NAME='<AUTHORNAME>'; GIT_COMMITTER_EMAIL='<MAIL@ADDR>';" HEAD
```

* `<AUTHORNAME>` = GtiHubのユーザ名
* `<MAIL@ADDR>` = GitHubに登録したメールアドレス

## 変更後のAuthorとCommiterを確認する

```sh
$ git log --pretty=full
```

## 強制的にpush

```sh
$ git push -f
```

## 参考サイト様

* [Gitで過去のコミットのAuthor名とメールアドレスを変更する方法 \- soHTaro\.com](http://sohtaro.com/blog/2017/06/11/git-author-email-replace/)
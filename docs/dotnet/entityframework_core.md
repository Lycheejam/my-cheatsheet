# dotnet CLIでEntityFramework Coreの操作

* NAME = 追加するマイグレーション名

## Database削除

```sh
$ dotnet ef -v database drop
```

## Migration追加

```sh
$ dotnet ef migrations add <NAME>
```

## Migration一覧

```sh
$ dotnet ef migrations list
```

## Migration削除

```sh
$ dotnet ef migrations remove
```

## Databaseアップデート

```sh
$ dotnet ef database update <MIGRATE_NAME>
```

## SQLスクリプト発行

```sh
$ dotnet ef migrations script <MIGRATE_NAME（FROM）> <MIGRATE_NAME（TO）>
```

* FROMは既定で`0`
* FROMだけ指定するとそのマイグレーション移行を対象にする。
  * 未指定の場合、最初のマイグレーションから最後までのSQLスクリプトを発行する。

## 参考サイト様

* [EF Core ツール リファレンス \(\.NET CLI\) \- EF Core \| Microsoft Docs](https://docs.microsoft.com/ja-jp/ef/core/miscellaneous/cli/dotnet)
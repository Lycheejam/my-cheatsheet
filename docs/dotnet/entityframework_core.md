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

## 参考サイト様

* [EF Core ツール リファレンス \(\.NET CLI\) \- EF Core \| Microsoft Docs](https://docs.microsoft.com/ja-jp/ef/core/miscellaneous/cli/dotnet)
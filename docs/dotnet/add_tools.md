# dotnet CLIへツールの追加

* PACKAGE_NAME = NuGetパッケージ名

## ツール追加

```sh
$ dotnet tool install <PACKAGE_NAME> -g
```

## ツール削除

```sh
$ dotnet tool uninstall <PACKAGE_NAME> -g
```

## ツール確認

```sh
$ dotnet tool list -g
```

## オプション

|オプション|概要|
|-|-|
|`-g | --global`|グローバルインストール（基本的につけておけばOK？）|
|`-v | --verbosity`|詳細ログ出力|

## 参考サイト様

* [dotnet tool install コマンド \- \.NET Core CLI \| Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/core/tools/dotnet-tool-install)
* [dotnet tool uninstall コマンド \- \.NET Core CLI \| Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/core/tools/dotnet-tool-uninstall)
* [dotnet tool list コマンド \- \.NET Core CLI \| Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/core/tools/dotnet-tool-list)
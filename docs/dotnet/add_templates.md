# dotnet CLIプロジェクトテンプレートの追加

* TEMPLATE_NAME = テンプレートパッケージ名
  * 普通はNuGetパッケージ名を指定

## テンプレート追加

```sh
$ dotnet new -i <TEMPLATE_NAME>
$ dotnet new --install <TEMPLATE_NAME>
```

### Example

```sh
$ dotnet new -i Amazon.Lambda.Templates
```

## テンプレート削除

```sh
$ dotnet new -u <TEMPLATE_NAME>
$ dotnet new --uninstall <TEMPLATE_NAME>
```

## テンプレート確認

```sh
$ dotnet new -l
$ dotnet new --list
```

## 参考サイト様

* [dotnet new のカスタム テンプレート \#テンプレートをインストールする \- \.NET Core CLI \| Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/core/tools/custom-templates#installing-a-template)
* [\.NET Core C\# Templates - GitHub](https://github.com/NetCoreTemplates)
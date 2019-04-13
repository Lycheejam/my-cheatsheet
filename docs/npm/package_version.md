# package.jsonのPackage Version指定

* PACKAGE_NAME = パッケージ名

## 指定方法一覧

|例|バージョンの範囲|
|-|-|-|
|"<PACKAGE_NAME>": "1.0.0"|完全一致|
|"<PACKAGE_NAME>": ">1.0.0"|より大きい|
|"<PACKAGE_NAME>": ">=1.0.0"|以上|
|"<PACKAGE_NAME>": "<1.0.0"|より小さい|
|"<PACKAGE_NAME>": "<=1.0.0"|以下|
|"<PACKAGE_NAME>": "~1.2.3"|`1.2.3`以上、`1.3.0`未満|
|"<PACKAGE_NAME>": "~1.2"|`1.2.0`以上、`1.3.0`未満|
|"<PACKAGE_NAME>": "~1"|`1.0.0`以上、`2.0.0`未満|
|"<PACKAGE_NAME>": "^1.2.3"|`1.2.3`以上、`2.0.0`未満|
|"<PACKAGE_NAME>": "^0.2.3"|`0.2.3`以上、`0.3.0`未満|
|"<PACKAGE_NAME>": "^0.0.3"|`0.0.3`以上、`0.0.5`未満|
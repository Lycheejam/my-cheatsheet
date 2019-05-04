# 前処理としてのDATABASEとテーブルDROP

## DATABASE DROP

```sql
DROP DATABASE IF EXISTS <DATABASENAME>;
```

存在しないDBに対してDROPをかけるとエラーになる。  
それを回避する。

## TABLE DROP

```sql
DROP TABLE IF EXISTS <DATABASENAME>.<TABLENAME>;
```

DB DROPをしているのであれば実行しなくて良い。

## 参考サイト様

* [データベースを削除する\(DROP DATABASE文\) \| MySQLの使い方](https://www.dbonline.jp/mysql/database/index5.html)
* [テーブルを削除する\(DROP TABLE文\) \| MySQLの使い方](https://www.dbonline.jp/mysql/table/index4.html)
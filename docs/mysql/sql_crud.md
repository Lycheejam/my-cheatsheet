# MySQLでCRUD

`SELECT`以外、`COMMIT`必須。

## INSERT

```sql
-- テーブル名を指定してレコードを挿入（全てのカラムに対してデータを指定する必要がある）
INSERT INTO <TABLENAME> VALUES (COLVALUE1, COLVALUE2);
-- カラムを指定してレコードを挿入（指定しないカラムはNULLとなる）
INSERT INTO <TABLENAME>(COLNAME1, COLNAME2) VALUES (COLVALUE1, COLVALUE2);
```

## SELECT

```sql
SELECT <COLNAME> FROM <TABLENAME>;
SELECT * FROM <TABLENAME>;
```

## UPDATE

```sql
-- where句でupdateするレコードを絞らないとやばい
UPDATE <TABLENAME> SET COLNAME1=COLVALUE1 WHERE hogehoge;

```

## DALETE

```sql
-- whereで削除するレコードを指定
DELETE FROM <TABLENAME> WHERE hogehoge;
```

## 参考サイト様

* [データの追加\(INSERT文\) \- データの追加と削除 \- MySQLの使い方](https://www.dbonline.jp/mysql/insert/index1.html)
* [データの取得\(SELECT文\) \- データの取得 \- MySQLの使い方](https://www.dbonline.jp/mysql/select/index1.html)
* [データの更新\(UPDATE文\) \- データの追加と削除 \- MySQLの使い方](https://www.dbonline.jp/mysql/insert/index7.html)
* [データの削除\(DELETE文\) \- データの追加と削除 \- MySQLの使い方](https://www.dbonline.jp/mysql/insert/index10.html)
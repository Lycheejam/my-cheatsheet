# DBとテーブルの文字コード確認＆設定

* DATABASENAME = データベース名
* TABLENAME = テーブル名
* 文字コード = 文字コード（ex.utf8、utf8mb4...）

## DBスキーマ

### DBスキーマの文字コード確認

```sql
show create database <DATABASENAME>;
```

### DBスキーマの文字コード変更

```sql
alter database <DATABASENAME> default character set <文字コード>;
```

## テーブル

### テーブルの文字コード確認

```sql
show create table <TABLENAME>;
```

### テーブルの文字コード変更

```sql
alter table <TABLENAME> default character set <文字コード>;
```

## 参考サイト様

* [MySQLの文字コードをutf8mb4にする \- light log](http://yamacent.hatenablog.com/entry/2015/06/06/235900)
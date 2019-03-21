# MySQLのDBスキーマとユーザ作成コマンド

## コマンド

```sql
CREATE DATABASE <DATABASENAME>;
CREATE USER '<USERNAME>'@'localhost' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON TODOAPP.* TO '<USERNAME>'@'localhost';
FLUSH PRIVILEGES;
```

* DATABASENAME = データベース名
* USERNAME = ユーザ名
* PASSWORD = パスワード

## `localhost`の指定について

`localhost`についてはユーザにログイン可能なホストを指定する。  
ローカルからのみログインの場合は`localhost`、全てのホストからログインを許可する場合は`%`を指定する。  
IPなども指定可能。

## 検証バージョン

* MySQL 5.7
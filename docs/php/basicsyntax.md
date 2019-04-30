# PHPの基本構文

## PHPの記述方法

PHP構文は`<?php ?>`で囲む。

```php
<?php
  something;
?>
```

## 文法ルール

行末にはセミコロン（`;`）を使う。

```php
$hoge = 'fuga';
something();
echo 'hogehoge';
```

## 文字列

シングルクォート（`'`）、ダブルクォート（`"`）で囲む。

```php
echo 'Hello World';
echo "Hello World";
```

## 変数宣言

変数名には$マークをつける。  
先頭数字はNG → `$1hoge`

```php
$foo = "bar";
```

## 文字列結合

`.（ドット）`で文字列を連結する。

```php
$foobar = $foo.$bar;
$foobar = $foo.'bar';
$foobar .= 'bar'
```

## 変数展開

文字列中の変数を展開できる。

```php
echo "{$name}です。";
```

::: danger
ダブルクオートじゃないと展開されない。  
シングルクォートでは変数がそのまま出力される。（{$name}のまま）
:::

## 条件式

|記号|条件|
|-|-|
|A < B|AはBより小さい|
|A <= B|AはB以下|
|A > B|AはBより小さい|
|A >= B|AはB以上|
|A == B|AはBと等しい（AはBである）|
|A != B|AはBと等しくない（AはBではない）|

### 複数条件

|記号|条件|例|
|-|-|-|
|`||`|OR||
|`&&`|AND||

### 条件式の否定

条件式先頭に`!`をつけることで否定（NOT）となる。

```php
!($hoge == $fuga)
```

### if文

```php
if (hoge == true) {
  something;
}
```

### if~else文

```php
if (hoge > fuga) {
  something;
} else {
  something;
}
```

### if~elseif~else文

```php
if (hoge > fuga) {
  something;
} elseif (hoge > 10) {
  something;
} else {
  something;
}
```

### switch文

```php
switch ($foo) {
  case hoge:
    something;
    break;
  default:
    something;
    break;
}
```

::: tip
`break`句を`case`毎に書かないと後続の処理も実行されてしまう。
:::

## 配列

### 配列の宣言

```php
  $hoges = array('hoge', 'fuga', 'hogefuga');
```

### 配列の末尾に要素を追加

```php
$hoges[] = 'foobar';
```

### インデックスの指定

```php
echo $hoges[0];
```

## 連想配列

### 連想配列の宣言

```php
$hoges = array(
          'key1' => 'value1',
          'key2' => value2
        );
echo $hoges['key1'];
// output -> 'value1'
```

## 繰り返し処理

### for文

```php
for ($i = 0; $i <= $length; $i++) {
  something;
}
```

### while文

```php
$i = 0;
while($i < 100) {
  something;
  $i++;
}
```

### foreach文

#### 配列の場合

```php
foreach($items as $item) {
  something;
}
```

#### 連想配列の場合の構文

```php
foreach ($items as $key => $value) {
  something;
}
//省略形？
foreach ($items as $value) {
  something;
}
```

### break文（句？）

for文、while文、foreach文のループから抜ける。

### continue文（句？）

for文、while文、foreach文のループを1回スキップ。
※continue文よりも後の処理をスキップする。

## 関数

```php
//関数定義
function hoge () {
  something;
}
//呼び出し
hoge();
```

### 仮引数と引数

```php
function hoge ($foo, $bar) {
  //$foo, $barが仮引数
}

hoge(1, 5); //1と5が引数
```

関数側で使用されるものが仮引数  
関数を呼び出すときに与える値を引数

### 戻り値ありの関数定義

```php
function hoge () {
  return something;
}
//戻り値ありの関数呼び出し
$fuga = hoge();
```

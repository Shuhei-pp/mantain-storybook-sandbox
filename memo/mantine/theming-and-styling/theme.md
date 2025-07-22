```
const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
});
```
みたいにlocalStorageから値を取ることもできる

```
defaultColorScheme="dark"
```
もちろんこっちでセットも可能

data-mantine-color-schemeをセットする要素を決める
```
<MantineProvider getRootElement={getRootElement}>
```
classNamesPrefixで静的クラス名のプレフィックスをつけることもできるよ

withStaticClasses:コンポーネントが静的クラスを持つか否か

静的クラス:命名が常に同じクラス（動的はランダム文字列で毎回変わる e2eで有効）
global classes:スコープを絞らないグローバルクラス

```
 withGlobalClasses={false}
 ```
 で<style>に生成させなくなる

  env="test"でenvを設定できる

autoContrastで要素の文字色を変えれる

buttonのfocusりんぐオプションええな

```
theme={{ activeClassName: classes.active }}
```
でアクティブ時のcssを調整できる


```
const theme = createTheme({
  other: {
    charcoal: '#333333',
    primaryHeadingSize: 45,
    fontWeights: {
      bold: 700,
      extraBold: 900,
    },
  },
});
```
みたいに
テーマを設定できる

```
const myTheme = mergeThemeOverrides(theme1, theme2);
```
マージも

```

  const theme = useMantineTheme();
  ```
  で呼び出せる


Colors override must include at least 10 shades per color.
らしいね
https://mantine.dev/theming/colors/

```
const theme = createTheme({
  colors: {
    custom: colorsTuple('#FFC0CB'),
```
多色使わなくてもいける

```
 defaultColorScheme="dark"
 ```
 でデフォルトカラースキーマを設定できる

```
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
```
こんなhooksもある

```
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
```
でcolorを取れる

```

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, sans-serif' },
});
```
font


```

const theme = createTheme({
  headings: {
    // properties for all headings
    fontWeight: '400',
    fontFamily: 'Roboto',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: {
        fontWeight: '100',
        fontSize: 36,
        lineHeight: '1.4',
      },
      h2: { fontSize: 30, lineHeight: '1.5' },
      // ...up to h6
      h6: { fontWeight: '900' },
    },
  },
});
```
こういうことも可能
（まぁ多分使わん）

他のコンポーネントもデフォルトpropsを設定できる


ボタンのprops: color, variant, size and radius

css　propsもある
css module（いつも通り柔軟にやりたいなら）
theme token もあるよ


orderが大事
```js
// ✅ Correct order
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
// ❌ Incorrect order
import '@mantine/dates/styles.css';
import '@mantine/core/styles.css';
```
(coreが先)
```js
// ✅ Correct order - your styles will override Mantine styles
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import classes from './Demo.module.css';

// ❌ Incorrect order – Mantine styles will override your styles
import classes from './Demo.module.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
```
module cssはあと

@layerで順番を変えることもできる
```js
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';

```

@layer base, mantine, components;
で順番も操作できる

cdnもあるよ

https://mantine.dev/styles/css-files-list/ cssファイルの一覧

https://mantine.dev/styles/css-modules/　cssmoduleの利用方法

https://mantine.dev/styles/postcss-preset/　postcssもいける

```
import '@mantine/core/styles.css';
```
で自動的にインポートされる

```
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
```
手動でもいける

https://mantine.dev/styles/css-variables/
mantineのcss変数一覧（createthemeで設定したやつが使える）

emは要素のfont-sizeの何倍
remはrootの何倍

```

    <Box
      style={{
        color: 'var(--mantine-color-red-5)',
        fontSize: rem(12),
      }}
    />
```

みたいなこともできる

```js
breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
```
レスポンシブのブレークポイント

メディアクエリはcss module(tailwindと一緒だね)


hiddenFrom="sm"　 visibleFrom="sm" みたいなpropsもある

https://mantine.dev/styles/responsive/（続き）
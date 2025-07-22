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

```ts
function CustomComponent() {
  return (
    <>
      <div className="mantine-hidden-from-md">Hidden from md</div>
      <div className="mantine-visible-from-xl">Visible from xl</div>
    </>
  );
}
```
これもあるけど基本的にはpropsかなぁ（複雑になりそう）

```ts

function Demo() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
```
こういうhooksもある

```

  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    lg: 'red.9',
  });
```
matchなんてhooksもある
（これがあることで三項演算子地獄を回避できそう）

```ts
function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}
```
これで詳細に設定できるくさいな

style api
```ts
classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
```
みたいにその要素にcssを渡せる

色々あるからその度にdocをよめ

root	m_77c9d27d
inner	m_80f1301b
label	m_811560b9
section	m_a74036a
loader	m_a25b86ee
group	m_80d6d844
groupSection	m_70be2a01
でクラスが見れるよ

data属性
```ts
function Demo() {
  return (
    <Button
      attributes={{
        root: { 'data-test-id': 'root' },
        label: { 'data-test-id': 'label' },
        inner: { 'data-test-id': 'inner' },
      }}
    >
      Button
    </Button>
  );
}
```

disabledでdisable属性つけれるよ

```ts
import { Box } from '@mantine/core';

<Box mod="data-button" />;
// -> <div data-button />

<Box mod={{ opened: true }} />;
// -> <div data-opened />

<Box mod={{ opened: false }} />;
// -> <div />

<Box mod={['button', { opened: true }]} />;
// -> <div data-button data-opened />

<Box mod={{ orientation: 'horizontal' }} />;
// -> <div data-orientation="horizontal" />
```
mod属性はこれ

data-variant属性
```

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
```
呼び出し方法

variantsの型の固め方
```ts
import { ButtonVariant, MantineSize } from '@mantine/core';

type ExtendedButtonVariant = ButtonVariant | 'contrast' | 'radial-gradient';

declare module '@mantine/core' {
  export interface ButtonProps {
    variant?: ExtendedButtonVariant;
  }
}
```
https://mantine.dev/styles/variants-sizes/#variantcolorresolver
みたいな感じでvariantsのプロバイダを作れる

https://mantine.dev/styles/style-props/
にスタイル一覧ある

色調整系の関数置き場
https://mantine.dev/styles/color-functions/


<html dir="rtl">
みたいに書くとright to leftで逆に並べられる？わからん
  const { toggleDirection, dir } = useDirection();
それのhooks版
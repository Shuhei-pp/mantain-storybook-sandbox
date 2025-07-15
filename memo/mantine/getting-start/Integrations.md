
Configure addons
で
```
yarn add --dev storybook-dark-mode @storybook/addon-styling-webpack
```
は実行した方がいいな

```
If .storybook/preview.tsx file does not exist, create it and add the following content:
```
らしいので
ColorSchemeWrapperを追加する

```



import { Button, ButtonProps, ElementProps } from '@mantine/core';

interface MyButtonProps
  extends ButtonProps,
    ElementProps<'button', keyof ButtonProps> {
  height: number;
}
```
こういうカスタムpropsで型をカスタムできる

```
ElementProps<'button', 'color' | 'onClick'>;
```
第二引数でomitをかけれる

MantineThemeはテーマの型

MantineThemeOverride[]はcolorとかの一階層深いプロパティ

MantineColorSchemeはカラースキーマ型

MantineSizeはsmとかのサイズ。

theme.otherとかtheme.colorのオブジェクトの型は上書き可能。(You can also customize size related types for theme.spacing, theme.radius, theme.breakpoints, theme.fontSizes, theme.lineHeights, and theme.shadows similarly.同じように他のもできるよ)

Custom variants typesで書いてある通りボタンのバリアンツはカスタムできるっぽい

vitestは書くときでいいかな
polymorphicとは
root要素を変更できる（例えばbuttonをaに？とか）

renderRoot
```jsx
 <Button
      renderRoot={(props) => (
        <a href="https://mantine.dev/" target="_blank" {...props} />
      )}
>
```
みたいなコールバックもかける

```jsx
    <Button
      renderRoot={({ className, ...others }) => (
        <NavLink
          className={({ isActive }) =>
            cx(className, { 'active-class': isActive })
          }
          {...others}
        />
      )}
    >
```
remixのnavlinkはこんな感じで使う

なんか色々できるのな、
```tsx

const PolymorphicGroup = createPolymorphicComponent<
  'button',
  GroupProps
>(Group);
```

でポリモーフィックコンポーネントを作ることもできるよう

CSS modules is the most performant way to apply styles – this approach generates static CSS that is never re-evaluated. 99% of Mantine components styles are generated with CSS modules – components are optimized out of the box.
らしいな
 css moduleはパフォーマンス丸

 Inline styles (style and styles props) are less performant than CSS modules, but still performant enough to be used in most cases if it is your preferred way of styling in your project.
 インラインでも全然いいパフォーマンス出るよ

```tsx
 function StylePropsArray() {
  const inputs = Array(1000)
    .fill(0)
    .map((_, index) => (
      <TextInput
        key={index}
        label={`Input ${index}`}
        mt={{ base: 10, md: 20 }}
      />
    ));

  return <>{inputs}</>;
}
```
こういうのはパフォーマンスめちゃ悪いらしい

HeadlessMantineProviderがあって
素のスタイルでそこに肉付けできるようなふうになってる
useClickOutside
モーダル、ドロップダウンの外側を押された時の制御hooks


useColorScheme();
テーマプロバイダーのときでてきた。light,darkを取得、セットできる

useElementSize
名前のまんま。

useEventListener
```tsx
 const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
  ```
  イベントリスナを追加できる。

useFileDialog()
ファイル入力hooks。

useDisclosure(false);
```jsx
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>
```
みたいに設定して要素にfocusさせたり。

useFocusTrap
useDisclosureとの差分は？

useFocusWithin
```ts
  const { ref, focused } = useFocusWithin();
```
これがフォーカスっぽいな

useFullscreen
フルスクリーンか否か
```tsx
function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
```

useHotkeys
```js
  useHotkeys([
    ['mod + K', () => spotlight.open()],
    ['mod + J', () => toggleColorScheme()],
    ['mod + shift + alt + X', () => secret()],
  ]);
```
おもろ。こんなんあるんや

useHover
ホバー取得
```tsx
function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
```

useInViewport
Viewport（見えているか）のhooks

useIntersection
一部以上隠れているか全部見えるかのhooks

useLongPress
名前の通り

useMediaQuery
const matches = useMediaQuery('(min-width: 56.25em)');
みたいな書き方が可能

useMouse
要素のマウスの座標取得

useMove
ドラッグで要素を動かせる

useMutationObserver
DOMツリーに加えられた変更の監視？

useOrientation
端末の角度

useReducedMotion
でモーションを好むか判定できるらしい

useResizeObserver
要素の大きさの監視hooks

useScrollIntoView
ターゲットまでスクロールする

useScrollSpy
docでよく見るやつ

useViewportSize
画面さサイズ

useWindowEvent
イベントリスナを追加できる

useWindowScroll
何ピクセル移動させる

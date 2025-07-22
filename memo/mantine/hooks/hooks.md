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


useCounter
カウンタ

useDebouncedCallback
処理の遅延

useDebouncedState
```js
const [value, setValue] = useDebouncedState('', 200);
```
セットしてから反映まで遅延させる

useDebouncedValue
useDebouncedStateのstateじゃないばん

useDisclosure
```js
// Sets opened to true
handlers.open();

// Sets opened to false
handlers.close();

// Sets opened to true if it was false and vice versa
handlers.toggle();
```
みたいな状態管理ができる

useId
uuid生成

useInputState
onchangeでそのまま処理できるstate?

useListState
配列操作が便利なhooks!

useLocalStorage
nextにも同じようなのあったな

useMap
mapを処理しやすい？
useListStateとは違って配列の要素を並べ替えたり、とかよりも中身の書き換えとかで使いそう

usePagination
ページネーション

usePrevious
一回前の値を取っておける

useQueue
キュー便利そう

useSelection
リストの選択状態の管理

useSet
ステートのset版？

useSetState
こっちはuseSetのオブジェクト版

useStateHistory
ステート+履歴(配列のどこを参照しているか、的な）

useThrottledCallback
~~秒に1回、みたいにスロットリングが可能(入力が変わるたびに処理がキューに詰まる)

useThrottledState
入力変わる、処理が起こる時の値を使って処理する

useThrottledValue
stateの値版

useToggle
状態が何個もあって何回も値を切り替える場合に便利。

useUncontrolled
いつ使うんだ？

useValidatedState
stateが更新されるたびに検証してくれる模様

useClipboard
いつもの

useDocumentTitle
documents.titleの変更

useDocumentVisibility
documentsのステータス取得

useEyeDropper
カラーピッカーにあるようなやつ

useFavicon
ファビコン変えれるんだって

useFetch
useTransitonみたい

useHash
ハッシュタグの生成

useHeadroom
ヘッダが見えているか？否か？

useIdle
Idle状態か否か

useInterval
時間測ったりできる　〜秒に一度の処理

useMergedRef
refを一つにまとめることができる？

useNetwork
ネットワークの情報

useOs
os

usePageLeave
このページから何回マウスを離したか

useTextSelection
選択した文字を取得

useTimeout
文字の意味そのまま

useForceUpdate
強制的に再レンダ

useIsFirstRender
最初のレンダリングかどうか

useIsomorphicEffect
サーバーでも使えるuseLayoutEffectの代用！よくエラー出るやつの代わりか

useLogger
ロガー

useMounted
マウントされているか否か

useShallowEffect
ちょっとよくわからんなuseEffectの値がセットされる時の値比較の方法が違うのか？
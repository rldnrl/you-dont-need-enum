# You Don't need enum

## 만약에 여러분이 번들 사이즈에 신경 쓰는 프론트엔드 개발자라면 Enum을 사용하지 말아야합니다.

먼저 `Enum`이 어떻게 Transpile 되는지 확인해봅시다.

```ts
enum MusicEnum {
  Classic = "Classic",
  Jazz = "Jazz",
  Rock = "Rock"
}
```

```js
var MusicEnum;
(function (MusicEnum) {
    MusicEnum["Classic"] = "Classic";
    MusicEnum["Jazz"] = "Jazz";
    MusicEnum["Rock"] = "Rock";
})(MusicEnum || (MusicEnum = {}));
```

보시는 것처럼 IIFE(즉시 실행함수)로 트랜스파일 되는 것을 알 수 있습니다. 이것은 번들 사이즈를 생각한다면 최악의 선택이라고 할 수 있겠네요. 그렇다면 어떤 걸 사용하면 좋을까요? `const enum`이나 String Literal을 사용하세요. JS로 변환되지 않습니다.(sample 폴더를 확인하세요.)

저는 프론트엔드 개발자라면 `Enum`을 사용하지 않아도 된다고 생각합니다. String Literal이 더 편한 점이 많기 때문이죠. 

### app-not-using-enum

```
Page                                       Size     First Load JS
┌ ○ /                                      5.4 kB         75.6 kB
├   └ css/56a27c81fb818cc7.css             751 B
├   /_app                                  0 B            70.2 kB
├ ○ /404                                   194 B          70.4 kB
└ λ /api/hello                             0 B            70.2 kB
+ First Load JS shared by all              70.2 kB
  ├ chunks/framework-6e4ba497ae0c8a3f.js   42 kB
  ├ chunks/main-101cfeaa18eb0e64.js        26.9 kB
  ├ chunks/pages/_app-ca6aae25bc99a05f.js  491 B
  ├ chunks/webpack-69bfa6990bb9e155.js     769 B
  └ css/6577937aa600c64d.css               220 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```

### app-using-enum

```
Page                                       Size     First Load JS
┌ ○ /                                      5.43 kB        75.6 kB
├   └ css/56a27c81fb818cc7.css             751 B
├   /_app                                  0 B            70.2 kB
├ ○ /404                                   194 B          70.4 kB
└ λ /api/hello                             0 B            70.2 kB
+ First Load JS shared by all              70.2 kB
  ├ chunks/framework-6e4ba497ae0c8a3f.js   42 kB
  ├ chunks/main-101cfeaa18eb0e64.js        26.9 kB
  ├ chunks/pages/_app-ca6aae25bc99a05f.js  491 B
  ├ chunks/webpack-69bfa6990bb9e155.js     769 B
  └ css/6577937aa600c64d.css               220 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```

지금은 0.03KB 밖에 차이가 안 나지만, 만약에 아주 많은 파일에 사용하고 있다면 아주 커질 수 있습니다.

## 요약
- 번들 사이즈를 생각한다면, Enum을 사용하지 마세요.
- Enum을 사용하고 싶다면, `const enum`을 사용하세요.
- String Literal도 좋은 대안이 됩니다.
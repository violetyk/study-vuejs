study-vuejs
========

## 基本から
```
./first.html
```
- はじめに
  - https://jp.vuejs.org/v2/guide/index.html
- ライフサイクル
  - https://jp.vuejs.org/v2/guide/instance.html


## htmlのscriptに書く方法から、コンポーネントをimportしてつかう開発へ
- https://qiita.com/sygnas/items/c0228eabbb3157766d5c


- html書いて成果物bundle.jsをscriptタグで読むようにしておく
  - www/paginate.html
- コンポーネントを書く
  - src/paginate.vue
- コンポーネントを使う部分を書く
  - src/app.js
- webpackで成果物bundle.jsを作る為の準備
```
yarn add vue
yarn add vue-loader
yarn add vue-template-compiler
yarn add webpack
```
- 外部のコンポーネントvue-paginateつかってみる
```
yarn add vue-paginate
```
- ビルドの設定を書く
  - webpack.config.js
- `./node_modules/.bin/webpack` でビルド
- (もっと便利にしてみる)
- webpack-dev-serverでファイルの変更を検知して自動リビルド、ローカルサーバ起動
```
yarn add webpack-dev-server
yarn start # package.jsonのscriptsのstartで起動コマンド書いてるので動く
```
- awesome-vueを見てみる
  - https://github.com/vuejs/awesome-vue

## vue.jsをTypeScriptで書く
- やってみる
  - https://qiita.com/nrslib/items/be90cc19fa3122266fd7
```
npm install -g @vue/cli
vue create vue-ts-practice
# yarn add vue-cli だと、2.9.6が入って./node_modules/.bin/vue create できなかった
```

```
Vue CLI v3.1.3
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript for auto-detected polyfills? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
? Pick the package manager to use when installing dependencies: Yarn
```
```
cd vue-ts-practice
yarn serve
```
- vue-cliで色々入ったけど、vue.jsをTypeScriptで書くためのものはどれ？
  - https://mae.chab.in/archives/60167
- export, importとか (exportとexport defaultの使い分けがわからない)
  - http://js.studio-kingdom.com/typescript/handbook/modules
- TypeScriptでVueを書くときのポイント
  - https://mae.chab.in/archives/60167
    - 「data」は クラスのプロパティ になる
    - 「methods」は クラスのメソッド になる
    - 「computed」は get / setアクセサ になる
    - 「データのinput/output」は @props / @emit で書く
    - 「Lifecycle hook」は クラスのメソッド で書く
    - 「vue-property-decoratorで用意されているもの」は デコレーター で書く
    - 「デコレータを使って書けないもの」は @component内にそのまま 書く
    - script要素に lang="ts"属性 をつける

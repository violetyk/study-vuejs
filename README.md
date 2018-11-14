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


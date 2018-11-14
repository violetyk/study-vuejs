<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

    <!-- MyButton.vueで準備したプロパティgreetにHelloという文字列を渡す -->
    <!-- <MyButton greet="Hello"></MyButton> -->

    <!-- プロパティにコロンをつけるとバインディング。greetTextはHomeのgreetText-->
    <MyButton :greet="greetText" @click="onMyButtonClicked"></MyButton>
  </div>
</template>

<script lang="ts">
/*
  https://mae.chab.in/archives/60167

  VueをTypeScript特有のクラス構文で書くためのツールです。
  Vue CLIでプロジェクトを作成する時に、「Use class-style component syntax」をyesと選ぶと
  インストールされます。
  若干詳しく説明すると、ラップしているvue-class-componentによってクラス構文で書けるように
  なっていて、このvue-property-decoratorによってさまざまなデコレータが使えるようになっています。
*/

import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import MyButton from '@/components/MyButton.vue'; // @ is an alias to /src

@Component({
  components: {
    MyButton,
    //HelloWorld,
  },
})
export default class Home extends Vue {
  public greetText: string = "Hello"

  public onMyButtonClicked(){
    this.greetText = "こんにちは";
  }
}
</script>

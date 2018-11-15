<!-- template直下には必ずDOM要素が必要。divで囲ってあげる。 -->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

    <!-- MyButton.vueで準備したプロパティgreetにHelloという文字列を渡す -->
    <!-- <MyButton greet="Hello"></MyButton> -->

    <!-- プロパティにコロンをつけるとバインディング。greetTextはHomeのgreetText-->
    <!-- <MyButton :greet="greetText" @clicked="onMyButtonClicked"></MyButton> -->

    <p>{{greetText}}</p>
    <p>挨拶した回数 : {{count}}回</p>
    <p v-if="isRegulars">いつもありがとうございます</p>
    <p>
        <!-- 上位コンポーネントは@click`ed`でイベントハンドラの登録を行う -->
        <!-- @clicked='コールバックメソッド名' -->
        <!-- <MyButton :greet="greetText" @clicked="onMyButtonClicked"></MyButton> -->
        <!-- スロットを使う -->
        <MyButton :greet="greetText" @clicked="onMyButtonClicked" class="my-button">挨拶する</MyButton>
    </p>
    <p>
        <!-- <ResetButton initialValue="Hello" v-model="greetText" @clicked="onResetButtonClicked"></ResetButton> -->
        <ResetButton v-model="greetText" @clicked="onResetButtonClicked"></ResetButton>
    </p>
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

import { Component, Watch, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import MyButton from '@/components/MyButton.vue'; // @ is an alias to /src
import ResetButton from '@/components/ResetButton.vue'; // @ is an alias to /src

@Component({
  components: {
    MyButton,
    ResetButton,
    //HelloWorld,
  },
})
export default class Home extends Vue {
  private count: number = 0;
  public greetText: string = "Hello"

  public onMyButtonClicked(count: number){ //下位コンポーネントから引数を受け取る
    this.count = count;
    // 算出プロパティで書ける
    // 算出プロパティcomputedはTypeScriptの場合、get/setアクセサで書く
    /*
    if(this.count >=5) {
      this.isRegulars = true;
    }
    */
    this.greetText = "こんにちは";
  }

  public get isRegulars(): boolean {
    /* @Watchをつかうべき
    if(this.count ==5) {
      console.log("常連になりました");
    }
    */
    return this.count >=5;
  }

  /*
  @Watch は文字列で指定されたフィールドやプロパティを監視し、
  その値が変更されるたびに設定されたメソッドを呼び出します。
  */
  @Watch('count')
  public countChanged() {
    if(this.count == 5) {
      console.log("常連になりました!");
    }
  }

  public onResetButtonClicked(){
    console.log('リセットされました');
  }
}
</script>

<template>
  <!-- @イベント名="イベントハンドラ名" -->
  <!-- <button @click="onClick">MyButton</button> -->
  <!-- <button @click="onClick">挨拶する</button> -->
  <!-- スロットを使う classは上位コンポーネントとマージされる-->
  <button @click="onClick" class='primary'>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";

// @ではじまるのはアノテーション。
@Component
export default class MyButton extends Vue {
  private count: number = 0;
  /*
  コンポーネントのデータを下位で利用したい場合はプロパティを使う
  greet?の?はその値が設定されないこともあることの示唆。必ず設定されてることを保証する場合は!
  */
  @Prop()
  public greet?: string;

  /*
  Emitアノテーションが設定されるとイベントとして見なされる
  */
  @Emit()
  public clicked(count: number) {
  }

  public onClick() {
    // alert(this.greet);
    console.log(this.greet);
    // エラーが出る。コンポーネントはプロパティを直接変更してはいけない。イベントを使う。
    // this.greet = "こんにちは";
    this.count++;
    this.clicked(this.count); // Emitアノテーションが設定されたメソッドはイベントとして見なされる
    // この後、上位コンポーネントでclickedへのイベントハンドラの登録をする。@clicked="onMyButtonClicked"
  }

}
</script>

<template>
  <!-- @イベント名="イベントハンドラ名" -->
  <button @click="onClick">MyButton</button>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";

// @ではじまるのはアノテーション。
@Component
export default class MyButton extends Vue {
  /*
  コンポーネントのデータを下位で利用したい場合はプロパティを使う
  greet?の?はその値が設定されないこともあることの示唆。必ず設定されてることを保証する場合は!
  */
  @Prop()
  public greet?: string;

  /*
  @Emitアノテーションが設定されるとイベントとして見なされる
  */
  @Emit()
  public clicked() {
  }

  public onClick() {
    alert(this.greet);
    // console.log(this.greet);
    // エラーが出る。コンポーネントはプロパティを直接変更してはいけない。イベントを使う。
    // this.greet = "こんにちは";
    this.clicked(); // Emitアノテーションが設定されたメソッドはイベントとして見なされる
    // この後、上位コンポーネントでイベントハンドラの登録をする。@clicked="onMyButtonClicked"
  }

}
</script>

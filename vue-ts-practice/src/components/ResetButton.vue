<template>
<button @click="onClick">Reset</button>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";

/*
モデルをバインドするとき、プロパティvalueとイベントinputが必要。
*/

@Component
export default class ResetButton extends Vue {
  // @Prop()
  // @Prop({required:true}) // 必須プロパティ制約
  public initialValue!: string;

  /** モデルバインドのために記述必須 */
  @Prop()
  public value!: string;

 /** ライフサイクルフック。生成された瞬間に呼ばれる*/
  public created() {
    this.initialValue = this.value;
  }


  /** モデルバインドのために記述必須 */
  @Emit()
  public input(value: string) {
  }

  @Emit()
  public clicked() {
  }

  public onClick(){
    this.input(this.initialValue);
    this.clicked(); // 上位コンポーネントへ
  }
}
</script>

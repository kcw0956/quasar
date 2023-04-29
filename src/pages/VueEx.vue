<template class="q-pa-md q-gutter-md">
    <div class ="text-h3">템플릿 문법</div>
	<q-card-section>Message: {{ msg }}</q-card-section>
	<q-separator />
    <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
  <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>

  <q-card-section>
    <q-btn
      unelevated
      color="primary"
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
    ></q-btn>
  </q-card-section>

  <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
  </q-card-section>

  <q-card-section>
    {{ number + 1 }}
</q-card-section>
<q-separator />
<q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
<q-separator />

<q-card-section>
  {{ message.split("").reverse().join("") }}
</q-card-section>


<q-separator />
<q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>

<q-card-section v-if="!seen"> Now you see me </q-card-section>
<q-card-section v-else> on no! </q-card-section>
<q-separator />
<q-btn @click="awesome = !awesome" label="toggle"></q-btn>
<q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
<q-card-section v-else> on no! </q-card-section>
<q-separator />
<q-card-section v-if="type == 'A'"> A </q-card-section>
<q-card-section v-else-if="type === 'B'"> B </q-card-section>
<q-card-section v-else-if="type === 'C'"> C </q-card-section>
<q-card-section v-else> Not A/B/C </q-card-section>
<q-separator />
<q-card-section>
<q-list bordered>
      <q-item
        v-for="item in reversedItems"
        :key="item.id"
        @click="togglePurchased(item)"
        class="rounded-border"
        :class="{strikeout:item.purchased, priority:item.highPriority}"
        dense
        padding
        clickable
        v-ripple
      >
        <q-item-section>
          {{ item.label }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-card-section>

  <q-separator />
</template>
<script>
import { date } from 'quasar'
export default {
  name: "VueEx",
  data() {
    return {
      msg: "hello Vue",
      rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,
      isButtonDisabled: true,
      ok:true,
      linkId: "vue",
	      link: {
	        to: "http://vuejs.org",
	        title: "뷰 공식 사이트",
	        label: "Vuejs.org",
          },
          number: 1000,
	      message:
	        "개인적인 것이 가장 창의적인 것이다.",
	      id: "genie",
          
          
          seen: true,
	      awesome: true,
	      type: "B",
        
          methods: {
            calculateDate() {
                setInterval(() => {
                    const timeStamp = Date.now();
                    console.log('timeStamp=======', timeStamp)
                    const formattedString = date.formatDate(
                        timeStamp,
                        "YYYY-MM-DD HH:mm:ss"
                    );
                    this.str = formattedString;
                }, 10000);
                return this.str;
                
            },
          },

                items : [
              { id: 1, label: "10 party hats", purchased: true, highPriority: false },
              { id: 2, label: "2 board games", purchased: true, highPriority: false },
              { id: 3, label: "20 cups", purchased: false, highPriority: true },
            ]
          }
        },
        computed : {
          reversedItems(){
            return [...this.items].reverse();
          }
        },
        methods :{
          togglePurchased(item){
            item.purchased = !item.purchased;
          }
        }
  }

</script>

<style>
.strikeout{
  text-decoration: line-through;
  color: #b8c2cc;
}
.priority{
  color: #de751f;
  font-weight: 600;
}
</style>
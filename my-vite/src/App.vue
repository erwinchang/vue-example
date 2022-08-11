<script>
export default{
  data(){
    return {
      checkedName: []
    }
  }
}
</script>

<template>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedName" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedName" />
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedName" />
  <label for="mike">Mike</label>
  <input type="checkbox" id="mary" value="Mary" v-model="checkedName" />
  <label for="mary">Mary</label>
  <br />
  <p>Checked name: {{ checkedName }}</p>
</template>

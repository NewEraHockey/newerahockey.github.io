<template>
    <div class="page">
        <h3 @click="getResults">The Results</h3>
        
        <sorted-table :values="values">
            <thead class="resultTable">
              <tr>
                <th scope="col"  style="width: 500px;">
                  <sort-link name="team">Team</sort-link>
                </th>
                <th scope="col"  >
                  <sort-link name="appearence">Appearence</sort-link>
                </th>
                <th scope="col"  >
                  <sort-link name="taste">Taste</sort-link>
                </th>
                <th scope="col"  >
                    <sort-link name="creativity">Creativity</sort-link>
                </th>
                <th scope="col"  style="width: 300px;">
                    <sort-link name="portion" >Portion Size</sort-link>
                </th>
                <th scope="col"  >
                    <sort-link name="texture">Texture</sort-link>
                </th>
                <th scope="col" >
                    <sort-link name="total">Total</sort-link>
                </th>
              </tr>
            </thead>
            <tbody slot="body" slot-scope="sort">
              <tr v-for="value in sort.values" :key="value.id">
                <td>{{ value.team }}</td>
                <td>{{ value.appearence }}</td>
                <td>{{ value.taste }}</td>
                <td>{{ value.creativity }}</td>
                <td>{{ value.portion }}</td>
                <td>{{ value.texture }}</td>
                <td>{{ value.total }}</td>
              </tr>
            </tbody>
          </sorted-table>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios';
    import SortedTablePlugin from "vue-sorted-table";
 
    Vue.use(SortedTablePlugin);
    export default {
        name: 'Home',
        props: {
            team: String,
        },
        data: function() {
            return {
            values: []
            };
        },
        methods: {
            getResults() {
                axios.get('https://appetizer2020.herokuapp.com/getAllScores')
                .then(response => {
                    console.log(response.data)
                    this.values = response.data
                })
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .page {
        margin: auto;
        width: 700px;
       
    }
  
    th{
        width: 180px;
    }

    tr:nth-child(even) {background: #CCC}
    tr:nth-child(odd) {background: #FFF}
   
</style>
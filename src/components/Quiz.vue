<template>
    <div class="page">
        <div v-if="!confirm">
            <h3>You are rating team: <br><span style="color:blue">{{team}}</span></h3>
            <select v-model="selectedVoter" class="select" style="width:200px;">
                <option disabled value="">Please select your name</option>
                <option v-for="voter in voters" :key="voter">{{voter}}</option>
              </select>
            <div v-for="question in questions" :key="question" class="question">
                <h3>{{question}}</h3>
                <rate :length="5"  @after-rate="(rate)=>onAftereRate(rate, question)"
                    :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']" />
            </div>
            <p v-if="error" style="color:red; font-weight: bold;">{{error}}</p>
            <div class="button" @click="submit">Submit</div>
        </div>
        
        <div  v-if="confirm" class="confirm"> Submitted, go eat something else!</div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import rate from 'vue-rate'
    import 'vue-rate/dist/vue-rate.css'
    import axios from 'axios';


    Vue.use(rate)
    export default {
        name: 'Home',
        props: {
            team: String,
        },
        data: () => ({
           
            questions: ["Appearance","Taste","Creativity","Portion Size","Texture" ],
            answer: {
                Appearance: null,
                Taste:null,
                Creativity:null,
                "Portion Size":null,
                Texture:null
            },
            error: null,
            confirm: false,
            voters: ["Kyle", "Lisa", "Bryan", "Brit", "Paul", "Laurel", "Alysa", "Cody"],
            selectedVoter: ''

        }),
        methods: {
            submit() {
                //verify all filled in
                console.log(this.selectedVoter)
                if (this.selectedVoter===''|| this.answer.Appearance===null ||this.answer.Taste===null||this.answer.Creativity===null||this.answer.Texture===null||this.answer["Portion Size"]===null){
                    this.error = "Please fill all in categories!!";
                    return;
                } 
                if (this.team.includes(this.selectedVoter)) {
                    this.error = "You cannot vote for your self";
                    return;
                }
               
                axios({
                    method: 'post',
                    url: 'https://appetizer2020.herokuapp.com/saveScore',
                    headers: {}, 
                    data: {
                        team: this.team, // This is the body part
                        user: this.selectedVoter,
                        vote: this.answer
                    }
                })
                .then(response => {
                    console.log(response)
                    if (response.data==="already voted"){
                        this.error ="You already voted!"
                    }else{
                        this.confirm=true;
                    }
                })    
               
   
            },
            onAftereRate(rate, question) {
                this.answer[question] = rate;
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .page {
        margin: auto;
        width: 250px;
       
    }
    .question{
        margin:5px;
        height: 100px;
    }
    .button{
        background:darkblue;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px;
        margin:10px;
        margin-top:30px;
        cursor: pointer;
    }
    
    select{
        width: 200px;
        padding: 5px;
        border-radius: 5px;
    }
    option{
        padding:5px;
        background-color: white;
    }
</style>
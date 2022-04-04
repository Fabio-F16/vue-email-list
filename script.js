console.log('js ok');


const app = new Vue({
    el: '#app',
    data: {
        randomEmails: [],
        totEmails: 10
    },
    mounted() {
        for (let i = 0; i < this.totEmails; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                const result = response.data.response;
                // console.log(response);
                this.randomEmails.push(result);

            })

        }
    }
})
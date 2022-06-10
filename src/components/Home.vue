<template>
    <div>
        <h1>{{ tyh() }}</h1>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, index) in info" :key="index">            
                    <tr>
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.status ? 'Ordered' : 'Available' }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => {
        return {
            msg: 'Welcome',
            info: null
        }
    },
    async created(){
        let response = await axios.get('https://tvt-stadium.herokuapp.com/api/svd/getSvd')
        this.info = response.data.data
    },
    computed:{
        custom(){
            return this.msg + ' Com'
        }
    },
    methods: {
        tyh(){
            return this.msg + 'func'
        }
    },
}
</script>

<style>

</style>
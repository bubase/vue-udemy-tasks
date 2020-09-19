<template>
    <div>
        <ul>
            <li
                    v-for="serverItem in servers"
                    v-bind:key="serverItem.id">
                <server :server="serverItem"></server>
            </li>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue';

    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'}
                ]
            }
        },
        components: {
            Server
        }
    }
</script>

<style>

</style>

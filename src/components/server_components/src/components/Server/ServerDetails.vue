<template>
    <div>
        <p v-if="!isShown">Server Details are currently not updated</p>
        <div v-else>
            <p>Server ID: {{ server.id }}</p>
            <p>Server status: {{ server.status }}</p>
            <button @click="changeStatus">Change status to critical</button>
        </div>
    </div>

</template>

<script>
    import { eventBus } from '../../event-bus';

    export default {
        props: ['server'],
        data: function() {
            return {
                isShown: false,
            }
        },
        created() {
            eventBus.$on('serverDetails', (serverInfo) => {
                this.isShown = true;
                this.server = serverInfo;
            })
        },
        methods: {
            changeStatus() {
                this.server.status = 'Critical';
                eventBus.$emit('changeStatus', this.server);
            }
        }
    }
</script>

<style>

</style>

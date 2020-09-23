<template>
    <div>
        <p>Server #{{ server.id }}, status: {{ server.status }}</p>
        <button @click = "showServerDetails">Show server details</button>
    </div>
</template>

<script>
import { eventBus } from '../../event-bus';

export default {
    props: ['server'],
    methods: {
        showServerDetails() {
            eventBus.$emit('serverDetails', this.server);
        }
    },
    created() {
        eventBus.$on('changeStatus', (serverInfo) => {
            if (serverInfo.id === this.server.id) {
                this.server.status = serverInfo.status;
            }
        })
    }
}
</script>
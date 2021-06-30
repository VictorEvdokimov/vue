export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.prototype.$crud = {
            EventBus: new Vue(),

            save(obj) {
                this.EventBus.$emit('save', { ...obj })
            },

            update(id, obj) {
                this.EventBus.$emit('update', id, { ...obj })
            },

            delete(id) {
                this.EventBus.$emit('delete', id)
            }
        }
    }
}
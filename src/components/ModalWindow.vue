<template>
    <div> 
        <component :is = "ModalWindoW" />
    </div>
</template>
    
<script>
export default {
    name: "ModalWindow",
    
    props: {
        ModalWindoW: String,
        modalWindowSettings: Object
    }
}
</script>

<style>
</style>
<template>
    <div :class="[$style.wrapper]">
        <div>Сумма</div>
        <div>
            {{ getFPV }}
        </div>
    </div>
</template>
 
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getFPV: "getFullPaymentValue",
    }),
  },
};
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
  justify-content: center;
}
</style>
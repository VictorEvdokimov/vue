<template>
  <div>
    <span :class="[$style.paginationElement]" @click="previousePage" v-if="currentPage > 1">&lt;&lt;</span>
    <span :class="{[$style.paginationElement]: true, [$style.paginationElementCurrent]: page+1 == currentPage}" :pageNumber="page + 1" @click="selectPage" v-for="page in pageArray" :key="page">
      {{ page + 1 }}
      <span v-if="page + 1 != pageCount"> | </span>
    </span>
    <span :class="[$style.paginationElement]" @click="nextPage" v-if="pageCount > currentPage">&gt;&gt;</span>
  </div>
</template>

<script>
export default {
  props: {
    pageCount: Number,
    currentPage: Number,
  },

  methods: {
    selectPage($event) {
        this.$emit("changePage", Number($event.target.getAttribute('pageNumber')))
    },

    previousePage() {
        this.$emit("changePage", this.currentPage - 1)
    },

    nextPage() {
        this.$emit("changePage", this.currentPage + 1)
    }
  },

  computed: {
    pageArray() {
      return [...Array(this.pageCount).keys()];
    },
  },
};
</script>

<style lang="scss" module>
.paginationElement {
    cursor: pointer;
}

.paginationElementCurrent {
    color: red;
    font-weight: bold;
    font-size: 20px;
}
</style>
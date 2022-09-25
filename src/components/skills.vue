<script setup lang="ts">
import { useProgressStore } from '@/stores/progress'
import KaiDiscipline from '@/components/KaiDiscipline.vue'

const ProgressStore = useProgressStore()
</script>

<template>
  <h2 class="text-xl font-semibold text-gray-900 mt-5">Disciplines</h2>
  <div class="skills overflow-hidden bg-white shadow rounded-lg mt-5">
    <ul role="list" class="divide-y divide-gray-200">
      <KaiDiscipline v-for="index in ProgressStore.disciplinesAvailable" :key="index" :rank="index" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>

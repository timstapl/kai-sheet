<template>
  <div class="character-sheet">
    <div class="stats">
      <CharacterStats />
    </div>
    <div class="skills">
      <Skills />
    </div>
    <div class="items">
      <Items />
    </div>
    <div class="combats">
      combat record
    </div>
  </div>
</template>

<script lang="ts" setup>
import CharacterStats from '@/components/CharacterStats.vue'
import Skills from '@/components/skills.vue'
import Items from '@/components/Items.vue'

</script>

<style lang="scss" scoped>

</style>

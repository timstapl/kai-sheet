<script setup lang="ts">
import { computed } from 'vue'
import ItemList from '@/components/inventory/ItemList.vue'
import { useInventoryStore } from '../stores/inventory'

const InventoryStore = useInventoryStore()

const columns = [
  {
    header: 'Name',
    property: 'name',
  },
  {
    header: 'Description',
    property: 'description',
  },
]

const specialColumns = [
  ...columns,
  {
    header: 'Known Effects',
    property: 'knownEffects',
  },
]
</script>

<template>
  <h2 class="text-xl font-semibold text-gray-900 mt-5">Items</h2>
  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
    <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt class="truncate text-sm font-medium text-gray-500">Meals</dt>
      <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
        {{ InventoryStore.meals }}
      </dd>
      <!-- TODO: Add a note re: -3EP if no meal when directed to eat (( hide if hunting is chosen? )) -->
    </div>
    <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt class="truncate text-sm font-medium text-gray-500">Gold</dt>
      <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
        {{ InventoryStore.gold }} / {{ InventoryStore.maxGold}}
      </dd>
    </div>
  </dl>
  <ItemList :capacity="2" :columns="columns" :data="InventoryStore.weapons"
    note="If holding Weapon and appropriate Weaponskill in combat +2 CS. If combat entered carrying no Weapon -4 CS."
    header="Weapons" />
  <ItemList :capacity="8" :columns="columns" :data="InventoryStore.backpack" header="Backpack" />
  <ItemList :columns="specialColumns" :data="InventoryStore.specialItems" header="Special Items" />
</template>

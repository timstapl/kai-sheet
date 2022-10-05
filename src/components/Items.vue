<script setup lang="ts">
import { computed } from 'vue'
import ItemList from '@/components/inventory/ItemList.vue'
// import SideBar from '@/components/SideBar.vue'
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
  <!-- <SideBar  -->
  <!--   title="Test" -->
  <!--   description="stuff and things" -->
  <!-- > -->
  <!--   <template #default> -->
  <!--     <div class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5" style="min-height: 5000px; height: 5000px;"> -->
  <!--       Egads! -->
  <!--     </div> -->
  <!--   </template> -->
  <!--   <template #buttons> -->
  <!--     <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button> -->
  <!--     <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Create</button> -->
  <!--   </template> -->
  <!-- </SideBar> -->
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
  <ItemList :capacity="2" :columns="columns" :data="InventoryStore.weapons" singular="weapon" plural="weapons"
    note="If holding Weapon and appropriate Weaponskill in combat +2 CS. If combat entered carrying no Weapon -4 CS."
    header="Weapons" />
  <ItemList :capacity="8" :columns="columns" :data="InventoryStore.backpack" singular="item" plural="items"
    header="Backpack" />
  <ItemList :columns="specialColumns" :data="InventoryStore.specialItems" singular="special item" plural="special items"
    header="Special Items" />
</template>

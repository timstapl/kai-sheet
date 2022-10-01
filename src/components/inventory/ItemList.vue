<script setup lang="ts">
import { computed } from 'vue'

export type Column = {
  header: string
  property: string
}

export type Row = Record<string, any>

export interface IProps {
  columns: Column[]
  data: Row[]
  capacity?: number
  note?: string
  header?: string
  singular: string
  plural: string
}

const props = defineProps<IProps>()

const hasMaxCapacity = computed<boolean>(() => {
  return !!props.capacity
})

const remainingCapacity = computed<number>(() => {
  return props.capacity ? Math.max(0, props.capacity - props.data.length) : 100
})
</script>

<template>
  <div class="w-full mt-5 flex items-center justify-between">
    <h3 v-if="props.header" class="text-lg font-semibold text-gray-800">{{ props.header }}</h3>
    <h3 v-if="hasMaxCapacity" class="text-base font-semibold text-gray-700 italic">{{ props.data.length }} / {{
    props.capacity }}</h3>
  </div>
  <div class="mt-4 flex flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" v-for="col in props.columns" :key="col.header"
                  class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  {{ col.header }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="(row, i) in props.data">
                <td v-for="col in props.columns" :key="col.header">{{ row[col.property] }}</td>
                <!-- <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Weapon</td> -->
                <!-- <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Info</td> -->
              </tr>
              <tr v-if="remainingCapacity || !hasMaxCapacity" class="hover:pointer">
                <td :colspan="props.columns.length"
                  class="whitespace-nowrap py-2 px-2 text-sm font-medium text-gray-900 sm:pl-6 text-center cursor-pointer">
                  add {{ props.singular }}
                </td>
              </tr>
            </tbody>
            <caption v-if="props.note" style="caption-side: bottom" class="py-2 text-sm italic">
              {{ props.note }}
            </caption>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

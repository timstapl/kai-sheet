<script setup lang="ts">
import { computed } from 'vue'
import { Rank } from '@/stores/disciplines'
// import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { useDisciplineStore } from '@/stores/disciplines'

interface IProps {
  rank: number
}

const props = defineProps<IProps>()

const DisciplineStore = useDisciplineStore()

const displayRank = computed<string>(() => {
  return Rank[props.rank]
})

const learnedForRank = computed<boolean>(() => {
  return DisciplineStore.learnedDisciplines.filter(d => d.rank === props.rank).length > 0
})
</script>

<template>
  <li v-if="learnedForRank" class="kai-discipline">
    <a href="#" class="block hover:bg-gray-50">
      <div class="flex items-center px-4 py-4 sm:px-6">
        <div class="flex min-w-0 flex-1 items-center">
          <div class="flex justify-center items-center h-12 w-12 rounded-full bg-gray-500 text-white">
            {{ displayRank.slice(0,2) }}
          </div>
          <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <p class="truncate text-sm font-medium text-indigo-600">Lone Wolf</p>
            </div>
            <div class="hidden md:block">
              <div>
                <p class="text-sm text-gray-900">
                  {{ learnedForRank }}
                  Applied on
                  {{ ' ' }}
                  <time>12/20/86</time>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <!-- <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" /> -->
        </div>
      </div>
    </a>
  </li>
  <li v-else>
    <a href="#" class="block bg-white hover:bg-green-50 transition-colors duration-300">
      <div class="flex justify-center items-center px-4 py-4 sm:px-6">
        <div class="flex-col justify-center items-center text-center">
          <p> {{ displayRank }} </p>
          <p class="text-sm italic text-gray-600">Click to Learn Discipline</p>
        </div>
      </div>
    </a>
  </li>
</template>

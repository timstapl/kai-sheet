<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { XMarkIcon } from '@heroicons/vue/20/solid'
import { useNotificationsStore, type Notification } from '@/stores/notifications'

const NotificationsStore = useNotificationsStore()

interface IProps {
  notification: Notification
}

const props = defineProps<IProps>()
const timeout = ref(null)

const dismiss = () => {
  NotificationsStore.removeNotification(props.notification.id)
}

const header = computed<string>(() => {
  switch (props.notification.type) {
    case 'roll':
    default:
      return 'Die Rolled!'
  }
})

onMounted(() => {
  setTimeout(() => {
    dismiss()
  }, 5_000)
})

onBeforeUnmount(() => {
  if (timeout.value) {
    clearTimeout(timeout.value)
  }
})
</script>


<template>
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <!-- <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" /> -->
                <svg class="svg-icon h-6 w-6 text-green-400"
                  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.183518 510.575353l260.757627-54.499504 135.558766-424.996132c5.899946-18.399833-16.799847-31.83971-28.899737-17.079844L6.023665 481.735615c-10.479905 12.759884 0.399996 32.139707 16.159853 28.839738z m718.853457-54.479504L1001.794602 510.595353c15.779856 3.29997 26.639758-16.099853 16.179853-28.859738L634.377946 13.979873c-12.07989-14.739866-34.779683-1.319988-28.919737 17.099844l135.578766 425.016132z m-212.978061-443.995959c-5.139953-16.119853-26.979754-16.119853-32.119708 0l-146.798664 460.215811L511.99906 585.734669l162.858518-113.438968-146.798664-460.195811z m482.31561 572.43479l-288.117378-60.219452-176.398394 122.898881v359.056732c0 15.179862 17.099844 23.319788 28.039745 13.339879l444.255956-404.396319c10.619903-9.639912 5.999945-27.799747-7.779929-30.679721z m-996.750928 0c-13.779875 2.879974-18.399833 21.039809-7.799929 30.679721L450.099623 1019.59072c10.9599 9.959909 28.039745 1.839983 28.039745-13.339878V647.214109l-176.398394-122.898881L13.623596 584.53468z" />
                </svg>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">{{ header }}</p>
                <p class="mt-1 text-sm text-gray-500">{{ notification.message }}</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button type="button" @click="dismiss" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>


import React from 'react';
import PieChart from "./pie-chart"

const Overview = () => {
  
  return(
    <>
  
  <div>
    <h3 class="text-base font-semibold leading-6 text-gray-900">Last 2 months</h3>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div class="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
          <div class="absolute rounded-md bg-red-600 p-3">
            <svg class="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <p class="ml-16 truncate text-sm font-medium text-gray-300">Total Citizens</p>
        </dt>
        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p class="text-2xl font-semibold text-gray-100">71,897</p>
          <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
            <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only"> Increased by </span>
            122
          </p>
          <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a href="#" class="font-medium text-orange-400 hover:text-red-500">View all<span class="sr-only"> Total Subscribers stats</span></a>
            </div>
          </div>
        </dd>
      </div>
      <div class="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
          <div class="absolute rounded-md bg-orange-500 p-3">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </svg>
          </div>
          <p class="ml-16 truncate text-sm font-medium text-gray-300">Avg. Participants Rate</p>
        </dt>
        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p class="text-2xl font-semibold text-gray-100">58.16%</p>
          <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
            <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only"> Increased by </span>
            5.4%
          </p>
          <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a href="#" class="font-medium text-yellow-600 hover:text-orange-500">View all<span class="sr-only"> Avg. Open Rate stats</span></a>
            </div>
          </div>
        </dd>
      </div>
      <div class="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
          <div class="absolute rounded-md bg-blue-500 p-3">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
            </svg>
          </div>
          <p class="ml-16 truncate text-sm font-medium text-gray-300">Avg. Acceptance Rate</p>
        </dt>
        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p class="text-2xl font-semibold text-gray-100">24.57%</p>
          <p class="ml-2 flex items-baseline text-sm font-semibold text-red-600">
            <svg class="h-5 w-5 flex-shrink-0 self-center text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only"> Decreased by </span>
            3.2%
          </p>
          <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a href="#" class="font-medium text-cyan-600 hover:text-green-500">View all<span class="sr-only"> Avg. Click Rate stats</span></a>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>


  
    {/* 2nd component */}
    <div class="flex items-center bg-gray-100">
        <section
          class="w-full p-6 rounded-lg max-w-2xl shadow-lg shadow-gray-300 bg-white"
        >
          <header class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 shrink-0 w-6 h-6 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 19l16 0"></path>
              <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
            </svg>
            <h3 class="font-medium text-lg">Area Liveability Score</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 shrink-0 w-6 h-6 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 9h.01"></path>
              <path d="M11 12h1v4h1"></path>
            </svg>
          </header>
          <section class="py-4 grid grid-cols-2 gap-x-6">
            <div class="flex items-center py-3">
              <span
                class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M7 21l3 -4"></path>
                  <path d="M16 21l-2 -4l-3 -3l1 -6"></path>
                  <path d="M6 12l2 -3l4 -1l3 3l3 1"></path>
                </svg>
              </span>
              <div class="space-y-3 flex-1">
                <div class="flex items-center">
                  <h4
                    class="font-medium text-sm mr-auto text-gray-700 flex items-center"
                  >
                    Walkability
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                    6.2 / 10
                  </span>
                </div>
                <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span
                    class="h-full bg-blue-500 w-full block rounded-full"
                    style={{width: "62%"}}
                  ></span>
                </div>
              </div>
            </div>
            <div class="flex items-center py-3">
              <span
                class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M7 21l3 -4"></path>
                  <path d="M16 21l-2 -4l-3 -3l1 -6"></path>
                  <path d="M6 12l2 -3l4 -1l3 3l3 1"></path>
                </svg>
              </span>
              <div class="space-y-3 flex-1">
                <div class="flex items-center">
                  <h4
                    class="font-medium text-sm mr-auto text-gray-700 flex items-center"
                  >
                    Health
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                    6.8 / 10
                  </span>
                </div>
                <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span
                    class="h-full bg-blue-500 w-full block rounded-full"
                    style={{width: "68%"}}
                  ></span>
                </div>
              </div>
            </div>
            <div class="flex items-center py-3 border-t border-gray-100">
              <span
                class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 21h18"></path>
                  <path d="M19 21v-4"></path>
                  <path
                    d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z"
                  ></path>
                  <path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14"></path>
                  <path d="M9 17v4"></path>
                  <path d="M8 13h2"></path>
                  <path d="M8 9h2"></path>
                </svg>
              </span>
              <div class="space-y-3 flex-1">
                <div class="flex items-center">
                  <h4
                    class="font-medium text-sm mr-auto text-gray-700 flex items-center"
                  >
                    Schools
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span
                    class="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
                  >
                    7.3 / 10
                  </span>
                </div>
                <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span
                    class="h-full bg-blue-500 w-full block rounded-full"
                    style={{width: "73%"}}
                  ></span>
                </div>
              </div>
            </div>
            <div class="flex items-center py-3 border-t border-gray-100">
              <span
                class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"
                  ></path>
                  <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                </svg>
              </span>
              <div class="space-y-3 flex-1">
                <div class="flex items-center">
                  <h4
                    class="font-medium text-sm mr-auto text-gray-700 flex items-center"
                  >
                    Shopping
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                    6.4 / 10
                  </span>
                </div>
                <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span
                    class="h-full bg-blue-500 w-full block rounded-full"
                    style={{width: "64%"}}
                  ></span>
                </div>
              </div>
            </div>
            <div class="flex items-center py-3 border-t border-gray-100">
              <span
                class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h5- w-5 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 13l-2 -2"></path>
                  <path d="M12 12l2 -2"></path>
                  <path d="M12 21v-13"></path>
                  <path
                    d="M9.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z"
                  ></path>
                </svg>
              </span>
              <div class="space-y-3 flex-1">
                <div class="flex items-center">
                  <h4
                    class="font-medium text-sm mr-auto text-gray-700 flex items-center"
                  >
                    Parklands
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span
                    class="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
                  >
                    8 / 10
                  </span>
                </div>
                <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span
                    class="h-full bg-blue-500 w-full block rounded-full"
                    style={{width: "80%"}}
                  ></span>
                </div>
              </div>
            </div>
            <div class="flex items-center py-3 border-t border-gray-100">
              <span
                class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path
                    d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"
                  ></path>
                  <path d="M16 5l1.5 7l4.5 0"></path>
                  <path d="M2 10l15 0"></path>
                  <path d="M7 5l0 5"></path>
                  <path d="M12 5l0 5"></path>
                </svg>
              </span>
              <div class="space-y-3 flex-1">
                <div class="flex items-center">
                  <h4
                    class="font-medium text-sm mr-auto text-gray-700 flex items-center"
                  >
                    Public Transport
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span
                    class="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
                  >
                    8.7 / 10
                  </span>
                </div>
                <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span
                    class="h-full bg-blue-500 w-full block rounded-full"
                    style={{width: "87%"}}
                  ></span>
                </div>
              </div>
            </div>
          </section>
        </section>
        <PieChart/>
      </div>
      </>
)

};

export default Overview;

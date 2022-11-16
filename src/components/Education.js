import React from "react";

export default function Education() {
    return (
        <div id="education" class="bg-[#B2B2B2] h-auto my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 w-25  border-dashed px-4 py-2">Education</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">BlueCrest College University</summary>
          <p>2022- Present</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Bishop Juwle High School-BJHS</summary>
          <p>2009-2017</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Saint Philomena School-SPS</summary>
          <p>2005-2009</p>
        </details>

      </div>
    )
}
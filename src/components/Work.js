import React from "react";

export default function Work() {
    return (
        <div id="work" class="bg-[#B2B2B2] h-auto my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 w-20  border-dashed px-4 py-4">Work</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Self Employed</summary>
          <p>Trusting and hoping on God for better things</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Olive Sayee Foundation</summary>
          <p>Olive Sayee is a non-profitabile organization that aims at providiing finicial assistance to under privilege and less fortunate youths in our contemporary society.</p>
          <p>I am currently serving as a volunteer at the above-mentioned entity.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">National Climate Change Secretariat-NCCS</summary>
          <p>Currently working as an Information Technology Support Staff.</p>
        </details>

      </div>
    )
}
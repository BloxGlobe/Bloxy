export default function Home() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `
      <h1 class="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="p-5 bg-gray-800 rounded-xl shadow-md">
            <h2 class="text-lg font-semibold">Total Visits</h2>
            <p class="text-3xl font-bold mt-2">12,440</p>
        </div>

        <div class="p-5 bg-gray-800 rounded-xl shadow-md">
            <h2 class="text-lg font-semibold">Active Players</h2>
            <p class="text-3xl font-bold mt-2">387</p>
        </div>

        <div class="p-5 bg-gray-800 rounded-xl shadow-md">
            <h2 class="text-lg font-semibold">UGC Sales</h2>
            <p class="text-3xl font-bold mt-2">1,025</p>
        </div>

        <div class="p-5 bg-gray-800 rounded-xl shadow-md">
            <h2 class="text-lg font-semibold">Revenue</h2>
            <p class="text-3xl font-bold mt-2">R$ 14,920</p>
        </div>

      </div>

      <div class="mt-10 bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 class="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul class="space-y-2 text-gray-300">
             <li>• New user joined your experience</li>
             <li>• Someone purchased a UGC item</li>
             <li>• You updated the dashboard theme</li>
          </ul>
      </div>
    `;

    return wrapper;
}

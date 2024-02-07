export const Pagenav = () => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px text-sm gap-2">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700 font-semibold"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-3 h-8 text-white bg-blue-800 rounded hover:bg-gray-100 hover:text-black font-bold hover:border"
            >
              10
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              11
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              12
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              13
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              14
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              15
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              16
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              17
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              18
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border rounded hover:bg-gray-100 hover:text-gray-700 font-semibold"
            >
              Next
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

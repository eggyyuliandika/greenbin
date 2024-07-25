import { Waste } from "@/types/custom";

export default function WasteList({ waste }: Array<Waste>) {
  return (
    <div className="col-span-12 xl:col-span-7 text-black">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <div>
            <h4 className="text-title-sm2 font-bold text-black dark:text-white">
              Waste
            </h4>
          </div>
          {/* <DropdownDefault /> */}
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
            <div className="p-2.5 xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                NAME
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                TYPE
              </h5>
            </div>
            {/* <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Revenues
              </h5>
            </div> */}
            <div className="hidden p-2.5 text-center sm:block xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                ACTIONS
              </h5>
            </div>
          </div>

          {waste?.map((w, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 ${
                key === waste.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              {/* <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="h-9 w-full max-w-9 flex-shrink-0">
                  <Image
                      src={brand.logo}
                      width={60}
                      height={50}
                      alt="Brand"
                    />
                </div>
                <p className="hidden font-medium text-black dark:text-white sm:block">
                  {w.name}
                </p>
              </div> */}

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-black dark:text-white">
                  {w.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                {/* <p className="font-medium text-meta-3">${w.revenues}</p> */}
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                {/* <p className="font-medium text-meta-5">{w.conversion}%</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import { deleteWaste } from "@/app/dashboard/waste/actions";
import { Waste } from "@/types/custom";
import { EditWasteModal } from "./edit";

export default function WasteList({ waste }: { waste: Array<Waste> }) {
  return (
    <div className="col-span-12 xl:col-span-7 text-black pt-1">
      <div className="rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <div>
            <h4 className="text-title-sm2 font-bold text-black dark:text-white">
              Waste
            </h4>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-xl bg-gray-2 dark:bg-meta-4 sm:grid-cols-3 border bg-slate-100">
            <div className="p-2.5 xl:p-4 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                NAME
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                TYPE
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                ACTION
              </h5>
            </div>
          </div>

          {waste?.map((w, key) => {
            const deleteWasteById = deleteWaste.bind(null, w.id_waste);
            return (
              <div
                className={`grid grid-cols-3 sm:grid-cols-3 ${
                  key === waste.length - 1
                    ? ""
                    : "border-b border-stroke dark:border-strokedark"
                }`}
                key={w.id_waste}
              >
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="font-medium ">{w.name}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="font-medium">{w.type_of_waste}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <form action={deleteWasteById}>
                    <button className="m-2 block text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600">
                      Delete
                    </button>
                  </form>

                  <EditWasteModal waste={w} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

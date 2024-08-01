import { MissionRedeem } from "@/types/custom";

export default function MissionRedeemList({
  mission_redeem,
}: Array<MissionRedeem>) {
  return (
    <div className="col-span-12 xl:col-span-7 text-black">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <div>
            <h4 className="text-title-sm2 font-bold text-black dark:text-white">
              Mission Redeem
            </h4>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-xl bg-gray-2 dark:bg-meta-4 sm:grid-cols-3 border bg-slate-100">
            <div className="p-2.5 xl:p-4 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                MISSION
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                TIME
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                AMOUNT
              </h5>
            </div>
          </div>

          {mission_redeem?.map((mr, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-3 ${
                key === mission_redeem.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium ">{mr.id_mission}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium ">{mr.time}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium ">{mr.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

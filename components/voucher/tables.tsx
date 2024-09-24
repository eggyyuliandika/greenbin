"use client";
import { deleteVoucher } from "@/app/dashboard/voucher/actions";
import { Voucher } from "@/types/custom"; // Pastikan tipe Voucher sesuai dengan tipe data Anda

export default function VoucherList({
  vouchers,
}: {
  vouchers: Array<Voucher>;
}) {
  return (
    <div className="col-span-12 xl:col-span-7 text-black">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Voucher List
          </h4>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-7 rounded-xl bg-gray-2 dark:bg-meta-4 sm:grid-cols-7 border bg-slate-100">
            <div className="p-2.5 xl:p-4 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                SIM CARD
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
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
                STOCK
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                PERIODE
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                STATUS
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                ACTION
              </h5>
            </div>
          </div>

          {vouchers?.map((voucher, key) => {
            const deleteVoucherById = deleteVoucher.bind(
              null,
              voucher.id_voucher
            );
            return (
              <div
                className={`grid grid-cols-6 sm:grid-cols-6 ${
                  key === vouchers.length - 1
                    ? ""
                    : "border-b border-stroke dark:border-strokedark"
                }`}
                key={key}
              >
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="font-medium ">{voucher.sim_card}</p>
                </div>
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="font-medium ">{voucher.name}</p>
                </div>
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="font-medium ">{voucher.type}</p>
                </div>
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="font-medium ">{voucher.stock}</p>
                </div>
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="font-medium ">{voucher.periode}</p>
                </div>
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="font-medium">
                    {voucher.status ? "Active" : "Inactive"}
                  </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <form action={deleteVoucherById}>
                    <button className="m-2 block text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-600">
                      Delete
                    </button>
                  </form>

                  {/* Optionally, add EditVoucherModal here */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

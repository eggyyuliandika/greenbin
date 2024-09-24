"use client";
import { addWaste, getTypeOfWaste } from "@/app/dashboard/waste/actions";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Waste } from "@/types/custom";
import React, { useState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";

export function FormContent({ waste }: { waste: Waste }) {
  const { pending } = useFormStatus();
  const [isOpen, setIsOpen] = useState(false);
  const [typesOfWaste, setTypesOfWaste] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchTypesOfWaste = async () => {
      const data = await getTypeOfWaste();
      setTypesOfWaste(data); // Simpan data ke dalam state
    };

    fetchTypesOfWaste();
  }, []);

  return (
    <>
      <div>
        <button
          onClick={toggleModal}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Add new Waste
        </button>

        {isOpen && (
          <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Waste
                  </h3>
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        disabled={pending}
                        type="text"
                        name="waste"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Add a new waste"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Type of Waste
                      </label>
                      <select
                        name="type_of_waste"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select type of waste
                        </option>
                        {typesOfWaste.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Button
                    disabled={pending}
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Add new Waste
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export function WasteForm({ waste }: { waste: Waste }) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <CardContent>
      <form
        ref={formRef}
        className="flex gap-4"
        action={async (data) => {
          await addWaste(data);
          formRef.current?.reset();
        }}
      >
        <FormContent
          waste={{
            created_at: "",
            id_type_of_waste: null,
            id_waste: 0,
            name: null,
          }}
        />
      </form>
    </CardContent>
  );
}

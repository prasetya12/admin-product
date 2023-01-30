import React, { Fragment, useState, useRef } from 'react'
import Sidebar from '../components/Sidebar'
import Product from '../components/Product'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
const Dashboard = () => {
    const [showModal, setShowModal] = useState(false)
    const [type, setType] = useState('Tambah')

    const [showModalDelete, setShowModalDelete] = useState(true)

    const [image, setImage] = useState(null);

    const handleChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };
    const cancelButtonRef = useRef(null)
    return (
        <>
            <Sidebar></Sidebar>
            <div className='flex ml-80 mt-10 mr-10 flex-col'>
                <div className='font-semibold'>
                    List Product
                </div>
                <div className='flex flex-col divide-y mr-10 mt-10'>
                    <Product></Product>
                    <Product></Product>

                </div>
            </div>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div className="relative w-1/3 ">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">{type} Product</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black opacity-7 h-6 w-6 text-xl py-0">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 w-full">
                                    <form>

                                        <div>
                                            <div>Upload Gambar</div>
                                            {image && <img className='w-40 h-40 rounded' src={image} alt="uploaded image" />}
                                            <input className='mt-2' type="file" accept="image/*" onChange={handleChange} />
                                        </div>
                                        <div className='mt-5'>
                                            <div>Nama Produk</div>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className="relative block w-full appearance-none rounded-none rounded-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Masukan Nama Produk"
                                            />
                                        </div>
                                        <div className='mt-5'>
                                            <div>Deskripsi</div>
                                            <textarea
                                                id="email-address"
                                                name="email"
                                                className="h-20 relative block w-full appearance-none rounded-none rounded-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Masukan Nama Produk"
                                            />
                                        </div>
                                        <div className='mt-5'>
                                            <div>Harga Jual</div>
                                            <input
                                                id="name"
                                                name="name"
                                                type="number"
                                                className="relative block w-full appearance-none rounded-none rounded-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Harga Jual"
                                            />
                                        </div>
                                        <div className='mt-5'>
                                            <div>Harga Beli</div>
                                            <input
                                                id="name"
                                                name="name"
                                                type="number"
                                                className="relative block w-full appearance-none rounded-none rounded-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Harga Beli"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-grey-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        {type}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}

            {
                showModalDelete ? (
                    <Transition.Root show={showModalDelete} as={Fragment}>
                        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setShowModalDelete}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    >
                                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                                <div className="sm:flex sm:items-start">
                                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                    </div>
                                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                            Delete Produk
                                                        </Dialog.Title>
                                                        <div className="mt-2">
                                                            <p className="text-sm text-gray-500">
                                                                Apakah anda yakin akan menghapus produk ini ?
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                    onClick={() => setShowModalDelete(false)}
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                    onClick={() => setShowModalDelete(false)}
                                                    ref={cancelButtonRef}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                ) : null
            }


        </>
    )
}


export default Dashboard
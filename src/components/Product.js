import React from 'react'

const Product = () => {
    const text = "Bagi penjual, deskripsi produk bermanfaat untuk bisa memperkenalkan produk mereka secara spesifik. Lalu dari sisi calon pembeli, deskripsi produk akan memudahkan mereka dalam mempertimbangkan apakah produk Anda benar-benar fit dengan kebutuhannya atau tidak. "
    return (
        <>
            <div className='p-6 flex flex-row justify-between'>
                <div className='flex flex-row'>
                    <div>
                        <img className='w-24 rounded-md' src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/3/14/d5aca00a-faa1-4438-8191-90ac5bed5520.jpg" />
                    </div>
                    <div className='flex flex-col ml-10'>
                        <div className='font-semibold'>
                            Baju Baru
                        </div>
                        <div className='text-sm mt-2 text-slate-400'>
                            {text.slice(0, 50)}...
                        </div>
                        <div className='flex flex-row mt-6 text-sm'>
                            <div className='mr-3'>
                                Harga Jual : <span>Rp. 15.000</span>
                            </div>
                            <div>
                                Harga Beli : <span>Rp. 14.000</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='h-100 flex justify-center items-center'>
                    <button className='border border-sky-400 text-sky-400 py-2 px-3 text-xs rounded-3xl mr-3'>
                        Edit
                    </button>
                    <button className='border border-rose-400 text-rose-400 py-2 px-3 text-xs rounded-3xl'>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}


export default Product
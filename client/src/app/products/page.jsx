import Sidebar from '@/components/Sidebar'
import React from 'react'

const ProductPage = () => {
  return (
    <section className='py-5 bg-white'>
        <div className='container flex gap-4'>
            <div className='sidebarWrapper w-[25%]'>
                <Sidebar/>
            </div>
            <div className='rightContent bg-gray-300 h-250 w-[75%]'>

            </div>
        </div>
    </section>
  )
}

export default ProductPage
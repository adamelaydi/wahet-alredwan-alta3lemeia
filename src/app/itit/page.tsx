import AddForm from '@/components/dashboard/parent/chilrenCRUDS/AddForm'
import DeleteForm from '@/components/dashboard/parent/chilrenCRUDS/DeleteForm'
import UpdateForm from '@/components/dashboard/parent/chilrenCRUDS/UpdateForm'
import React from 'react'

function page() {
    return (
        <div>
            {/* <DeleteForm />   */}
            {/* <AddForm /> */}
            <UpdateForm />
        </div>
    )
}

export default page
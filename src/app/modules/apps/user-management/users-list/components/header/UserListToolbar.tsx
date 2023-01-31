import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './UsersListFilter'

const UsersListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>

      {/* begin::import csv */}
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        Import CSV
      </button>
      {/* end::import csv */}
    </div>
  )
}

export {UsersListToolbar}

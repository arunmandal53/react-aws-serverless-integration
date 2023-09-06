/* eslint-disable react/prop-types */
import EditIcon from '../../assets/edit.svg';
import ViewIcon from '../../assets/view.svg';
import DeleteIcon from '../../assets/delete.svg';

function Table(props) {
    const {
        data,
        handleDelete
    } = props;
    return (
        <div className="flex flex-col justify-center flex-grow">
            <table className=" table-auto w-full">
                <thead>
                    <tr>
                        <th className="p-2 border text-left">Product name</th>
                        <th className="p-2 border">Description</th>
                        <th className="p-2 border">Price</th>
                        <th className="p-2 border">Image</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                    <tbody>
                    {
                        data && data.length > 0? data.map((item, index)=>(
                            <tr key={index}>
                                <td className="p-2 border">{item.product_name}</td>
                                <td className="p-2 border">{item.description}</td>
                                <td className="p-2 border">{item.price}</td>
                                <td className="p-2 border"><img className="w-32 h-32 object-cover" src={item.image}/></td>
                                <td className="p-2 border">
                                    <div className="flex gap-2 justify-center">
                                        {/* <img className='h-8 w-8 cursor-pointer' src={ViewIcon} title='View'/>
                                        <img className='h-8 w-8 cursor-pointer' src={EditIcon} title='Edit'/> */}
                                        <img className='h-8 w-8 cursor-pointer' onClick={()=>handleDelete(item)} src={DeleteIcon} title='Delete'/>
                                    </div>
                                </td>
                            </tr>
                        )):<></>
                    }
                </tbody>
            </table>
            {
                 !data || !data.length > 0? (
                    <div className='flex flex-col flex-grow border border-gray-200 p-4 justify-center text-center align-middle'>
                        No any data available
                    </div>
                 ):''
            }
        </div>
    )
}

export default Table
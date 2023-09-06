import { useEffect, useState } from "react";

import Table from "../../components/table";
import Button from "../../components/button";
import Modal from "../../components/modal";
import AddProduct from "../../components/add_product";


function ListView() {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${import.meta.env.VITE_API_BASE_URL}`, requestOptions)
        .then(response => {
            if(response.status === 200){
               return response.json()
            }
        }).then(data => {
            setData(data)
        })
        .catch(error => console.log('error', error));
    },[])

    console.log(data)

    function handleAddButtonClick(){
        setShowModal(true)
    }

    function handleProductData(values, setSubmitting){

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: values,
            redirect: 'follow'
        };

        fetch(import.meta.env.VITE_API_BASE_URL, requestOptions)
        .then(response => {
            if(response.status === 200){
                // To-Do: remove reload
                window.location.reload()
            }
        })
        .catch(error => console.log('error', error));
    }

    function handleDelete(item){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`${import.meta.env.VITE_API_BASE_URL}/${item.id}`, requestOptions)
        .then(response => {
            if(response.status === 200){
                // To-Do: remove reload
                window.location.reload()
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className="flex flex-col p-6 flex-grow">
            <div className="flex flex-col gap-4">
                <h2 className="text-xl">Products List</h2>
                <Button onClick={handleAddButtonClick}>Add Product</Button>
                <Table data={data} handleDelete={handleDelete}/>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} title={"Add Product"}>
                <AddProduct handleProductData={handleProductData}/>
            </Modal>
        </div>
    )
}

export default ListView;
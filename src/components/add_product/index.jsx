/* eslint-disable react/prop-types */
import { Formik } from 'formik';
import { useRef } from 'react';
 
 const AddProduct = (props) => {
    const {
        handleProductData
    } = props;

    const image_uri = useRef(null);

    return (
        <div className='flex flex-col gap-6 flex-grow'>
            <Formik
            initialValues={{ product_name: '', description: '', price: '', image: '' }}
            validate={values => {
                const errors = {};
                if (!values.product_name) {
                errors.product_name = 'Product name is required.';
                }
                if (!values.description) {
                    errors.description = 'Description is required.';
                }
                if (!values.price) {
                    errors.price = 'Price is required.';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                values.image = image_uri.current
                handleProductData(values, setSubmitting)
            }}
            validateOnChange={false}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} className='flex flex-col flex-grow gap-6 p-4' autoComplete='off'>
                    <div className='flex flex-col gap-6 flex-grow'>
                        <label className="">Product name:</label>
                        <div className='flex flex-col gap-2 flex-grow'>
                            <input
                                className="border border-blue-600 w-full p-2"
                                type="text"
                                name="product_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.product_name}
                                autoComplete='off'
                            />
                            <p className=' text-red-600'>
                                {errors.product_name && touched.product_name && errors.product_name}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 flex-grow'>
                        <label className="">Description:</label>
                        <div className='flex flex-col gap-2 flex-grow'>
                            <textarea
                                className="border border-blue-600 w-full p-2"
                                rows={10}
                                name="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                                autoComplete='off'
                            ></textarea>
                            <p className=' text-red-600'>
                                {errors.description && touched.description && errors.description}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 flex-grow'>
                        <label className="">Price:</label>
                        <div className='flex flex-col gap-2 flex-grow'>
                            <input
                                className="border border-blue-600 w-full p-2"
                                type="number"
                                name="price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                                autoComplete='off'
                            />
                            <p className=' text-red-600'>
                                {errors.price && touched.price && errors.price}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 flex-grow'>
                        <label className="">Image:</label>
                        <div className='flex flex-col gap-2 flex-grow'>
                            <input
                                className="border border-blue-600 w-full p-2"
                                type="file"
                                name="image"
                                onChange={(e)=>{
                                    const fr = new FileReader()
                                    const file = e.target.files[0]
                                    fr.readAsDataURL(file)
                                    fr.onloadend = function() {
                                        image_uri.current = fr.result
                                    }
                                    handleChange(e)
                                }}
                                onBlur={handleBlur}
                                value={values.image}
                                autoComplete='off'
                                accept="image/png"
                            />
                            <p className=' text-red-600'>
                                {errors.image && touched.image && errors.image}
                            </p>
                        </div>
                    </div>
                <button className='border border-blue-600 p-2 w-fit' type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </form>
            )}
            </Formik>
        </div>
    )
}
 
export default AddProduct;
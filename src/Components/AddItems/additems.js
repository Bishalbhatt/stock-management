import React from 'react';
import './additems.css';
import TopHeader from './../TopHeader/topheader';

const additems = () => {
  return (
    <>
        <TopHeader />
        <div className='additems'>
            <h2 className='additems-heading'>Add Items</h2>
            <div className='additems-form'>

                <div className='partno additems-input'>
                    <label for="partno">Part No</label>
                    <input type="text" name="partno" />
                </div>

                <div className='category  additems-input'>
                    <label for="category">Category</label>
                    <input type="text" name="category" />
                </div>

                <div className='product-name  additems-input'>
                    <label for="product-name">Product Name</label>
                    <input type="text" name="product-name" />
                </div>

                <div className='hsn  additems-input'>
                    <label for="hsn">HSN/SAC</label>
                    <input type="text" name="hsn" />
                </div>

                <div className='gst  additems-input'>
                    <label for="gst">GST Name</label>
                    <input type="text" name="gst" />
                </div>

                <div className='quantity  additems-input'>
                    <label for="quantity">Quantity</label>
                    <input type="text" name="quantity" />
                </div>

                <div className='product-rate  additems-input'>
                    <label for="product-rate">Product Rate</label>
                    <input type="text" name="product-rate" />
                </div>

                <div className='purchase-date  additems-input'>
                    <label for="purchase-date ">Purchase Date</label>
                    <input type="text" name="purchase-date " />
                </div>

                <button className='additems-submit'>Submit</button>
            </div>
        </div>
    </>
  )
}

export default additems
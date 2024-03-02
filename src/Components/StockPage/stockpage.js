import React from 'react';
import './stockpage.css';
import TopHeader from './../TopHeader/topheader';

const stockpage = () => {
  return (
    <div className='stockpage'>
          <TopHeader />
        <div className='stockpage-head'>
            <h2>Stock Details</h2>
            <button>Logout</button>
        </div>
        <div className='stockpage-main'>
            <div className='stockpage-body'>
                <div className='category'>
                    <select name="category" id="category">
                        <option value="tvs">TVS</option>
                        <option value="bajaj">Bajaj</option>
                        <option value="hero">Hero</option>
                        <option value="honda">Honda</option>
                    </select>
                    <button className='add-category'>Add Category</button>
                </div>
                
                <div className='stock-table'>
                    <table>
                        <tr>
                            <th>Part No.</th>
                            <th>Category</th>
                            <th>Product Name</th>
                            <th>HSN/SAC</th>
                            <th>GST Rate</th>
                            <th>Quantity</th>
                            <th>Product Rate</th>
                            <th>Purchase Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        <tr>
                            <td>1234</td>
                            <td>TVS</td>
                            <td>TVS Air Filter</td>
                            <td>9999</td>
                            <td>18%</td>
                            <td>5</td>
                            <td>300</td>
                            <td>02-02-22</td>
                            <td><button className='stock-delete'>Delete</button></td>
                            <td><button className='stock-update'>Update</button></td>
                        </tr>
                        <tr>
                            <td>1234</td>
                            <td>TVS</td>
                            <td>TVS Air Filter</td>
                            <td>9999</td>
                            <td>18%</td>
                            <td>5</td>
                            <td>300</td>
                            <td>02-02-22</td>
                            <td><button className='stock-delete'>Delete</button></td>
                            <td><button className='stock-update'>Update</button></td>
                        </tr>
                        <tr>
                            <td>1234</td>
                            <td>TVS</td>
                            <td>TVS Air Filter</td>
                            <td>9999</td>
                            <td>18%</td>
                            <td>5</td>
                            <td>300</td>
                            <td>02-02-22</td>
                            <td><button className='stock-delete'>Delete</button></td>
                            <td><button className='stock-update'>Update</button></td>
                        </tr>
                        <tr>
                            <td>1234</td>
                            <td>TVS</td>
                            <td>TVS Air Filter</td>
                            <td>9999</td>
                            <td>18%</td>
                            <td>5</td>
                            <td>300</td>
                            <td>02-02-22</td>
                            <td><button className='stock-delete'>Delete</button></td>
                            <td><button className='stock-update'>Update</button></td>
                        </tr>
                        <tr>
                            <td>1234</td>
                            <td>TVS</td>
                            <td>TVS Air Filter</td>
                            <td>9999</td>
                            <td>18%</td>
                            <td>5</td>
                            <td>300</td>
                            <td>02-02-22</td>
                            <td><button className='stock-delete'>Delete</button></td>
                            <td><button className='stock-update'>Update</button></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='stockpage-sidebar'>
                <button className='sale'>Sale</button>
                <button className='add'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default stockpage
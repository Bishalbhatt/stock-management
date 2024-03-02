import React from 'react';
import './stockpage.css';
import TopHeader from './../TopHeader/topheader';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[]= [
    { field: 'id', headerName: 'Part No.', width: 70 },
    { field: 'category', headerName: 'Category', width: 100 },
    { field: 'productName', headerName: 'Product Name', width: 100 },
    { field: 'hsn', headerName: 'HSN/SAC', width: 70 },
    { field: 'gst', headerName: 'GST Rate', width: 70, type: "percentage" },
    { field: 'quantity', headerName: 'Quantity', width: 70 },
    { field: 'productRate', headerName: 'Product Rate', width: 70 },
    { field: 'purchaseDate', headerName: 'Product Date', width: 100 },
  ];

  const rows = [
    { id: 123, category: 'TVS', productName: 'TVS Air Filter', hsn: 999, gst: "18%", quantity: 2, productRate: "300", purchaseDate: "2023-04-04" },
    { id: 124, category: 'TVS', productName: 'Bajaj Air Filter', hsn: 989, gst: "18%", quantity: 2, productRate: "300", purchaseDate: "2023-05-05" },
  ];
  

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
                    <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                    </div>
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
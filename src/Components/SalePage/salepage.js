import React from 'react';
import './salepage.css';
import TopHeader from './../TopHeader/topheader';

const salepage = () => {
  return (
    <div>
        <TopHeader />
        <div className="address">
            <h4>H. No. 29, Birubari, Near Kali Mandir, Guwahati -781016</h4>
        </div>
        <div className='invoice'>
            <h3>Sale Tax Invoice</h3>
        </div>
        <div className='storedetails'>
            <div className="store-bill-type">
                <div className='store-bill'>
                    <label for="bill-type">Sale Type: </label>
                    <select>
                        <option>Cash</option>
                        <option>Cheque</option>
                        <option>UPI</option>
                        <option>Credit</option>
                    </select>
                </div>
                <div className="store-gst">
                    <p>GSTIN :</p>
                    <p>18ALHPS6685D2ZK</p>
                </div>
                
            </div>
            <div className='store-address'>
                <div className='store-address-phone store-adress-fields'>
                    <p>Phone :</p>
                    <p>8919191919, 7177171717</p>
                </div>
                <div className='store-address-email store-adress-fields'>
                    <p>Email :</p>
                    <p>abc@gmail.com</p>
                </div>
                <div className='store-address-bank store-adress-fields'>
                    <p>SBI A/C No. :</p>
                    <p>42606606206</p>
                </div>
                <div className='store-address-ifsc store-adress-fields'>
                    <p>IFSC Code :</p>
                    <p>SBIN0006878</p>
                </div>
            </div>
        </div>

        <div className='user-details'>
            <div className='user-first-details'>
                <div className='userto userdetails'>
                    <label for="userto">To.</label>
                    <input type='text' name='userto' />
                </div>
                <div className='usergst userdetails'>
                    <label for="usergst">GSTIN:</label>
                    <input type='text' name='usergsr' />
                </div>
                <div className='userno userdetails'>
                    <label for="userno">Buyer’s Phone No.</label>
                    <input type='text' name='userno' />
                </div>
            </div>

            <div className='user-second-details'>
                <div className='userinvoice userdetails'>
                    <label for="userinvoice">Invoice No.</label>
                    <input type='text' name='userinvoice' />
                </div>
                <div className='uservehicleno userdetails'>
                    <label for="uservehicleno">Vehicle No.</label>
                    <input type='text' name='uservehicleno' />
                </div>
                <div className='userplace userdetails'>
                    <label for="userplace">Place of Supply</label>
                    <input type='text' name='userplace' />
                </div>
                <div className='userdate userdetails'>
                    <label for="userdate">Date</label>
                    <input type='text' name='userdate' />
                </div>
                <div className='userstate userdetails'>
                    <label for="userstate">State Code</label>
                    <input type='text' name='userstate' />
                </div>  
            </div>
        </div>

    </div>
  )
}

export default salepage
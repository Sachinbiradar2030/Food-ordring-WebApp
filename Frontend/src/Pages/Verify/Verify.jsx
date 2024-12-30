import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StroeContext } from '../../Context/StroeContext';
import axios from 'axios';
import { handleError, handleSuccess } from '../util';
const Verify = () => {
    const[searchParams,setSearchParms]=useSearchParams();
    const success=searchParams.get("success")
    const orderId=searchParams.get("orderId")
    // console.log(success,orderId);
    const{url}=useContext(StroeContext);
    const navigate=useNavigate();

    const verifyPayment=async()=>{
        const response=await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            // console.log(response.data.success);
             handleSuccess(response.data.message)
            setTimeout(()=>{
                
            navigate("/myorders");
            },2000)
           

        }
        else{
            navigate("/")
            handleError(response.data.message)
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])
    
  return (
    <div className='verify'>
    <div className="spinner"></div>
    </div>
  )
}

export default Verify

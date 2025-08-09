import { useContext, useEffect } from 'react';
import loaderImg from '../../assets/images/image4.svg';
import { ContextLoader } from './ContextLoader';

const Loader=()=>{
    const {setShowLoader,showLoader}=useContext(ContextLoader)
    useEffect(()=>{
        setInterval(()=>{
            setShowLoader(false)
        },1000)
    },[])
    return(
        <>
            {showLoader ? <div ><img className='Loader' src={loaderImg} alt="Loader" /></div> : null}
        </>
    )
}
export default Loader
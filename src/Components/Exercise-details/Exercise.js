import { getFromLocalStorage } from '../Utilities/Utilities';
import './Exercise.css'
import Swal from 'sweetalert2'
const Exercise = (props) => {
     
     const time = props.count;
     const totalTime = time.reduce((current,previous)=>current + previous,0)

    //  break time set 

    //  const breakTime = props.breakTime;
    let value = localStorage.getItem('break-time')
    if(value){
        value = getFromLocalStorage()
    }
    else{
        value = 0;
    }
    // toast
    const toastHandler = () =>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: `Congrats! You're done!`
          })
    }
    
    return (
        <div>
            <h5 className='text-center'>Exercise Details</h5>
            <div className='time'>
                <h5>Duration</h5>
                <p><span id='timing'>{totalTime}</span>s</p>
            </div>
            <div className='break-time'>
                <h5>Break time</h5>
                <p><span id="break-time-duration">{value}</span>s</p>
            </div>
            <button className='btn text-white btn-outline-dark' onClick={() => toastHandler()}>Activity Complete</button>
        </div>
    );
};

export default Exercise;
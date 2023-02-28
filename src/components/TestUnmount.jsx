import {useState , useEffect} from 'react';
function TestUnmount(){
    const [dateTime, SetDateTime] = useState(new Date());
    useEffect(()=>{
        console.log('Вмонтировано');
        const intervalTimer=setInterval(()=>{
            const currentDateTime=new Date();
            console.log(currentDateTime);
            SetDateTime(currentDateTime);
        },1000)
        return()=>{
            console.log('Будет размонтивовано');
            clearInterval(intervalTimer);   
        }
    },[]);
    return <div>Тестимо UnMount , {dateTime.toISOString()}</div>
}
export default TestUnmount;
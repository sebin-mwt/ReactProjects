import React from 'react'
import { useState } from 'react'

function Bmi() {

    let [height,setHeight]=useState(0);
    let [weight,setWeight]=useState(0);
    let [outs,setOut]=useState(null)

    function heightFix(event){
        setHeight(event.target.value);
    }

    function weightFix(event){
        setWeight(event.target.value);
    }

    function bmiCalculation(){

        if(height==0){
            alert("Height must be > zero!!")
            return
        }

        if(weight==0){
            alert("Weight must be > 0")
        }

        let h=height/100;
        setOut((weight/h**2).toFixed(3))

    }

  return (

    <div className="min-h-screen flex items-center justify-center">
        <div className='mx-auto  items-center max-w-xl rounded-xl p-6 shadow-lg outline outline-black/5 '>

            <div>
                <h3 className='text-center font-bold text-3xl'>BMI Calculator</h3>
                <p className='text-center text-gray-500'>Calculate your Body Mass Index</p>
            </div>

            <div className='mb-4'>

                <label className='block mb-1 ' htmlFor="height">Height :</label>

                <input
                    type="number"
                    id='height'
                    placeholder='Enter the height in cm'
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e)=>heightFix(e)}
                />

            </div>

            <div className=' mb-4'>

                <label className='block mb-1' htmlFor="weight">Weight :</label>
                
                <input
                    type="number"
                    id='weight'
                    placeholder='Enter the weight in kg'
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e)=> weightFix(e)}
                />

            </div>

                <button className="w-full text-white p-2 border  bg-blue-500 rounded-2xl hover:bg-blue-800 transition" onClick={bmiCalculation}>Calculate</button>

                <div className='result bg-gray-100 p-6 m-2'>
                        <h2 className='text-center'>Your BMI : {outs}</h2>
                        <p className='text-center text-gray-500 mt-3'>Healthy bmi ranges between 18.5 and 24.9</p>
                       
                </div>

        </div>
    </div>
  )
}

export default Bmi
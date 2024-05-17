import React, { useState } from 'react'

const Product = () => {
    let[colortext,setcolortext]=useState("Black")
    const [activeButton, setActiveButton] = useState(1);
    let [pricebtn1,setpricebtn1]=useState(1)
    function addblack(btn){
        document.querySelector("#phoneimg").src="./src/assets/iphone black.png"
        setActiveButton(btn)
        setcolortext("Black")
    }
    function addpink(btn){
        document.querySelector("#phoneimg").src="./src/assets/iphone pink.png"
            setActiveButton(btn)
            setcolortext("Pink")

    }
    function addred(btn){
        document.querySelector("#phoneimg").src="./src/assets/iphone red.png"
            setActiveButton(btn)
            setcolortext("Red")
    }
    function addpricebtn1(btn1){
        setpricebtn1(btn1)

    }
  return (
    <>
    <div id="covercon" className=' place-content-center h-screen font-sans'>
    <div id="container" className='  flex w-[50%] mx-auto h-[30rem] '>
        <div id="box1" className='w-full place-content-center border-dotted border-4 border-slate-200 rounded-lg'>
            <img id="phoneimg" className='w-[20rem] h-[20rem] mx-auto ' src="./src/assets/iphone black.png" alt="" />
        </div>
        <div id="box2" className=' space-y-3 pt-[1.5rem] pl-5 pr-5 w-full'>
            <h1 className='text-center text-2xl font-bold'>Customize your case</h1>
            <div className=' w-3/4 mx-auto h-[1px] bg-slate-400'></div>
            <p id="colortext">Color: {colortext}</p>
            <div className='flex gap-2' id="colors">
                <button onClick={() => addblack(1)} className={`w-10 h-10 bg-black rounded-full  ${activeButton === 1 ? "outline outline-offset-2": ""} `}></button>
                <button onClick={() =>addpink(2)} className={`w-10 h-10 bg-red-200 rounded-full  ${activeButton === 2 ? "outline outline-offset-2": ""} `}></button>
                <button onClick={() =>addred(3)} className={`w-10 h-10 bg-red-600 rounded-full  ${activeButton === 3 ? "outline outline-offset-2": ""} `}></button>
            </div>
            <p>Modal</p>
            <select className='w-full border rounded h-[30px] px-3' name="" id="" >
                <option value="iPhone 11">iPhone 11</option>
                <option value="">iPhone 12</option>
            </select>
            <p>Price</p>
            <button onClick={()=>addpricebtn1(1)} className={` ${pricebtn1===1?"border-green-500 border-2":""} w-full h-[50px] flex border rounded justify-between items-center px-4`}>
                <p >Somethings</p>
                <p>+ $0.00</p>
            </button>
            <button onClick={()=>addpricebtn1(2)} className={` ${pricebtn1===2?"border-green-500 border-2":""} w-full flex border rounded justify-between items-center px-4`}>
                <div id="text">
                <p className='text-left'>Somethings</p>
                <p className='text-left'>Somethings Somethings</p>
                </div>
                <p>+ $5.00</p>
            </button>
            <div className=' w-3/4 mx-auto h-[1px] bg-slate-400'></div>
            <button className=' w-full h-[50px] flex justify-center gap-2 rounded items-center text-white bg-green-600 font-bold'>Continue 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>


            </button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Product

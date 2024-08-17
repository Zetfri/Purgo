import React from 'react';
import Arrow from "../Assets/Vector (2).png";
import Cards from './cards';

const Company = () => {
    return (
        <div>
            <div className='w-full h-[450px] flex sm:flex-col bg-[#E3E3E3] px-10 sm:px-4 sm:gap-4 sm:h-auto sm:py-10'>
                <div className='w-[50%] h-full sm:w-full flex flex-col px-10 pt-20 sm:px-0 sm:pt-0'>
                    <button className='w-[160px] h-[40px] bg-[#81818133] mt-0 rounded-[90px] text-[#292AFF] sm:mt-0 ' style={{fontWeight: "600"}}>О компании</button>
                    <p className='text-[30px] sm:mt-2' style={{fontWeight: "500", lineHeight: "36.63px"}}>Компания <span className='text-[#292AFF]' style={{fontWeight: "600"}}>Purgo</span> Профессионально на высоком уровне качества выполняет все виды сантехнических работ в Ангрене и Ташкентской области.</p>
                </div>
                <div className='w-[50%] h-full mt-[-50px] pt-32 sm:pt-0 sm:mt-0 sm:w-full flex justify-center items-center flex-col'>
                    <p className='text-[#818181] w-[496px] text-justify sm:w-full'>Специалисты компании будут рады помочь, если Вам понадобится замена труб, установка радиаторов отопления, установка счетчика ГВС и ХВС, а также помогут с установкой сантехники и подключением различной бытовой техники. Вы можете смело обращаться к нашим специалистам и быть уверенными, что все работы будут выполнены быстро и качественно.</p>
                <div className='flex justify-center items-center sm:ml-[-30px] mt-[-20px]'>
                <button
              className="w-[225px] h-[50px] flex justify-center mt-10 ml-[-225px] sm:ml-[-60px] items-center gap-4 border border-black rounded-[90px] text-black"
              style={{ fontWeight: "600" }}
            >
              Бесплатная консультация
            </button>
            <div className="w-[50px] h-[50px] mt-10 bg-[#292AFF] flex justify-center items-center rounded-[90px]">
                <img src={Arrow} alt="Arrow" />
              </div>
                </div>      
                </div>
            </div>
            <Cards/>
        </div>
    );
}

export default Company;

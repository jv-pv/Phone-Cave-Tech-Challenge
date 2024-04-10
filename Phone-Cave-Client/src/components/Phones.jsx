import axios from 'axios'
import { API_URL } from '../services/API_URL'
import { useEffect, useState } from 'react'
import PhoneModal from './PhoneModal'
import PhoneDetails from './PhoneDetails'
import PhoneCard from './PhoneCard'

const Phones = () => {

    const [phones, setPhones] = useState([])
    const [phoneDetails, setPhoneDetails] = useState({})
    const [showModal, setShowModal] = useState(false)

    const fetchPhones = async () => {
        try {
            const response = await axios.get(`${API_URL}/phones`)
            setPhones(response.data)
        } catch (error) {   
            console.error("Error fetching phoens", error)
        }
    }

    const fetchPhoneDetails = async (phoneId) => {
        try {
            const response = await axios.get(`${API_URL}/phones/details/${phoneId}`)
            setPhoneDetails(response.data)
        } catch (error) {
            console.error("Error fetching phoens", error)
        }
    }

    useEffect(() => {
        fetchPhones()
    },[])


  return (
    <>
    <h1 className='text-center text-[2rem] text-white mb-10 mt-5'>Phones:</h1>
    <section className='grid grid-cols-3 place-items-center gap-5 w-full h-full max-h-[40rem] px-5 overflow-y-scroll'>
        {phones.map((phone) => (
            <PhoneCard phone={phone} setShowModal={setShowModal} fetchPhoneDetails={fetchPhoneDetails} />
        ))}
                <PhoneModal
                showModal={showModal}
                setShowModal={setShowModal}
                >

                    <PhoneDetails phoneDetails={phoneDetails}/>

                </PhoneModal>
    </section>
    </>

  )
}

export default Phones


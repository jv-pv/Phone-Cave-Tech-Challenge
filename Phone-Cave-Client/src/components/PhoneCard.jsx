const PhoneCard = ({phone, setShowModal, fetchPhoneDetails}) => {
  return (
    <article key={phone._id} className='cursor-pointer' onClick={() => {
        setShowModal(true)
        fetchPhoneDetails(phone._id)
    }}>
            <img src={`images/${phone.imageFileName}`} alt="galaxy-s7" className='w-96'/>


    </article>
  )
}

export default PhoneCard
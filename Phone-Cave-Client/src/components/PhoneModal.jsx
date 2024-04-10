
const PhoneModal = ({children, showModal, setShowModal}) => {
  return showModal ? (
    <div className="fixed inset-0 flex justify-center items-center z-10 backdrop-blur-sm bg-blackOpaque" onClick={() => setShowModal(false)}>
        <div onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  ) : (
    null
  )
}

export default PhoneModal
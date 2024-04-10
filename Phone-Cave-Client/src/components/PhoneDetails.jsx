const PhoneDetails = ({phoneDetails}) => {

  const upperCaseColor = phoneDetails.color.slice(0,1).toUpperCase() + phoneDetails.color.slice(1)

  return (
    <article className='flex items-center  w-[50rem] h-auto bg-gray-900 text-white'>
      <div className='flex-2'>
        <img src={`images/${phoneDetails.imageFileName}`} className='w-96' />
      </div>
      <div className='flex flex-col gap-3 flex-1 p-5'>
        <span className='flex gap-1 text-2xl'>
          <p>{phoneDetails.manufacturer}</p>
          <p>{phoneDetails.name}</p>
        </span>
        <p>{phoneDetails.description}</p>
        <p>
          <strong>Color:</strong> {upperCaseColor}
        </p>
        <p>
          <strong>Price:</strong> ${phoneDetails.price}
        </p>
        <p>
          <strong>Screen:</strong> {phoneDetails.screen}
        </p>
        <p>
          <strong>Processor:</strong> {phoneDetails.processor}
        </p>
        <p>
          <strong>RAM:</strong> {phoneDetails.ram}gb
        </p>
      </div>
    </article>
  );
};

export default PhoneDetails;

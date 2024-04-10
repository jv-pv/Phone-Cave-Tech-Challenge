const Navbar = () => {
  return (
    <header className='flex items-center justify-evenly gap-4 w-full h-auto py-3 px-2'>
      <section className='relative flex items-center justify-center'>
        <p className='absolute text-[9vw]'>📱</p>
        <img src='/svg/colorful-shape-17.svg' className='w-full h-full min-h-72 max-h-96' />
      </section>
      <div className='text-gray-200 text-[14vw] font-sans tracking-tight'>
        Phone Cave
      </div>
    </header>
  );
};

export default Navbar;

import InputItems from './InputItems';

function Home() {
  return (
    <div className='w-[120rem] h-[40rem] absolute  top-[45rem] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col'>
      <h2 className='welcome text-center '>
        Test your knowledge on any topic, any difficulty
      </h2>
      <InputItems />
    </div>
  );
}

export default Home;

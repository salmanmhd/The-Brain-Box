function StartScreen({ numQuestions, dispatch }: any) {
  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <InputItems />
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;

function InputItems() {
  return (
    <div className='text-2xl w-[60rem] text-center'>
      <form className='space-x-4 flex justify-between bg-red-500 w-full'>
        <input
          className='input-item rounded-full  border border-gray-200 w-[22rem] h-[5rem] '
          type='text'
          placeholder='Enter the quiz topic'
        />
        <select className='rounded-full  border border-gray-200 w-[22rem] h-[5rem]'>
          <option value=''>Choose number of Qs</option>
          <option value=''>5</option>
          <option value=''>10</option>
          <option value=''>15</option>
          <option value=''>20</option>
          <option value=''>25</option>
          <option value=''>30</option>
        </select>
        <select className='rounded-full  border border-gray-200 w-[22rem] h-[5rem]'>
          <option value=''>Choose Difficulty</option>
          <option value=''>Easy</option>
          <option value=''>Medium</option>
          <option value=''>hard</option>
        </select>
      </form>
    </div>
  );
}

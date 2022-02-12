export default function RawData() {
  return (
    <div>
      <h1 className="page-title">Raw Data</h1>
      <div className="flex flex-col my-2 relative h-44 rounded bg-gradient-to-tr from-red-500 to-indigo-500">
        <img
          src="/assets/bg.png"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="hidden md:flex items-center gap-5">
          <img
            src="/assets/avatar.jpg"
            className="absolute -bottom-10 left-12 w-32 rounded-full border-[6px] border-slate-900"
          />
          <h1 className="text-xl uppercase font-extrabold absolute bottom-3 left-48 text-white">
            Author Name
          </h1>
        </div>
      </div>
      <div className="md:hidden flex items-center gap-3">
        <img
          src="/assets/avatar.jpg"
          className="rounded-full border-4 border-slate-900 md:hidden w-16 "
        />
        <h1 className="text-xl uppercase font-extrabold">Author Name</h1>
      </div>
      <div className="mt-4 md:mt-16">
        <h1 className="title">Raw Data Details:</h1>
      </div>
      <div className="flex flex-col p-2">
        <div className="flex flex-wrap gap-5">
          <div>
            <h1 className="font-semibold text-sm">Category:</h1>
            <p className="text-gray-500 pl-2 text-xs">Something</p>
          </div>
          <div>
            <h1 className="font-semibold text-sm">Type:</h1>
            <p className="text-gray-500 pl-2 text-xs">Action</p>
          </div>
          <div>
            <h1 className="font-semibold text-sm">Posted:</h1>
            <p className="text-gray-500 pl-2 text-xs">2022/02/12</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6">
        <div className="flex items-center gap-2">
          <h1 className="uppercase font-semibold">Code:</h1>
          <button className="px-2 py-1 text-xs uppercase font-semibold bg-slate-800 rounded hover:bg-red-500 hover:text-slate-900 transition-all duration-150 ease-in-out">
            Click to Copy
          </button>
        </div>
        <pre className="bg-slate-800 rounded p-2 my-3">{`<sample raw data code>`}</pre>
      </div>
    </div>
  );
}

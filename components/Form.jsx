import Input from "./Input";
import Button from "./Button";

export default function Form() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="py-4 font-semibold text-4xl ">Candidate Registration</h1>
      <div className="space-y-6 w-full flex flex-col items-center">
        <div className="space-x-4 flex">
          <h1 className="">Name</h1>
          <Input type={"text"} name={"name"} />
        </div>

        <div className="space-x-4 flex">
          <h1>Name</h1>
          <input
            type="text"
            name="name"
            className="border-2 border-neutral-800 w-full"
          />
        </div>

        <div className="space-x-4 flex">
          <h1>Name</h1>
          <input
            type="text"
            name="name"
            className="border-2 border-neutral-800 w-full"
          />
        </div>

        <div className="space-x-4 flex">
          <h1>Email</h1>
          <input
            type="text"
            name="email"
            className="border-2 border-neutral-800 w-full"
          />
        </div>

        <button
          className="w-full cursor-pointer bg-sky-500 text-neutral-800 font-semibold px-3 py-1 
        rounded-md border-2 border-sky-500 hover:bg-transparent hover:text-sky-500"
          //   onClick={onClick}
        >
          Register
        </button>
      </div>
    </div>
  );
}

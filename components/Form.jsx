import Input from "./Input";
import Button from "./Button";
import DataList from "./DataList";

export default function Form() {
  const handleSubmit = () => {};

  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-10 font-semibold text-4xl text-neutral-600">
        Candidate Registration
      </h1>
      <div className="space-y-6 flex flex-col items-center w-3/5">
        <div className="flex w-full space-x-4">
          <input
            type="text"
            name="name"
            className="border-2 border-neutral-800 w-3/5 py-2 px-4 placeholder-slate-800 rounded-sm"
            placeholder="Name"
          />

          <input
            type="text"
            name="admission no"
            className="border-2 border-neutral-800 w-2/5 py-2 px-4 placeholder-slate-800"
            placeholder="Admission No"
          />
        </div>

        {/*should be a dropdown */}
        <input
          type="text"
          name="branch"
          className="border-2 border-neutral-800 w-full py-2 px-4 placeholder-slate-800"
          placeholder="Branch"
        />

        {/*should be a dropdown */}
        <input
          type="text"
          name="discipline"
          className="border-2 border-neutral-800 w-full py-2 px-4 placeholder-slate-800"
          placeholder="Discipline"
        />

        <div className="flex w-full space-x-4">
          {/*Dropdown choose from numbers 1 to 5*/}
          <input
            type="text"
            name="year"
            className="border-2 border-neutral-800 w-1/2 py-2 px-4 placeholder-slate-800"
            placeholder="Year"
          />

          <input
            type="text"
            list="cgpa"
            name="cgpa"
            className="border-2 border-neutral-800 w-1/2 py-2 px-4 placeholder-slate-800"
            placeholder="CGPA"
          />

          {/*Dropdown choose from numbers 1 to 10*/}
        </div>

        <input
          type="email"
          name="email"
          className="border-2 border-neutral-800 w-full py-2 px-4 placeholder-slate-800"
          placeholder="Institute Email"
        />

        <DataList className="border-2 border-neutral-800 py-2 px-4 placeholder-slate-800" />

        <Button
          buttonContent={"Register"}
          customWidth={"w-full"}
          onClick={handleSubmit}
          bgColor={"bg-sky-500"}
          textColor={"text-neutral-50"}
          hoverBgColor={"bg-transparent"}
          hoverTextColor={"text-sky-500"}
          borderColor={"border-sky-500"}
        />
      </div>
    </div>
  );
}

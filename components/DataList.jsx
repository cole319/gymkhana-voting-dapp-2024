import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DataList() {
  return (
    <Select>
      <SelectTrigger className="w-full border-2 border-neutral-800 py-2 px-4 placeholder-slate-800 ">
        <SelectValue
          placeholder="Select Group"
          className="placeholder-slate-800"
        ></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="A">
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Group A</h1>
            <p className="text-neutral-600 p-1">
              3rd Year B.Tech./BE/Dual Degree/Integrated M.Tech
            </p>
          </div>
        </SelectItem>
        <SelectItem value="B">
          {" "}
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Group B</h1>
            <p className="text-neutral-600 p-1">
              2nd Year B.Tech./BE/Dual Degree/Integrated M.Tech
            </p>
          </div>
        </SelectItem>
        <SelectItem value="C">
          {" "}
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Group C</h1>
            <p className="text-neutral-600 p-1">
              1st Year B.Tech./BE/Dual Degree/Integrated M.Tech
            </p>
          </div>
        </SelectItem>
        <SelectItem value="D">
          {" "}
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Group D</h1>
            <p className="text-neutral-600 p-1">
              M.Tech. (1st Year) + Dual Degree/Integrated M.Tech (4th Year)
            </p>
          </div>
        </SelectItem>
        <SelectItem value="E">
          {" "}
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Group E</h1>
            <p className="text-neutral-600 p-1">
              2 Yr. M.Sc (1st Year) + 3 Yr. M.Sc Tech (1st year & 2nd year) + 2
              Yr. MBA (1st Year)
            </p>
          </div>
        </SelectItem>
        <SelectItem value="F">
          {" "}
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Group F</h1>
            <p className="text-neutral-600 p-1">
              Ph.D (Full time) (1st year & 2nd year) student only
            </p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

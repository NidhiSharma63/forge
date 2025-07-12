import { Toolbox } from "@/components/elementsPanel";
import { Editor } from "@craftjs/core";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="border-2 border-amber-500 h-[300px] w-full">
        Header
      </header>
      <Editor className="flex-1/2">
        <div className="flex-1 grid grid-cols-4 gap-4 w-full border-2 border-b-amber-950">
          <Toolbox />
          <div className="col-span-2">04</div>
          <div className="text-3xl">01</div>
        </div>
      </Editor>
    </div>
  );
};

export default App;

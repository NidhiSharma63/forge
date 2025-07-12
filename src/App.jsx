import { Toolbox } from "@/components/elementsPanel";
import { Editor } from "@craftjs/core";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <header className="h-[50px] w-full">Header</header>
      <Editor className="">
        <div className="grid h-[calc(100vh-50px)] grid-cols-6 gap-4 w-full border-2 border-amber-950">
          <Toolbox />
          <div className="col-span-4 border-2 border-amber-400">04</div>
          <div className="text-3xl border-2 border-blue-400">01</div>
        </div>
      </Editor>
    </div>
  );
};

export default App;

import { useEditor } from "@craftjs/core";

const SettingsPanel = () => {
  const { selected, nodes } = useEditor((state) => ({
    selected: state.events.selected,
    nodes: state.nodes,
  }));

  const selectedNodeId = Array.from(selected || [])[0];
  const selectedNode = selectedNodeId && nodes[selectedNodeId];

  // console.log("Selected Node ID:", selectedNodeId);
  // console.log("Selected Node:", selectedNode);
  console.log("Node name:", selectedNode?.data?.name);
  console.log("Related settings:", selectedNode?.related?.settings);
  const Settings = selectedNode?.related?.settings;

  return (
    <div className="p-4 border-t bg-white">
      <p className="text-sm font-semibold mb-2 text-center">Settings</p>
      {Settings ? (
        <Settings />
      ) : (
        <p className="text-gray-400 text-xs text-center">
          No component selected
        </p>
      )}
    </div>
  );
};

export default SettingsPanel;

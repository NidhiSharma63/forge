import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import useTemplate from "../api/queries/useTemplate";
import { ButtonConfig } from "../puckComponents/Button";
import { CardConfig } from "../puckComponents/Card";
import { DivBlockConfig } from "../puckComponents/DivBlock";
import { FlexContainerConfig } from "../puckComponents/Flex";
import { FlexItemConfig } from "../puckComponents/FlexItem";
import { GridConfig } from "../puckComponents/Grid";
import { HeadingConfig } from "../puckComponents/Heading";
import { ImageBlockConfig } from "../puckComponents/Image";
import { ParagraphConfig } from "../puckComponents/Paragraph";
import { SpacerConfig } from "../puckComponents/Spacer";
// Create Puck component config
const config = {
  components: {
    Grid: GridConfig,
    "Grid Cell": CardConfig,
    Image: ImageBlockConfig,
    Flex: FlexContainerConfig,
    "Flex Item": FlexItemConfig,
    Spacer: SpacerConfig,
    Button: ButtonConfig,
    HeadingBlock: HeadingConfig,
    ParagraphBlock: ParagraphConfig,
    "Magic Block": DivBlockConfig,
  },
};

// Describe the initial data

const PuckEditor = () => {
  const { id } = useParams();
  const {
    useCreateTemplateQuery,
    useGetSingleTemplatesQuery,
    useUpdateTemplateQuery,
  } = useTemplate();
  const { mutateAsync: createTemplate } = useCreateTemplateQuery();
  const { mutateAsync: updateTemplate } = useUpdateTemplateQuery();
  const { data } = useGetSingleTemplatesQuery(id);
  const [initialState, setInitialState] = useState({});

  useEffect(() => {
    setInitialState(data?.templateData);
  }, [data]);

  const handlePublish = async (payload) => {
    toast.info(`We are ${id ? "updating" : "creating"} a template`);
    const finalPayload = {
      content: payload.content,
      root: payload.root,
      zones: payload.zones,
    };
    if (id) {
      await updateTemplate({ data: finalPayload, templateId: id });
      toast.success("Template updated successfully");
      return;
    }
    await createTemplate({ data: finalPayload });
    toast.success("Template created successfully");
  };
  if (!initialState) return <div>Loading...</div>;
  return <Puck config={config} data={initialState} onPublish={handlePublish} />;
};

export default PuckEditor;

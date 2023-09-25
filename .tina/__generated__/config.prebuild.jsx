// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: "b92a88af-d7fe-4754-a46a-63c1f4fa343f",
  // Get this from tina.io
  token: "3dcd413600bd9639c48b1b6f7a61bf79fdf8a689",
  // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "P\xE1gina de inicio",
        name: "p_gina_de_inicio",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "Introducci\xF3n",
        name: "introducci_n",
        path: "content/1 Introducci\xF3n",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "Uso",
        name: "uso",
        path: "content/2 Uso",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      },
      {
        format: "md",
        label: "Funciones",
        name: "funciones",
        path: "content/3 Funciones",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'

export default defineConfig({
  title: "portfolio_website",
  projectId: "f3rk7js8",
  dataset: "production",
  plugins: [
    deskTool(),
    visionTool()
  ],
  schema: {
    types: schemas,
  },
});
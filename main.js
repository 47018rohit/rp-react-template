import { createProject } from "./create.js";
import { intro, text, select, spinner, outro } from "@clack/prompts";

async function run() {
  intro("🚀 Create React Template");

  const projectName = await text({
    message: "Project name?",
    validate(value) {
      if (!value) return "Project name is required";
    },
  });

  const cssOption = await select({
    message: "Choose a CSS preprocessor:",
    options: [
      { value: "none", label: "None" },
      { value: "sass", label: "Sass" },
      { value: "less", label: "Less" },
    ],
  });

  const s = spinner();
  s.start("Creating project...");

  try {
    await createProject(projectName, cssOption);
    s.stop("Project created!");
    outro(`🎉 Done! Your project "${projectName}" is ready.`);
  } catch (err) {
    s.stop("Failed");
    console.error(err);
    outro("❌ Failed to create project. See error above.");
    process.exit(1);
  }
}

run();

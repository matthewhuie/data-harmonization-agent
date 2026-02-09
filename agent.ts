import { LlmAgent } from '@google/adk';
import { PROMPT_ROOT, PROMPT_SOURCE, PROMPT_HARMONIZE, PROMPT_FEEDBACK } from './prompts.ts';
import { config } from './config.ts';

export const sourceAgent = new LlmAgent({
  name: 'source_agent',
  model: config.model,
  description: "",
  instruction: PROMPT_SOURCE,
});

export const harmonizeAgent = new LlmAgent({
  name: 'harmonize_agent',
  model: config.model,
  description: "",
  instruction: PROMPT_HARMONIZE,
});

export const feedbackAgent = new LlmAgent({
  name: 'feedback_agent',
  model: config.model,
  description: "",
  instruction: PROMPT_FEEDBACK,
});

export const rootAgent = new LlmAgent({
  name: 'root_agent',
  model: config.model,
  subAgents: [sourceAgent, harmonizeAgent, feedbackAgent],
  description: "Root orchestrator for a data harmonization agent - ingest, analysis, mapping, and review.",
  instruction: PROMPT_ROOT,
});

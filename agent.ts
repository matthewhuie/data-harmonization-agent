import { LlmAgent } from '@google/adk';
import { PROMPT_ROOT, PROMPT_SOURCE, PROMPT_HARMONIZE, PROMPT_FEEDBACK } from './prompts';
import { config } from './config';

export const rootAgent = new LlmAgent({
  name: 'root_agent',
  model: config.model,
  subAgents: [rootAgent, sourceAgent, harmonizeAgent, feedbackAgent],
  description: "Root orchestrator for a data harmonization agent - ingest, analysis, mapping, and review.",
  instruction: PROMPT_ROOT,
});

export const sourceAgent = new LlmAgent({
});

export const harmonizeAgent = new LlmAgent({
});

export const feedbackAgent = new LlmAgent({
});

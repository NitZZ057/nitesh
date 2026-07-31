import { ShieldCheck, Sparkles, Target } from 'lucide-react';

export const caseStudies = {
  'policy-assistant': {
    slug: 'policy-assistant',
    badge: 'Multi-Agent AI Policy Assistant',
    titleLead: 'Policy analysis, engineered for',
    titleAccent: 'trust and automation.',
    intro:
      'Designed and built a multi-agent RAG system for insurance policy analysis using LangChain, FastAPI, Pinecone, document embeddings, and Ragas evaluation.',
    highlights: ['90%+ faithfulness', 'Reduced manual effort', 'Document-grounded answers', 'Production API boundary'],
    mockup: 'policy',
    repo: 'https://github.com/NitZZ057',
    summary: [
      {
        label: 'Problem',
        icon: Target,
        copy:
          'Insurance policy analysis depends on dense documents, exceptions, and workflow rules. Manual review was slow, difficult to scale, and risky when teams needed both speed and accuracy.',
      },
      {
        label: 'Solution',
        icon: Sparkles,
        copy:
          'Architected a multi-agent system with LangChain, a FastAPI inference backend, and a Pinecone-backed RAG pipeline to retrieve policy context before generating answers.',
      },
      {
        label: 'Usage',
        icon: ShieldCheck,
        copy:
          'Designed for document-grounded insurance workflows where responses must be traceable, evaluated, and stable enough to support operational decisions.',
      },
    ],
    architectureTitle: 'User to evaluated output',
    architectureIntro:
      'The architecture keeps the model behind explicit retrieval, orchestration, and evaluation boundaries.',
    architectureFlow: [
      {
        step: 'User',
        copy: 'Insurance user asks a policy question or submits a document-driven workflow request.',
      },
      {
        step: 'API',
        copy: 'FastAPI receives the request, validates inputs, and creates a stable boundary for AI inference.',
      },
      {
        step: 'Agent',
        copy: 'LangChain agents classify intent, plan the task, and decide when retrieval or reasoning is required.',
      },
      {
        step: 'Retriever',
        copy: 'Pinecone returns policy clauses, document chunks, and relevant context from embedded insurance documents.',
      },
      {
        step: 'LLM',
        copy: 'The model generates an answer constrained by retrieved context instead of relying on memory alone.',
      },
      {
        step: 'Evaluation',
        copy: 'Ragas checks faithfulness and answer quality before the response is treated as workflow-ready.',
      },
      {
        step: 'Output',
        copy: 'The system returns a grounded response with enough structure to support downstream policy workflows.',
      },
    ],
    components: [
      {
        title: 'Multi-Agent System',
        copy: 'Designed agents for planning, retrieval, reasoning, and response generation so policy analysis could be handled as a controlled workflow instead of one long prompt.',
      },
      {
        title: 'RAG Pipeline',
        copy: 'Built ingestion, chunking, embeddings, Pinecone indexing, and retrieval orchestration to ground answers in actual insurance policy documents.',
      },
      {
        title: 'Evaluation Layer',
        copy: 'Used Ragas to measure faithfulness and answer quality, reaching 90%+ faithfulness and creating a feedback loop for improving retrieval behavior.',
      },
    ],
    impactTitle: 'Measured quality, lower review load, production-ready boundaries.',
    impact: [
      'Achieved 90%+ faithfulness using Ragas evaluation.',
      'Reduced manual policy review effort through document-grounded automation.',
      'Improved answer accuracy by forcing retrieval before generation.',
      'Designed the AI layer behind FastAPI contracts for production integration.',
    ],
    decisions: [
      {
        title: 'Why RAG Over Fine-Tuning',
        copy: 'Insurance knowledge changes across documents and policies. RAG keeps answers grounded in current source material without retraining for every policy update.',
      },
      {
        title: 'Why FastAPI',
        copy: 'FastAPI gives the AI layer a clean production API boundary with validation, async-friendly endpoints, and straightforward integration with backend workflows.',
      },
      {
        title: 'Why Evaluation Layer',
        copy: 'LLM output needs measurement before trust. Ragas made faithfulness visible, testable, and improvable instead of relying on subjective review.',
      },
      {
        title: 'Why Agent-Based Design',
        copy: 'Policy analysis is multi-step work. Agents separate planning, retrieval, and reasoning so the system can handle complex requests with clearer control.',
      },
    ],
    tech: ['FastAPI', 'LangChain', 'Pinecone', 'Ragas', 'Document Embeddings', 'LLMs', 'Python'],
  },

  'contract-intelligence': {
    slug: 'contract-intelligence',
    badge: 'Contract Intelligence Platform',
    titleLead: 'Contract review, engineered for',
    titleAccent: 'clause-level certainty.',
    intro:
      'Built a production contract analysis platform that detects clause-level changes between contract versions, answers natural language questions with source attribution, and reports Ragas scores on every deployment.',
    highlights: ['0.91 Ragas faithfulness', 'Clause-level risk detection', 'Async ingestion pipeline', 'GDPR and EU AI Act aware'],
    mockup: 'contract',
    repo: 'https://github.com/NitZZ057/Contract-intelligence',
    summary: [
      {
        label: 'Problem',
        icon: Target,
        copy:
          'Legal and compliance teams compare contract versions by hand. A halved payment window or a newly added liability clause is easy to miss, slow to find, and almost impossible to audit across a portfolio.',
      },
      {
        label: 'Solution',
        icon: Sparkles,
        copy:
          'Built a platform that ingests contracts asynchronously, embeds every clause, detects added, removed, and modified clauses between versions with risk classification, and answers questions against the retrieved text.',
      },
      {
        label: 'Usage',
        icon: ShieldCheck,
        copy:
          'Designed for regulated legal workflows: every answer carries its source clauses and a confidence score, and retrieval quality is measured with Ragas rather than assumed.',
      },
    ],
    architectureTitle: 'Upload to streamed, scored output',
    architectureIntro:
      'Ingestion runs off the request path, retrieval constrains the model, and every answer carries the clauses it came from.',
    architectureFlow: [
      {
        step: 'Upload',
        copy: 'A contract PDF is uploaded through the React frontend. The API returns 202 Accepted with a contract ID instead of blocking on processing.',
      },
      {
        step: 'API',
        copy: 'FastAPI validates the request and hands work to the queue. Routers stay thin, services orchestrate, and repositories own every database call.',
      },
      {
        step: 'Queue',
        copy: 'Celery workers pick up the contract and move it through a defined lifecycle: pending, processing, then processed or failed.',
      },
      {
        step: 'Ingestion',
        copy: 'pypdf extracts the text and a recursive character splitter chunks it into clause-sized segments suited to retrieval.',
      },
      {
        step: 'Embeddings',
        copy: 'Chunks are embedded with text-embedding-3-small and upserted into Pinecone with contract metadata for filtered search.',
      },
      {
        step: 'Retrieval',
        copy: 'Questions and comparisons pull semantically relevant clauses, scoped to the correct contract by metadata filter.',
      },
      {
        step: 'LLM',
        copy: 'GPT-4o-mini reasons only over retrieved clauses, producing either a grounded answer or a structured clause-level diff with risk levels.',
      },
      {
        step: 'Evaluation',
        copy: 'Ragas scores faithfulness, answer relevancy, and context precision against a curated contract test set.',
      },
      {
        step: 'Stream',
        copy: 'Results stream back over Server-Sent Events, so clauses render progressively instead of arriving after a long wait.',
      },
    ],
    components: [
      {
        title: 'Change Detection Agent',
        copy: 'Compares two contract versions and returns structured output: added, removed, and modified clauses, each with a clause type, a risk level, and a plain-English explanation of what the change means commercially.',
      },
      {
        title: 'RAG Q&A Pipeline',
        copy: 'Chunking, embeddings, Pinecone retrieval with metadata filtering, and a LangChain chain that returns the answer alongside its source chunks and a confidence score.',
      },
      {
        title: 'Async Ingestion Pipeline',
        copy: 'Celery and Redis decouple contract processing from the HTTP lifecycle, so uploads stay instant and workers scale horizontally as contract volume grows.',
      },
    ],
    impactTitle: 'Measured retrieval quality, instant uploads, answers a reviewer can check.',
    impact: [
      'Ragas scores of 0.91 faithfulness, 0.87 answer relevancy, and 0.84 context precision on a curated contract test set.',
      'Clause-level change detection with risk classification replaces manual version-by-version review.',
      'Async Celery ingestion keeps uploads instant and lets processing scale independently of the API.',
      'Every answer ships with source clauses and a confidence score for GDPR and EU AI Act review.',
    ],
    decisions: [
      {
        title: 'Why Celery For Ingestion',
        copy: 'Parsing, chunking, and embedding a contract takes far longer than an HTTP request should. Moving it to workers keeps upload instant and lets processing scale independently of the API.',
      },
      {
        title: 'Why Router, Service, Repository',
        copy: 'Business logic never sits in HTTP handlers. Repositories own database access and services orchestrate, so each layer can be tested on its own without standing up the whole stack.',
      },
      {
        title: 'Why Streaming Responses',
        copy: 'Change detection across a full contract is not a fast call. Server-Sent Events let clauses render as they are found instead of leaving the reviewer on a spinner.',
      },
      {
        title: 'Why Measured Evaluation',
        copy: 'Legal AI is high-risk under the EU AI Act. Ragas scores, source attribution, and confidence values make the pipeline reviewable instead of a black box.',
      },
    ],
    tech: [
      'FastAPI 0.115',
      'LangChain 0.3',
      'Pinecone',
      'PostgreSQL',
      'SQLAlchemy 2.0 Async',
      'Celery + Redis',
      'GPT-4o-mini',
      'Ragas',
      'React + TypeScript',
      'Docker',
    ],
  },
};

export const defaultCaseStudy = 'policy-assistant';

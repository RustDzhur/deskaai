export type KnowledgeBaseCollection = {
  id: string;
  name: string;
  description?: string;
  config?: Record<string, any>;
  account_id: string;
  visibility: 'private' | 'public';
  inserted_at: string;
  updated_at: string;
  document_count: number;
};

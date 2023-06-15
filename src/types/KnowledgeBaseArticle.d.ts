import {DocumentSourceType} from './DocumentSourceType';

export type KnowledgeBaseArticle = {
  id: string;
  title: string;
  content: string | null;
  visibility: string;
  chunk_count: number;
  source_type: DocumentSourceType;
  is_deleted: boolean;
  collection_id: string | null;
  account_id: string | null;
  inserted_at: Date;
  updated_at: Date;
  metadata: JsonValue;
};

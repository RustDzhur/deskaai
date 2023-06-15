import {create} from 'zustand';
import {KnowledgeBaseCollection} from '../types/KnowledgeBaseCollection';
import * as API from '../api';
import {KnowledgeBaseArticle} from '../types/KnowledgeBaseArticle';

export const useKnowledgeBaseStore = create<{
  collections: {
    [key: string]: KnowledgeBaseCollection;
  };
  collectionCurrent: string;
  setCollections: (collections: {
    [key: string]: KnowledgeBaseCollection;
  }) => void;
  setCollectionCurrent: (collectionId: string) => void;
  collectionDocuments: {
    [key: string]: KnowledgeBaseArticle[];
  };
  setCollectionDocuments: (
    collectionId: string,
    documents: KnowledgeBaseArticle[]
  ) => void;
}>((set, get) => ({
  collections: {},
  collectionCurrent: '',
  setCollections: (collections) => set({collections}),
  setCollectionCurrent: (collectionId) =>
    set({collectionCurrent: collectionId}),
  collectionDocuments: {},
  setCollectionDocuments: (collectionId, documents) =>
    set({
      collectionDocuments: {
        ...get().collectionDocuments,
        [collectionId]: documents,
      },
    }),
}));

export const useKnowledgeBaseApi = () => {
  const [collections, setCollections, setCollectionDocuments] =
    useKnowledgeBaseStore((state) => [
      state.collections,
      state.setCollections,
      state.setCollectionDocuments,
    ]);
  const fetchKnowledgeBase = async () => {
    const response = await API.fetchKnowledgeBaseCollections();
    if (response.status === 'ok') {
      setCollections(
        response.data.reduce(
          (acc, collection) => {
            acc[collection.id as string] = collection;
            return acc;
          },
          {} as {
            [key: string]: KnowledgeBaseCollection;
          }
        )
      );
    }
  };

  const fetchKnowledgeBaseDocuments = async (collectionId: string) => {
    const response = await API.knowledgeBaseArticlesApi.fetchDocuments({
      collectionId,
    });
    if (response.status === 'ok') {
      setCollectionDocuments(collectionId, response.data);
    }
  };

  const deleteKnowledgeBase = async (collectionId: string) => {
    const response = await API.deleteKnowledgeBaseCollection(collectionId);

    if (response.status === 'ok') {
      setCollections(
        Object.values(collections).reduce(
          (acc, collection) => {
            if (collection.id !== collectionId) {
              acc[collection.id as string] = collection;
            }
            return acc;
          },
          {} as {
            [key: string]: KnowledgeBaseCollection;
          }
        )
      );
    }
  };

  return {
    collections: Object.values(collections),
    fetchKnowledgeBase,
    deleteKnowledgeBase,
    fetchKnowledgeBaseDocuments,
  };
};

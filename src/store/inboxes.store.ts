import {create} from 'zustand';
import * as API from '../api';
import {Inbox} from '../types';
import {useEffect, useState} from 'react';
import {useTestTore} from './idb-storage';

export const useInboxesStore = create<{
  inboxes: {
    [key: string]: Inbox;
  };
  setInboxes: (inboxes: Inbox[]) => void;
}>((set, get) => ({
  inboxes: {},
  setInboxes: (inboxes) =>
    set({
      inboxes: inboxes.reduce((acc, inbox) => {
        acc[inbox.id as string] = inbox;
        return acc;
      }, {} as {[key: string]: Inbox}),
    }),
}));

export const useLatestInboxesApi = ({expand = false}) => {
  const [loading, setLoading] = useState(false);
  const [inboxes, setInboxes] = useInboxesStore((state) => [
    state.inboxes,
    state.setInboxes,
  ]);

  const fetchInboxesApi = async () => {
    setLoading(true);
    API.fetchInboxes(['widget_setting'])
      .then((inboxes) => setInboxes(inboxes))
      .finally(() => setLoading(false));
  };

  const [addABear, addABear2] = useTestTore((state) => [
    state.addABear,
    state.addABear2,
  ]);

  useEffect(() => {
    fetchInboxesApi();
    addABear();
    addABear2();
  }, []);

  return {
    inboxes: Object.values(inboxes),
    loading,
  };
};

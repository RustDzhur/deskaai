import React from 'react';
import {Box} from 'theme-ui';
import {colors, Popconfirm, TextArea} from '../common';

import * as API from '../../api';
import {CustomerNote} from '../../types';
import logger from '../../logger';

const SidebarCustomerNotes = ({customerId}: {customerId: string}) => {
  const [loading, setLoading] = React.useState(false);
  const [currentNote, setCurrentNote] = React.useState<string>('');
  const [customerNotes, setCustomerNotes] = React.useState<Array<CustomerNote>>(
    []
  );

  React.useEffect(() => {
    setLoading(true);

    API.fetchCustomerNotes(customerId)
      .then((notes: Array<CustomerNote>) => setCustomerNotes(notes))
      .catch((err) => logger.error('Error retrieving customer notes:', err))
      .finally(() => setLoading(false));
  }, [customerId]);

  const refreshCustomerNotes = async () => {
    API.fetchCustomerNotes(customerId)
      .then((notes: Array<CustomerNote>) => setCustomerNotes(notes))
      .catch((err) => logger.error('Error retrieving customer notes:', err));
  };

  const createCustomerNote = async () => {
    if (loading || currentNote.length < 1) {
      return;
    }

    setLoading(true);

    return API.createCustomerNote(customerId, currentNote)
      .then((note: CustomerNote) => {
        if (note && note.id) {
          setCustomerNotes([...customerNotes, note]);
          setCurrentNote('');
        }
      })
      .catch((err) => logger.error('Error creating customer note:', err))
      .finally(() => setLoading(false));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      createCustomerNote();
    }
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentNote(e.target.value);
  };

  const handleDeleteNote = async (note: CustomerNote) => {
    setLoading(true);

    return API.deleteCustomerNote(note.id)
      .then(() => refreshCustomerNotes())
      .catch((err) => logger.error('Error deleting customer note:', err))
      .finally(() => setLoading(false));
  };

  return (
    <Box>
      <Box
        mb={2}
        className="bg-background border-border border-[1px] rounded-md"
      >
        <TextArea
          style={{background: 'transparent'}}
          placeholder="Add a note"
          autoSize={{maxRows: 4}}
          disabled={loading}
          value={currentNote}
          onKeyDown={handleKeyDown}
          onChange={handleNoteChange}
        />
      </Box>

      {customerNotes
        .sort((a: CustomerNote, b: CustomerNote) => {
          return +new Date(b.created_at) - +new Date(a.created_at);
        })
        .map((note) => {
          // TODO: come up with a more elegant way of handling deleting/updating notes
          return (
            <Popconfirm
              key={note.id}
              title="Delete this note?"
              okText="Yes"
              cancelText="No"
              placement="left"
              onConfirm={() => handleDeleteNote(note)}
            >
              <div
                key={note.id}
                style={{
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                  background: colors.secondary,
                  color: colors.secondaryForeground,
                  borderRadius: 2,
                  cursor: 'pointer',
                  paddingInline: 12,

                  paddingBlock: 1,
                  marginBlock: 4,
                }}
                // px={12}
                // py={1}
                // mb={2}
                // sx={{ bg: colors.gold, borderRadius: 2, cursor: 'pointer' }}
              >
                {note.body}
              </div>
            </Popconfirm>
          );
        })}
    </Box>
  );
};

export default SidebarCustomerNotes;

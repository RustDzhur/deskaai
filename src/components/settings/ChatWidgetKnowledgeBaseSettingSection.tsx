import {useEffect, useState} from 'react';
import {useKnowledgeBaseApi} from '../../store/knowledge-base.store';
import {Paragraph, Title} from '../common';
import {SimpleSelect} from '../common/deska-kit-base/select';
import {KnowledgeBaseSettings} from '../../types';

export const ChatWidgetKnowledgeBaseSettingSection = ({
  knowledgeBaseSettings,
  handleKnowledgeBaseSettingChange,
  updateWidgetSettings,
}: {
  knowledgeBaseSettings: KnowledgeBaseSettings;
  handleKnowledgeBaseSettingChange: (value: KnowledgeBaseSettings) => void;
  updateWidgetSettings: () => Promise<void>;
}) => {
  const {fetchKnowledgeBase, collections} = useKnowledgeBaseApi();

  useEffect(() => {
    fetchKnowledgeBase();
  }, []);

  return (
    <>
      <Title level={3}>Knowledge Base</Title>
      <Paragraph>
        <SimpleSelect
          placeholder="Select a collection"
          value={knowledgeBaseSettings?.collections?.[0]?.collectionId || ''}
          onBlur={updateWidgetSettings}
          onChange={(value: string) => {
            handleKnowledgeBaseSettingChange({
              ...knowledgeBaseSettings,
              collections: [
                {
                  collectionId: value,
                },
              ],
            });
          }}
          options={[
            {
              value: '',
              label: 'Select a collection',
            },
            ...collections.map((collection) => {
              return {
                value: collection.id,
                label: collection.name,
              };
            }),
          ]}
        />
      </Paragraph>
    </>
  );
};

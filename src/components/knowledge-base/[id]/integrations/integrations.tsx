import {useParams} from 'react-router-dom';
import Layout from '../shared/layout';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import {Box, Flex} from 'theme-ui';
import {LegacyDefaultTable} from '../../../common/deska-kit-base/table';
import {useLatestInboxesApi} from '../../../../store/inboxes.store';
import {Inbox, WidgetSettings} from '../../../../types';
import {Select, SimpleSelect} from '../../../common/deska-kit-base/select';
import {useKnowledgeBaseApi} from '../../../../store/knowledge-base.store';
import * as API from '../../../../api';
import {set} from 'lodash';
const KnowledgeBaseIntegrations = () => {
  const {collectionId} = useParams<{collectionId: string}>();
  return (
    <Layout
      params={{
        collectionId: collectionId,
      }}
    >
      <section className=" max-w-[960px] px-2 py-4">
        <div className="px-2 mb-5">
          {/* <Title level={3}>Integrations</Title> */}
          <h3 className=" font-bold text-xl">Chat Widget Integrations</h3>

          <p className="">
            Connect Knowledge base with your chat widget{' '}
            <span role="img" aria-label="apps">
              🚀
            </span>
          </p>

          <div className="px-2 my-4">
            <div className="p-3">
              <IntegrationsTable collectionId={collectionId} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const IntegrationsTable = ({collectionId}: {collectionId: string}) => {
  const {inboxes, loading} = useLatestInboxesApi({
    expand: true,
  });

  const {fetchKnowledgeBase} = useKnowledgeBaseApi();

  useEffect(() => {
    fetchKnowledgeBase();
  }, []);

  const isChatAvailable = !!document.querySelector(
    '.Deska-chatWindowContainer'
  );
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (value: string, record: Inbox) => {
        return <div>{record.name}</div>;
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (value: string, record: Inbox) => {
        return <div>{record.description}</div>;
      },
    },
    {
      title: 'Knowledge base',
      dataIndex: 'knowledgeBase',
      key: 'knowledgeBase',
      render: (
        value: string,
        record: Inbox & {
          widget_setting: WidgetSettings;
        }
      ) => {
        return (
          <WidgetSettingIntegration widgetSetting={record.widget_setting} />
        );
      },
    },
  ];

  return (
    <LegacyDefaultTable
      loading={loading}
      dataSource={inboxes}
      columns={columns}
    />
  );
};

const WidgetSettingIntegration = ({
  widgetSetting,
}: {
  widgetSetting: WidgetSettings;
}) => {
  const {collections} = useKnowledgeBaseApi();

  const selectedCollection = collections?.find(
    (collection) =>
      collection.id ===
      widgetSetting?.knowledge_base_settings?.collections?.[0].collectionId
  );

  const [selectedCollectionId, setSelectedCollectionId] =
    React.useState<string>(selectedCollection?.id || '');

  const [updating, setUpdating] = React.useState(false);
  const updateWidgetSetting = (value: string) => {
    setUpdating(true);
    const newWidgetSetting: Partial<WidgetSettings> = {
      knowledge_base_settings: {
        collections: [
          {
            collectionId: value,
          },
        ],
      },
    };
    API.updateWidgetSettings(widgetSetting)
      .then((res) => {
        setSelectedCollectionId(value);
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  if (!widgetSetting) {
    return null;
  }

  return (
    <SimpleSelect
      loading={updating}
      value={selectedCollectionId ?? 'Select knowledge base'}
      options={
        collections?.map((collection) => ({
          label: collection.name,
          value: collection.id,
        })) || []
      }
      onChange={updateWidgetSetting}
      placeholder="Select knowledge base"
    />
  );
};

export {KnowledgeBaseIntegrations};

import {useEffect} from 'react';
import {ChatWidget} from '@papercups-io/chat-widget';

export const accountId = '63dc426a-ad7b-4489-a0c8-42a52d66ddc8';
export const inboxId = '3d7b70bc-db93-4bda-b5c8-53bdcc9da2c6';

export const TestChatPage = () => {
  console.log('TestChatPage');
  // ensure that useEffect is called only once.

  useEffect(() => {
    // if ((process as any)?.env?.NODE_ENV === 'development') {
    //   document.getElementById('deskaai-iframe-hack')?.remove();
    // }
    //     <script
    //   type="text/javascript"
    //   async
    //   defer
    //   src="http://localhost:4000/storytime.js"
    // ></script>

    setTimeout(() => {
      if (!document.getElementById('deska-livesession')) {
        (window as any).Deska = {
          config: {
            accountId,

            // Optionally pass in metadata to identify the customer
            // customer: {
            //  name: "Test User",
            //  email: "test@test.com",
            //  external_id: "123",
            // },
            publicKey: 'testing',

            // Optionally specify the base URL
            baseUrl: 'http://localhost:4000',
          },
        };
        const script = document.createElement('script');
        script.id = 'deska-livesession';
        script.src =
          'https://cdn.jsdelivr.net/gh/deskaai/cdn/livesession/latest.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    }, 1000);

    setTimeout(() => {
      if (!document.getElementById('deska-chat-widget')) {
        (window as any).Deska = {
          config: {
            token: accountId,
            inbox: inboxId,
            title: 'Welcome to DeskaAI',
            subtitle: 'Ask us anything in the chat window below 😊',
            primaryColor: '#2563eb',
            newMessagePlaceholder: 'Start typing...',
            showAgentAvailability: false,
            agentAvailableText: "We're online right now!",
            agentUnavailableText: "We're away at the moment.",
            requireEmailUpfront: false,
            iconVariant: 'outlined',
            baseUrl: 'http://localhost:4000',
            iframeUrlOverride: 'http://localhost:8080',
          },
        };
        const script = document.createElement('script');
        script.id = 'deska-chat-widget';
        script.src =
          'https://cdn.jsdelivr.net/gh/deskaai/cdn/chat-widget/latest.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    });
  });

  return (
    <>
      <input type="text" className=" text-black" />
      <textarea className="text-black"></textarea>
    </>
  );
};

export const TestChatPageV2 = () => {
  const accountId = '27ae4763-cfbe-46ed-ac76-0285c758d249';
  useEffect(() => {
    setTimeout(() => {
      if (!document.getElementById('deska-livesession')) {
        (window as any).Papercups = {
          config: {
            accountId,

            // Optionally pass in metadata to identify the customer
            // customer: {
            //  name: "Test User",
            //  email: "test@test.com",
            //  external_id: "123",
            // },
            publicKey: 'testing',

            baseUrl: 'https://app.papercups.io',
          },
        };
        const script = document.createElement('script');
        script.id = 'deska-livesession';
        script.src = 'https://app.papercups.io/storytime.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    }, 1);
  });

  return (
    <>
      <input type="text" className=" text-black" />
      <textarea className="text-black"></textarea>
      <ChatWidget
        token="27ae4763-cfbe-46ed-ac76-0285c758d249"
        inbox="a02c2ca5-af40-4d18-913b-252f85600e18"
        title="Welcome to asdfa"
        subtitle="Ask us anything in the chat window below 😊"
        primaryColor="#00d084"
        newMessagePlaceholder="Start typing..."
        showAgentAvailability={false}
        agentAvailableText="We're online right now!"
        agentUnavailableText="We're away at the moment."
        requireEmailUpfront={false}
        iconVariant="outlined"
        baseUrl="https://app.papercups.io"
      />
    </>
  );
};

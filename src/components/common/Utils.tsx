import {Loader, Popup} from 'semantic-ui-react';

export function Loading({loading, children}: any) {
  return !loading ? children : <Loader active inline="centered" />;
}

export function tooltipWrapper(trigger: any, tooltip: any) {
  return <Popup size="mini" inverted content={tooltip} trigger={trigger} />;
}

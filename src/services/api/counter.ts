// import {stores} from '../../stores';

import {CounterGetResponse} from '../../utils/types/api';

export class CounterApi {
  get = async (): Promise<CounterGetResponse> => {
    const resp = await fetch('https://cli-rn.batyr.io/api/counter');
    const json: CounterGetResponse = await resp.json();
    return json;
  };
}

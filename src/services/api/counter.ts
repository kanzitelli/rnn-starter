import {stores} from '../../stores';

export class CounterApi {
  get = async (): PVoid => {
    const {counter} = stores;

    counter.setLoading(true);

    const resp = await fetch('https://cli-rn.batyr.io/api/counter');
    const json: CounterGetResponse = await resp.json();

    counter.set(json.value);
    counter.setLoading(false);
  };
}

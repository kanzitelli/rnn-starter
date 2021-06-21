export class ExampleService implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      // your code ...

      this.inited = true;
    }
  };
}

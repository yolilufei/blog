type PromiseCreator = () => Promise<unknown>;;

class Scheduler {
  executedQueue: PromiseCreator[] = [];
  currentQueue: PromiseCreator[] = [];
  currentIndex = 0;
  add(promiseCreator: PromiseCreator) {
    // 记录总数
    this.executedQueue.push(promiseCreator);
    // 开始执行
    const ret = this.execute();
    return ret;
  }

  execute(item?: PromiseCreator): Promise<unknown> {
    if (!item) {
      this.currentQueue.push(this.executedQueue[0]);
      return this.execute(this.executedQueue[0]);
    } else {
      return new Promise((resolve, reject) => {
        item()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.currentQueue = this.currentQueue.filter((f) => f !== item);
            if (this.currentQueue.length < 2) {
              this.currentQueue.push(this.executedQueue[++this.currentIndex]);
              this.execute(this.executedQueue[++this.currentIndex]);
            }
          });
      });
    }
  }
}

const timeout = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();
const addTask = (time: number, order: string) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
// output: 2 3 1 4

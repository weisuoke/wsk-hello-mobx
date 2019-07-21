import { observable, action, runInAction, flow } from "mobx";

class TopicStore {
  @observable topics = [];
  @observable loading = true;
  @observable error;

  // 第一种异步方案
  @action
  loadTopic = () => {
    runInAction(() => {
      this.loading = true;
    });
    fetch("https://cnodejs.org/api/v1/topics")
      .then(response => response.json())
      .then(({ data }) => {
        console.log(data);
        this.saveTopics(data);
      });
  };

  // 第二种异步方案
  loadTopicsInline = () => {
    fetch("https://cnodejs.org/api/v1/topics")
      .then(response => response.json())
      .then(({ data }) => {
        console.log(data);
        runInAction(() => {
          this.topics = data;
        });
      });
  };

  // 第三种异步方案
  loadTopicAsync = async () => {
    try {
      const response = await fetch("https://cnodejs.org/api/v1/tpics");
      const json = await response.json();

      runInAction(() => {
        this.topics = json.data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
      });
    }
  };

  // 第四种异步方案
  loadTopicGenerator = flow(function*() {
    runInAction(() => {
      this.loading = true;
      this.error = null;
    });

    try {
      const response = yield fetch("https://cnodejs.org/api/v1/t1opics");
      const json = yield response.json();

      this.topics = json.data;
      this.loading = false;
    } catch (err) {
      console.log(err);
      this.error = err.message;
    }
  });

  @action
  saveTopics(data) {
    this.topics = data;
    this.loading = false;
  }
}

export default new TopicStore();

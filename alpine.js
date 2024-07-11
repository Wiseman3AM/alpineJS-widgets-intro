const counterData = {
    count: 0,
    increment() {
      this.count = Math.min(this.count + 1, 10);
    },
    decrement() {
      this.count = Math.max(this.count - 1, 0);
    }
  };
  
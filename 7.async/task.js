class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if(!time || !callback) {
      const error = new Error('Отсутствуют обязательные аргументы');
      throw error;
    }

    if (this.alarmCollection.includes(time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push(
      {
        callback,
        time,
        canCall: true
      }
    );
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    let date = new Date();
    return date.toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => 
      this.alarmCollection.forEach(element => {
        if (element.time === this.getCurrentFormattedTime() && element.canCall === true) {
          element.canCall = false;
          element.callback();
        }
      }), 1000
    );
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(element => element.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
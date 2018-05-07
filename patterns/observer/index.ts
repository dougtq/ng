interface Subject {
  registerObserver (o : Observer) : void;
  removeObserver (o : Observer) : void;
  notifyObservers () : void;
}

interface Observer {
  update (temperature : number) : void;
}

class WheaterStation implements Subject {
  private temperature!: number;
  private observers : Array<Observer> = [];

  public setTemperature (temp : number) : void {
    console.log('New temparature: ', temp);
    this.temperature = temp;
    this.notifyObservers();
  }

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }
  
  public notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class TemperatureDisplay implements Observer {
  private subject : Subject;

  constructor(sub : Subject) {
    this.subject = sub;
    sub.registerObserver(this);
  };

  update(temperature: number): void {
    console.log('Update temperature');
  }
}

class Fan implements Observer {
  private subject : Subject;

  constructor(sub : Subject) {
    this.subject = sub;
    sub.registerObserver(this);
  };

  update(temperature: number): void {
    if (temperature > 25) {
      console.log('Turn fan on');
    } else {
      console.log('Turn fan off');
    }
  }
}

let weatherStation = new WheaterStation();

let display = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
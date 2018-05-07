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
  
  update(temperature: number): void {
    throw new Error("Method not implemented.");
  }
}
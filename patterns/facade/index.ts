class BlurayPlayer {
  public on(): void {
    console.log('Turn on Bluray');
  }

  public turnOff(): void {
    console.log('Turn off Bluray');
  }

  public play(): void {
    console.log('Play Bluray');    
  }
}

class Amplifier {
  public on(): void {
    console.log('Turn on Amplifier');
  }

  public turnOff(): void {
    console.log('Turn off Amplifier');
  }

  public setSource(source: string): void {
    console.log('Setting source to ', source);
  }

  public setVolume(volumeLevel: number): void {
    console.log('Setting Volume level to ', volumeLevel);
  }
}

class Lights {
  dim() {
    console.log('Dimming the lights');
  }
}

class TV {
  public turnOn(): void {
    console.log('Turn on TV');
  }

  public turnOff(): void {
    console.log('Turn off Tv');
  }
}

class PopcornMaker {
  public turnOn(): void {
    console.log('Turn on Popcorn Maker');
  }

  public turnOff(): void {
    console.log('Turn off Popcorn Maker');
  }

  public pop(): void {
    console.log('Pop');
  }
}

class HomeTheaterFacade {
  private bluray: BlurayPlayer;
  private amp: Amplifier;
  private tv: TV;
  private lights: Lights;
  private popcorn: PopcornMaker;

  constructor(bluray: BlurayPlayer, amp: Amplifier, tv: TV, lights: Lights, popcorn: PopcornMaker) {
    this.bluray = bluray;
    this.amp = amp;
    this.tv = tv;
    this.lights = lights;
    this.popcorn = popcorn;
  }

  public watchMovie(): void {
    this.popcorn.turnOn();
    this.popcorn.pop();
    
    this.amp.on();
    this.amp.setSource('Bluray');
    this.amp.setVolume(17);

    this.tv.turnOn();

    this.lights.dim();
    
    this.bluray.on();
    this.bluray.play();
  }

  public stopWatching(): void {
    this.popcorn.turnOff();
    
    this.amp.turnOff();

    this.tv.turnOff();
    
    this.bluray.turnOff();
  }
}

const tv = new TV();
const amp = new Amplifier();
const lights = new Lights();
const popcorn = new PopcornMaker();
const bluray = new BlurayPlayer();

const homeTheater = new HomeTheaterFacade(bluray, amp, tv, lights, popcorn);

homeTheater.watchMovie();
homeTheater.stopWatching();
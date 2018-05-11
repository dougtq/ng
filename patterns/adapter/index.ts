interface Iphone {
  useLightning(): void;
}

interface Android {
  useMicroUSB(): void;
}

class Iphone7 implements Iphone {
  public useLightning(): void {
    console.log('Using lightning port');
  }
}

class GooglePixel implements Android {
  public useMicroUSB(): void {
    console.log('Using USB port');
  }
}

class LightningToUSBAdapter implements Android {
  constructor(public iphoneDevice: Iphone7) {}

  public useMicroUSB(): void {
    console.log('Charging Iphone 7');
    this.iphoneDevice.useLightning();
  }
}

class USBToLightningAdapter implements Iphone {
  constructor(private androidDevice: GooglePixel){}

  public useLightning(): void {
    console.log('Using lightning port to charge Android');
    this.androidDevice.useMicroUSB();
  }
}

const iphone: Iphone7 = new Iphone7();
const android: Android = new GooglePixel();
const usbToLight = new LightningToUSBAdapter(iphone);
const lightToUsb = new USBToLightningAdapter(android);


usbToLight.useMicroUSB();
lightToUsb.useLightning();
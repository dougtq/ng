
interface State {
  order: Order;

  cancelOrder(): void;
  verifyPayment(): void;
  shipOrder(): void; 
}

class Order {
  public cancelOrderState: State;
  public paymentPendingState: State;
  public orderShippedState: State;
  public orderBeingPreparedState: State;
  
  private currentState!: State;

  constructor() {
    this.cancelOrderState = new CancelOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderBeingPreparedState = new orderBeingPreparedState(this);
    this.orderShippedState = new OrderShippedState(this);

    this.setState(this.paymentPendingState);
  }

  public getState(): State {
    return this.currentState;
  }

  public setState(state: State) {
    this.currentState = state;
  }
}

class PaymentPendingState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }
  
  cancelOrder(): void {
    console.log('Order getting canceled');
    this.order.setState(this.order.cancelOrderState);
  }

  verifyPayment(): void {
    console.log('Payment being verified');
    this.order.setState(this.order.orderBeingPreparedState);
  }

  shipOrder(): void {
    throw new Error('Cannot ship order with pending payment.');
  }
}

class CancelOrderState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }
  
  cancelOrder(): void {
    throw new Error('Already cancelled');
  }

  verifyPayment(): void {
    throw new Error('Cancelled Order');
  }

  shipOrder(): void {
    throw new Error('Cancelled Order');
  }
}

class orderBeingPreparedState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }
  
  cancelOrder(): void {
    console.log('Order getting canceled');
    this.order.setState(this.order.cancelOrderState);
  }

  verifyPayment(): void {
    throw new Error('Order has already been verified'); 
  }

  shipOrder(): void {
    console.log('Shipping your order now');
    this.order.setState(this.order.orderShippedState);
  }
}

class OrderShippedState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }
  
  cancelOrder(): void {
    throw new Error('Order already shipped cannot cancel it!');
  }

  verifyPayment(): void {
    throw new Error('Payment already been verified!');
  }

  shipOrder(): void {
    throw new Error('Order has already been shipped');
  }
}

const order = new Order();
order.getState().verifyPayment();
order.getState().verifyPayment();

console.log(order.getState().constructor.name);


export type BasketItem = {
  title: string;
};

export type Alert = {
  message?: string;
  show: boolean;
  type?: AlertType;
};

export type AlertType = 'success' | 'error';

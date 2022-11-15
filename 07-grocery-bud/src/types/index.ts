export type BasketItem = {
  id: string;
  title: string;
};

export type Alert = {
  message?: string;
  show: boolean;
  type?: AlertType;
};

export type AlertType = 'success' | 'error';

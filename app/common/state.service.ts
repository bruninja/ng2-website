import {Injectable} from '@angular/core';

@Injectable()
export class StateService {
	private _message = 'Escreva algo';

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };
}

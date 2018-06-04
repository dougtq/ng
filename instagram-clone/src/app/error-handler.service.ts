import { ErrorHandler, Injectable, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN } from 'http-status-codes';
import { ToastsManager, Toast, ToastOptions } from 'ng2-toastr';

@Injectable()
export class HandlerService implements ErrorHandler {
  constructor(private router: Router, private toastManager: ToastsManager) {}

  static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = 'An error occurred!';
  static readonly DEFAULT_ERROR_TITLE: string = 'Something went wrong';

  public handleError(error: any) {
    const httpErrorCode = error.code;
    switch (httpErrorCode) {
      case UNAUTHORIZED:
          this.router.navigateByUrl('/');
          sessionStorage.clear();
          break;
      case FORBIDDEN:
          this.router.navigateByUrl('/');
          sessionStorage.clear();
          break;
      case BAD_REQUEST:
         this.showDefaultError(error.message);
          break;
      default:
         this.showDefaultError(error.message);
    }
  }

  private showDefaultError(message: string) {
    this.toastManager.error(message, HandlerService.DEFAULT_ERROR_TITLE, { toastLife: 5000, dismiss: 'click', showCloseButton: true });
    //   .then((toast: Toast) => {
    //         const currentToastId: number = toast.id;
    //         this.toastManager.onClickToast().subscribe(clickedToast => {
    //             if (clickedToast.id === currentToastId) {
    //                 this.toastManager.dismissToast(toast);
    //                 // window.location.reload();
    //             }
    //         });
    //     });
  }

  public showSuccess(message: string = 'Sua ação foi completada com sucesso!', title: string = 'Yaaayy'): void {
    this.toastManager.success(message, title, { toastLife: 5000, dismiss: 'click', showCloseButton: true });
  }

  public showError(message: string = 'Algo de errado aconteceu!', title: string = 'Oooops!'): void {
    this.toastManager.warning(message, title, { toastLife: 5000, dismiss: 'click', showCloseButton: true });
  }
}

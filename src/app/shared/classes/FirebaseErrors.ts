export class FirebaseErrors {
  static Parse(errorCode: string): string {

    let message: string;

    switch (errorCode) {
      case 'auth/wrong-password':
        message = 'Correo o contraseña incorrectos.';
        break;
      case 'auth/network-request-failed':
        message = 'No tienes conexión a internet';
        break;
      case 'auth/too-many-requests':
        message =
          'Hemos detectado mucho tráfico desde tu dispositivo, descansa un rato por favor';
        break;
      case 'auth/user-disabled':
        message =
          'Tu cuenta se ha deshabilitado, porfavor contacta con el administrador';
        break;
      case 'auth/requires-recent-login':
        message = 'Inicia sesión e inténtalo de nuevo';
        break;
      case 'auth/email-already-exists':
        message = 'El correo electrónico ya se encuentra en uso por otro usuario.';
        break;
      case 'auth/user-not-found':
        message =
          'No0 hemos encontrado un usuario relacionado con este correo electrónico o número de teléfono';
        break;
      case 'auth/phone-number-already-exists':
        message = 'El número ya se encuentra en uso por otro usuario';
        break;
      case 'auth/invalid-phone-number':
        message = 'Este no es un número de teléfono válido porfavor revísalo';
        break;
      case 'auth/invalid-email  ':
        message = 'Este no es un correo electrónico válido porfavor revísalo';
        break;
      case 'auth/cannot-delete-own-user-account':
        message = 'No puedes eliminar tu propia cuenta.';
        break;
      default:
        message = 'Algo salió mal y no sabemos que es, intentalo de nuevo';
        break;
    }

    return message;
  }
}
